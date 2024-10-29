import type { BasicColorSchema, UseColorModeOptions } from '../useColorMode/index.svelte';
import { defaultWindow } from '../_configurable';
import { useColorMode } from '../useColorMode/index.svelte';
import { usePreferredDark } from '../usePreferredDark/index.svelte';

export interface UseDarkOptions
  extends Omit<UseColorModeOptions<BasicColorSchema>, 'modes' | 'onChanged'> {
  valueDark?: string;
  valueLight?: string;
  onChanged?: (
    isDark: boolean,
    defaultHandler: (mode: BasicColorSchema) => void,
    mode: BasicColorSchema
  ) => void;
}

export function useDark(options: UseDarkOptions = {}) {
  const { valueDark = 'dark', valueLight = '', window = defaultWindow } = options;

  const mode = useColorMode({
    ...options,
    onChanged: (mode, defaultHandler) => {
      if (options.onChanged) options.onChanged?.(mode === 'dark', defaultHandler, mode);
      else defaultHandler(mode);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  });

  const system = $derived.by(() => {
    if (mode.system) {
      return mode.system;
    } else {
      const preferredDark = usePreferredDark({ window });
      return preferredDark.value ? 'dark' : 'light';
    }
  });

  const isDark = {
    get value() {
      return mode.value === 'dark';
    },
    set value(v: boolean) {
      const modeVal: BasicColorSchema = v ? 'dark' : 'light';
      if (system === modeVal) mode.value = 'auto';
      else mode.value = modeVal;
    }
  };

  return isDark;
}
