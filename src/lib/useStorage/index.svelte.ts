/* eslint-disable @typescript-eslint/no-explicit-any */
import { onMount } from 'svelte';
import type { Awaitable, ConfigurableEventFilter, MaybeGetter } from '$lib/shared';
import type { ConfigurableWindow } from '../_configurable';
import type { StorageLike } from '../ssr-handlers';
import { toValue } from '$lib/shared';
import { defaultWindow } from '../_configurable';
import { getSSRHandler } from '../ssr-handlers';
import { useEventListener } from '../useEventListener/index.svelte';
import { guessSerializerType } from './guess';

export interface Serializer<T> {
  read: (raw: string) => T;
  write: (value: T) => string;
}

export interface SerializerAsync<T> {
  read: (raw: string) => Awaitable<T>;
  write: (value: T) => Awaitable<string>;
}

export const StorageSerializers: Record<
  'boolean' | 'object' | 'number' | 'any' | 'string' | 'map' | 'set' | 'date',
  Serializer<any>
> = {
  boolean: {
    read: (v: any) => v === 'true',
    write: (v: any) => String(v)
  },
  object: {
    read: (v: any) => JSON.parse(v),
    write: (v: any) => JSON.stringify(v)
  },
  number: {
    read: (v: any) => Number.parseFloat(v),
    write: (v: any) => String(v)
  },
  any: {
    read: (v: any) => v,
    write: (v: any) => String(v)
  },
  string: {
    read: (v: any) => v,
    write: (v: any) => String(v)
  },
  map: {
    read: (v: any) => new Map(JSON.parse(v)),
    write: (v: any) => JSON.stringify(Array.from((v as Map<any, any>).entries()))
  },
  set: {
    read: (v: any) => new Set(JSON.parse(v)),
    write: (v: any) => JSON.stringify(Array.from(v as Set<any>))
  },
  date: {
    read: (v: any) => new Date(v),
    write: (v: any) => v.toISOString()
  }
};

export const customStorageEventName = 'svelte-borya-storage';

export interface StorageEventLike {
  storageArea: StorageLike | null;
  key: StorageEvent['key'];
  oldValue: StorageEvent['oldValue'];
  newValue: StorageEvent['newValue'];
}

export interface UseStorageOptions<T> extends ConfigurableEventFilter, ConfigurableWindow {
  deep?: boolean;
  listenToStorageChanges?: boolean;
  writeDefaults?: boolean;
  mergeDefaults?: boolean | ((storageValue: T, defaults: T) => T);
  serializer?: Serializer<T>;
  onError?: (error: unknown) => void;
  shallow?: boolean;
  initOnMounted?: boolean;
}

export function useStorage(
  key: string,
  defaults: MaybeGetter<string>,
  storage?: StorageLike,
  options?: UseStorageOptions<string>
): { value: string };
export function useStorage(
  key: string,
  defaults: MaybeGetter<boolean>,
  storage?: StorageLike,
  options?: UseStorageOptions<boolean>
): { value: boolean };
export function useStorage(
  key: string,
  defaults: MaybeGetter<number>,
  storage?: StorageLike,
  options?: UseStorageOptions<number>
): { value: number };
export function useStorage<T>(
  key: string,
  defaults: MaybeGetter<T>,
  storage?: StorageLike,
  options?: UseStorageOptions<T>
): { value: T };
export function useStorage<T = unknown>(
  key: string,
  defaults: MaybeGetter<null>,
  storage?: StorageLike,
  options?: UseStorageOptions<T>
): { value: T };

export function useStorage<T extends string | number | boolean | object | null>(
  key: string,
  defaults: MaybeGetter<T>,
  storage: StorageLike | undefined,
  options: UseStorageOptions<T> = {}
): { value: T } {
  const {
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window = defaultWindow,
    onError = (e) => {
      console.error(e);
    },
    initOnMounted
  } = options;

  let data = $state(typeof defaults === 'function' ? defaults() : defaults) as T;
  if (shallow) data = $state.snapshot(typeof defaults === 'function' ? defaults() : defaults) as T;

  if (!storage) {
    try {
      storage = getSSRHandler('getDefaultStorage', () => defaultWindow?.localStorage)();
    } catch (e) {
      onError(e);
    }
  }

  if (!storage) return { value: data };

  const rawInit: T = toValue(defaults);
  const type = guessSerializerType<T>(rawInit);
  const serializer = options.serializer ?? StorageSerializers[type];

  if (window && listenToStorageChanges) {
    onMount(() => {
      if (storage instanceof Storage) useEventListener(window, 'storage', update);
      else useEventListener(window, customStorageEventName, updateFromCustomEvent);

      if (initOnMounted) update();
    });
  }

  // avoid reading immediately to avoid hydration mismatch when doing SSR
  if (!initOnMounted) update();

  function dispatchWriteEvent(oldValue: string | null, newValue: string | null) {
    if (window) {
      const payload = {
        key,
        oldValue,
        newValue,
        storageArea: storage as Storage
      };

      window.dispatchEvent(
        storage instanceof Storage
          ? new StorageEvent('storage', payload)
          : new CustomEvent<StorageEventLike>(customStorageEventName, {
              detail: payload
            })
      );
    }
  }

  function write(v: unknown) {
    try {
      const oldValue = storage!.getItem(key);

      if (v == null) {
        dispatchWriteEvent(oldValue, null);
        storage!.removeItem(key);
      } else {
        const serialized = serializer.write(v as any);
        if (oldValue !== serialized) {
          storage!.setItem(key, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e) {
      onError(e);
    }
  }

  function read(event?: StorageEventLike) {
    const rawValue = event ? event.newValue : storage!.getItem(key);

    if (rawValue == null) {
      if (writeDefaults && rawInit != null) storage!.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === 'function') return mergeDefaults(value, rawInit);
      else if (type === 'object' && !Array.isArray(value)) return { ...(rawInit as any), ...value };
      return value;
    } else if (typeof rawValue !== 'string') {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }

  function update(event?: StorageEventLike) {
    if (event && event.storageArea !== storage) return;

    if (event && event.key == null) {
      data = rawInit;
      return;
    }

    if (event && event.key !== key) return;

    try {
      if (event?.newValue !== serializer.write(data)) data = read(event);
    } catch (e) {
      onError(e);
    } finally {
      $effect(() => write(data));
    }
  }

  function updateFromCustomEvent(event: CustomEvent<StorageEventLike>) {
    update(event.detail);
  }

  return {
    get value() {
      return data;
    },
    set value(v: T) {
      data = v;
    }
  };
}
