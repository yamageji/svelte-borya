export const isClient = typeof window !== 'undefined' && typeof document !== 'undefined';
const toString = Object.prototype.toString;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isObject = (val: any): val is object => toString.call(val) === '[object Object]';
export const noop = () => {};
