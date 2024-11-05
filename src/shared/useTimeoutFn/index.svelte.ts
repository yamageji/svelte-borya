import { onDestroy } from 'svelte';
import type { AnyFn, MaybeGetter, Stoppable } from '../utils';
import { toValue } from '../toValue/index.svelte';
import { isClient } from '../utils';

export interface UseTimeoutFnOptions {
  immediate?: boolean;
}

export function useTimeoutFn<CallbackFn extends AnyFn>(
  cb: CallbackFn,
  interval: MaybeGetter<number>,
  options: UseTimeoutFnOptions = {}
): Stoppable<Parameters<CallbackFn> | []> {
  const { immediate = true } = options;

  let isPending = $state(false);

  let timer: ReturnType<typeof setTimeout> | null = null;

  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function stop() {
    isPending = false;
    clear();
  }

  function start(...args: Parameters<CallbackFn> | []) {
    clear();
    isPending = true;
    timer = setTimeout(() => {
      isPending = false;
      timer = null;

      cb(...args);
    }, toValue(interval));
  }

  if (immediate) {
    isPending = true;
    if (isClient) start();
  }

  onDestroy(stop);

  return {
    get isPending() {
      return isPending;
    },
    start,
    stop
  };
}
