import type { ConfigurableWindow } from '../_configurable';
import { useMediaQuery } from '../useMediaQuery/index.svelte';

export type ReducedMotionType = 'reduce' | 'no-preference';

export function usePreferredReducedMotion(options?: ConfigurableWindow) {
  const isReduced = useMediaQuery('(prefers-reduced-motion: reduce)', options);

  const state = $derived.by(() => {
    if (isReduced.value) return 'reduce';
    return 'no-preference';
  });

  return {
    get value() {
      return state;
    }
  };
}
