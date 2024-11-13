import type { MaybeGetter } from '../../shared';
import type { ConfigurableWindow } from '../_configurable';
import { toValue } from '../../shared';
import { defaultWindow } from '../_configurable';
import { onDestroy, onMount } from 'svelte';

export function useMediaQuery(query: MaybeGetter<string>, options: ConfigurableWindow = {}) {
  const { window = defaultWindow } = options;
  const isSupported = () =>
    window && 'matchMedia' in window && typeof window.matchMedia === 'function';

  let mediaQuery: MediaQueryList | undefined;
  let matches = $state(false);

  const handler = (event: MediaQueryListEvent) => {
    matches = event.matches;
  };

  const cleanup = () => {
    if (!mediaQuery) return;
    if ('removeEventListener' in mediaQuery) mediaQuery.removeEventListener('change', handler);
    // @ts-expect-error deprecated API
    else mediaQuery.removeListener(handler);
  };

  const stopWatch = () => {
    if (!isSupported) return;

    cleanup();

    mediaQuery = window!.matchMedia(toValue(query));

    if ('addEventListener' in mediaQuery) mediaQuery.addEventListener('change', handler);
    // @ts-expect-error deprecated API
    else mediaQuery.addListener(handler);

    matches = mediaQuery.matches;
  };

  onMount(() => {
    stopWatch();
  });

  onDestroy(() => {
    cleanup();
    mediaQuery = undefined;
  });

  return {
    get value() {
      return matches;
    }
  };
}
