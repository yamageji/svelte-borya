import type { ConfigurableWindow } from '../_configurable';
import { useMediaQuery } from '../useMediaQuery/index.svelte';

export type ColorSchemeType = 'dark' | 'light' | 'no-preference';

export function usePreferredColorScheme(options?: ConfigurableWindow) {
  const isLight = useMediaQuery('(prefers-color-scheme: light)', options);
  const isDark = useMediaQuery('(prefers-color-scheme: dark)', options);

  const state = $derived.by(() => {
    if (isDark.value) return 'dark';
    if (isLight.value) return 'light';
    return 'no-preference';
  });

  return {
    get value() {
      return state;
    }
  };
}
