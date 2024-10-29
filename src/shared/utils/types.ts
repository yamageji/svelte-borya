/* eslint-disable @typescript-eslint/no-explicit-any */

export type Fn = () => void;

export type AnyFn = (...args: any[]) => any;

export type Arrayable<T> = T[] | T;

export type MaybeGetter<T> = T | (() => T);

export type Awaitable<T> = Promise<T> | T;

export type Promisify<T> = Promise<Awaited<T>>;

export type MaybeReactive<T> = {
  get value(): () => T;
  set: (value: T | null | undefined) => void;
};
