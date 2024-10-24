/* eslint-disable @typescript-eslint/no-explicit-any */

export type Fn = () => void

export type AnyFn = (...args: any[]) => any

export type Arrayable<T> = T[] | T

export type MaybeGetter<T> = T | (() => T)