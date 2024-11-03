import type { ConfigurableWindow } from '../_configurable';
import { useMediaQuery } from '../useMediaQuery/index.svelte';

export type ContrastType = 'more' | 'less' | 'custom' | 'no-preference';

export function usePreferredContrast(options?: ConfigurableWindow) {
  const isMore = useMediaQuery('(prefers-contrast: more)', options);
  const isLess = useMediaQuery('(prefers-contrast: less)', options);
  const isCustom = useMediaQuery('(prefers-contrast: custom)', options);

  const state = $derived.by(() => {
    if (isMore.value) return 'more';
    if (isLess.value) return 'less';
    if (isCustom.value) return 'custom';
    return 'no-preference';
  });

  return {
    get value() {
      return state;
    }
  };
}
