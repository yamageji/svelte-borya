import { onMount } from 'svelte';
import type { MaybeGetter } from '../../shared';
import type { StorageLike } from '../ssr-handlers';
// import type { MaybeElementRef } from '../unrefElement'
import type { UseStorageOptions } from '../useStorage/index.svelte';
// import { toRef } from '../../shared';
import { defaultWindow } from '../_configurable';
import { getSSRHandler } from '../ssr-handlers';
// import { unrefElement } from '../unrefElement';
import { usePreferredDark } from '../usePreferredDark/index.svelte';
import { useStorage } from '../useStorage/index.svelte';

export type BasicColorMode = 'light' | 'dark';
export type BasicColorSchema = BasicColorMode | 'auto';

export interface UseColorModeOptions<T extends string = BasicColorMode>
  extends UseStorageOptions<T | BasicColorMode> {
  // selector?: string | MaybeElementRef;
  selector?: string;
  attribute?: string;
  initialValue?: MaybeGetter<T | BasicColorSchema>;
  modes?: Partial<Record<T | BasicColorSchema, string>>;
  onChanged?: (
    mode: T | BasicColorMode,
    defaultHandler: (mode: T | BasicColorMode) => void
  ) => void;
  // storageRef?: MaybeGetter<T | BasicColorSchema>;
  storageKey?: string | null;
  storage?: StorageLike;
  // emitAuto?: boolean;
  disableTransition?: boolean;
}

export type UseColorModeReturn<T extends string = BasicColorMode> =
  | T
  | (BasicColorSchema & {
      store: T | BasicColorSchema;
      system: BasicColorMode;
      state: T | BasicColorMode;
    });

const CSS_DISABLE_TRANS =
  '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';

export function useColorMode<T extends string = BasicColorMode>(
  options: UseColorModeOptions<T> = {}
): UseColorModeReturn<T> {
  const {
    selector = 'html',
    attribute = 'class',
    initialValue = 'auto',
    window = defaultWindow,
    storage,
    storageKey = 'svelte-borya-color-scheme',
    listenToStorageChanges = true,
    // storageRef,
    // emitAuto,
    disableTransition = true
  } = options;

  const modes = {
    auto: '',
    light: 'light',
    dark: 'dark',
    ...(options.modes || {})
  } as Record<BasicColorSchema | T, string>;

  const preferredDark = usePreferredDark({ window });
  const system = $derived(preferredDark.value ? 'dark' : 'light');

  const store = useStorage<T | BasicColorSchema>(storageKey, initialValue, storage, {
    window,
    listenToStorageChanges
  }).value;

  const state = $derived(store === 'auto' ? system : store);

  const updateHTMLAttrs = getSSRHandler('updateHTMLAttrs', (selector, attribute, value) => {
    const el =
      typeof selector === 'string'
        ? window?.document.querySelector(selector)
        : // : unrefElement(selector);
          window?.document.querySelector('html');
    if (!el) return;

    const classesToAdd = new Set<string>();
    const classesToRemove = new Set<string>();
    let attributeToChange: { key: string; value: string } | null = null;

    if (attribute === 'class') {
      const current = value.split(/\s/g);
      Object.values(modes)
        .flatMap((i) => (i || '').split(/\s/g))
        .filter(Boolean)
        .forEach((v) => {
          if (current.includes(v)) classesToAdd.add(v);
          else classesToRemove.add(v);
        });
    } else {
      attributeToChange = { key: attribute, value };
    }

    if (classesToAdd.size === 0 && classesToRemove.size === 0 && attributeToChange === null)
      // Nothing changed so we can avoid reflowing the page
      return;

    let style: HTMLStyleElement | undefined;
    if (disableTransition) {
      style = window!.document.createElement('style');
      style.appendChild(document.createTextNode(CSS_DISABLE_TRANS));
      window!.document.head.appendChild(style);
    }

    for (const c of classesToAdd) {
      el.classList.add(c);
    }
    for (const c of classesToRemove) {
      el.classList.remove(c);
    }
    if (attributeToChange) {
      el.setAttribute(attributeToChange.key, attributeToChange.value);
    }

    if (disableTransition) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _ = window!.getComputedStyle(style!).opacity;
      document.head.removeChild(style!);
    }
  });

  function defaultOnChanged(mode: T | BasicColorMode) {
    updateHTMLAttrs(selector, attribute, modes[mode] ?? mode);
  }

  function onChanged(mode: T | BasicColorMode) {
    if (options.onChanged) options.onChanged(mode, defaultOnChanged);
    else defaultOnChanged(mode);
  }

  $effect(() => {
    onChanged(state);
  });

  onMount(() => {
    onChanged(state);
  });

  return {
    get value() {
      return Object.assign({ store, system, state }) as UseColorModeReturn<T>;
    }
  };
}
