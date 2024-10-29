/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { onMount } from 'svelte';
import type { Arrayable, Fn, MaybeGetter } from '../../shared';
import { isObject, noop } from '../../shared';
import { defaultWindow } from '../_configurable';

interface InferEventTarget<Events> {
  addEventListener: (event: Events, fn?: any, options?: any) => any;
  removeEventListener: (event: Events, fn?: any, options?: any) => any;
}

export type WindowEventName = keyof WindowEventMap;
export type DocumentEventName = keyof DocumentEventMap;

export interface GeneralEventListener<E = Event> {
  (evt: E): void;
}

/**
 * Overload 1: Omitted Window target
 */
export function useEventListener<E extends keyof WindowEventMap>(
  event: Arrayable<E>,
  listener: Arrayable<(this: Window, ev: WindowEventMap[E]) => any>,
  options?: MaybeGetter<boolean | AddEventListenerOptions>
): Fn;

/**
 * Overload 2: Explicitly Window target
 */
export function useEventListener<E extends keyof WindowEventMap>(
  target: Window,
  event: Arrayable<E>,
  listener: Arrayable<(this: Window, ev: WindowEventMap[E]) => any>,
  options?: MaybeGetter<boolean | AddEventListenerOptions>
): Fn;

/**
 * Overload 3: Explicitly Document target
 */
export function useEventListener<E extends keyof DocumentEventMap>(
  target: DocumentOrShadowRoot,
  event: Arrayable<E>,
  listener: Arrayable<(this: Document, ev: DocumentEventMap[E]) => any>,
  options?: MaybeGetter<boolean | AddEventListenerOptions>
): Fn;

/**
 * Overload 4: Explicitly HTMLElement target
 */
export function useEventListener<E extends keyof HTMLElementEventMap>(
  target: MaybeGetter<HTMLElement | null | undefined>,
  event: Arrayable<E>,
  listener: (this: HTMLElement, ev: HTMLElementEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions
): () => void;

/**
 * Overload 5: Custom event target with event type infer
 */
export function useEventListener<Names extends string, EventType = Event>(
  target: MaybeGetter<InferEventTarget<Names> | null | undefined>,
  event: Arrayable<Names>,
  listener: Arrayable<GeneralEventListener<EventType>>,
  options?: MaybeGetter<boolean | AddEventListenerOptions>
): Fn;

/**
 * Overload 6: Custom event target fallback
 */
export function useEventListener<EventType = Event>(
  target: MaybeGetter<EventTarget | null | undefined>,
  event: Arrayable<string>,
  listener: Arrayable<GeneralEventListener<EventType>>,
  options?: MaybeGetter<boolean | AddEventListenerOptions>
): Fn;

export function useEventListener(...args: any[]) {
  let target = $state();
  let events: Arrayable<string>;
  let listeners: Arrayable<Function>;
  let options = $state();

  if (typeof args[0] === 'string' || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }

  if (!target) return noop;

  if (!Array.isArray(events)) events = [events];
  if (!Array.isArray(listeners)) listeners = [listeners];

  const cleanups: Function[] = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };

  const register = (el: any, event: string, listener: any, options: any) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };

  const stopWatch = () => {
    $effect(() => {
      cleanup();
      if (!target) return;

      // create a clone of options, to avoid it being changed reactively on removal
      const optionsClone = isObject(options) ? { ...options } : options;
      cleanups.push(
        ...(events as string[]).flatMap((event) => {
          return (listeners as Function[]).map((listener) =>
            register(target, event, listener, optionsClone)
          );
        })
      );
    });
  };

  const stop = () => {
    stopWatch();
    cleanup();
  };

  onMount(() => {
    stop();
  });

  return {
    get value() {
      return stop;
    }
  };
}
