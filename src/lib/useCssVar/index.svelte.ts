import type { MaybeGetter } from '$lib/shared';
import type { ConfigurableWindow } from '../_configurable';
import { toValue } from '$lib/shared';
import { defaultWindow } from '../_configurable';

export interface UseCssVarOptions extends ConfigurableWindow {
  initialValue?: string;
  observe?: boolean;
}

export function useCssVar(
  prop: MaybeGetter<string | null | undefined>,
  target?: HTMLElement | SVGElement | undefined | null,
  options: UseCssVarOptions = {}
) {
  const { window = defaultWindow, initialValue } = options;
  let variable = $state<string | null | undefined>(initialValue);

  const elRef = target || window?.document?.documentElement;

  function updateCssVar() {
    const key = toValue(prop);
    if (elRef && window && key) {
      const value = window.getComputedStyle(elRef).getPropertyValue(key)?.trim();
      variable = value || initialValue;
    }
  }

  $effect(() => {
    if (prop) updateCssVar();
  });

  $effect(() => {
    const raw_prop = toValue(prop);
    if (elRef?.style && raw_prop) {
      if (variable == null) elRef.style.removeProperty(raw_prop);
      else elRef.style.setProperty(raw_prop, variable);
    }
  });

  return {
    get variable() {
      return variable;
    },
    set variable(value: string | null | undefined) {
      variable = value;
    }
  };
}

export type UseCssVarReturn = ReturnType<typeof useCssVar>;
