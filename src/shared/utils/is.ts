/* eslint-disable @typescript-eslint/no-explicit-any */
export const isClient = typeof window !== 'undefined' && typeof document !== 'undefined';
const toString = Object.prototype.toString;
export const isObject = (val: any): val is object => toString.call(val) === '[object Object]';
export const noop = () => {};
export const notNullish = <T = any>(val?: T | null | undefined): val is T => val != null;
