import type { AnyFn, MaybeGetter } from '../utils';

export function toValue<T>(r: MaybeGetter<T>): T {
  return typeof r === 'function' ? (r as AnyFn)() : $state.snapshot(r);
}

export const resolveUnref = toValue;
