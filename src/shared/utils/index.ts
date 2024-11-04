export * from './is';
export * from './types';

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

export function objectEntries<T extends object>(obj: T) {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}
