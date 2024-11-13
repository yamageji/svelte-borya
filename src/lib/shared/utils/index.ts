export * from './is';
export * from './types';

// increaseWithUnit
export function increaseWithUnit(target: number, delta: number): number;
export function increaseWithUnit(target: string, delta: number): string;
export function increaseWithUnit(target: string | number, delta: number): string | number;
export function increaseWithUnit(target: string | number, delta: number): string | number {
  if (typeof target === 'number') return target + delta;
  const value = target.match(/^-?\d+\.?\d*/)?.[0] || '';
  const unit = target.slice(value.length);
  const result = Number.parseFloat(value) + delta;
  if (Number.isNaN(result)) return target;
  return result + unit;
}

// objectEntries
export function objectEntries<T extends object>(obj: T) {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}

// createSingletonPromise
export interface SingletonPromiseReturn<T> {
  (): Promise<T>;
  reset: () => Promise<void>;
}

export function createSingletonPromise<T>(fn: () => Promise<T>): SingletonPromiseReturn<T> {
  let _promise: Promise<T> | undefined;

  function wrapper() {
    if (!_promise) _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = undefined;
    if (_prev) await _prev;
  };

  return wrapper;
}
