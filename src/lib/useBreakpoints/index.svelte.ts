import type { ConfigurableWindow } from '$lib/_configurable';
import type { MaybeGetter } from '$lib/shared';
import { increaseWithUnit, toValue } from '$lib/shared';
import { useMediaQuery } from '$lib/useMediaQuery/index.svelte';

export * from './breakpoints';

export type Breakpoints<K extends string = string> = Record<K, number | string>;

export interface UseBreakpointsOptions extends ConfigurableWindow {
  strategy?: 'min-width' | 'max-width';
}

export function useBreakpoints<K extends string>(
  breakpoints: Breakpoints<K>,
  options: UseBreakpointsOptions = {}
): UseBreakpointsReturn<K> {
  function getValue(k: MaybeGetter<K>, delta?: number) {
    let v = toValue(breakpoints[toValue(k)]);

    if (delta != null) v = increaseWithUnit(v, delta);
    if (typeof v === 'number') v = `${v}px`;

    return v;
  }

  const { strategy = 'min-width' } = options;

  const greaterOrEqual = (k: MaybeGetter<K>) => {
    return useMediaQuery(() => `(min-width: ${getValue(k)})`, options);
  };

  const smallerOrEqual = (k: K) => {
    return useMediaQuery(`(max-width: ${getValue(k)})`, options);
  };

  const shortcutMethods = Object.keys(breakpoints).reduce(
    (shortcuts, k) => {
      Object.defineProperty(shortcuts, k, {
        get: () => (strategy === 'min-width' ? greaterOrEqual(k as K) : smallerOrEqual(k as K)),
        enumerable: true,
        configurable: true
      });
      return shortcuts;
    },
    {} as Record<K, boolean>
  );

  function current() {
    const points = $state(
      Object.keys(breakpoints).map((i) => [i, greaterOrEqual(i as K)] as const)
    );
    const current = $derived(points.filter(([, v]) => v.value).map(([k]) => k));
    return {
      get value() {
        return current;
      }
    };
  }

  function active() {
    const currentItems = current();
    const active = $derived(currentItems.value.length === 0 ? '' : currentItems.value.at(-1));
    return {
      get value() {
        return active;
      }
    };
  }

  return Object.assign(shortcutMethods, {
    greaterOrEqual,
    smallerOrEqual,
    greater(k: K) {
      return useMediaQuery(`(min-width: ${getValue(k, 0.1)})`, options);
    },
    smaller(k: K) {
      return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
    },
    between(a: K, b: K) {
      return useMediaQuery(
        `(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`,
        options
      );
    },
    current,
    active
  });
}

export type UseBreakpointsReturn<K extends string = string> = {
  greaterOrEqual: (k: K) => { value: boolean };
  smallerOrEqual: (k: K) => { value: boolean };
  greater(k: K): { value: boolean };
  smaller(k: K): { value: boolean };
  between(a: K, b: K): { value: boolean };
  current: () => { value: string[] };
  active(): { value: string | undefined };
} & Record<K, boolean>;
