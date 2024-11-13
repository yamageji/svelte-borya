import type { ConfigurableWindow } from '../_configurable';
import { defaultWindow } from '../_configurable';
import { useEventListener } from '../useEventListener/index.svelte';

export function usePreferredLanguages(options: ConfigurableWindow = {}) {
  let value = $state();
  const { window = defaultWindow } = options;
  if (!window) {
    value = ['en'];
  } else {
    const navigator = window.navigator;
    value = navigator.languages;
    useEventListener(window, 'languagechange', () => {
      value = navigator.languages;
    });
  }

  return {
    get value() {
      return value;
    }
  };
}
