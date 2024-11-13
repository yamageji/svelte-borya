import type { MaybeGetter } from '../../shared';
import type { UseStorageOptions } from '../useStorage/index.svelte';
import { defaultWindow } from '../_configurable';
import { useStorage } from '../useStorage/index.svelte';

export function useSessionStorage(
  key: string,
  initialValue: MaybeGetter<string>,
  options?: UseStorageOptions<string>
): { value: string };
export function useSessionStorage(
  key: string,
  initialValue: MaybeGetter<boolean>,
  options?: UseStorageOptions<boolean>
): { value: boolean };
export function useSessionStorage(
  key: string,
  initialValue: MaybeGetter<number>,
  options?: UseStorageOptions<number>
): { value: number };
export function useSessionStorage<T>(
  key: string,
  initialValue: MaybeGetter<T>,
  options?: UseStorageOptions<T>
): { value: T };
export function useSessionStorage<T = unknown>(
  key: string,
  initialValue: MaybeGetter<null>,
  options?: UseStorageOptions<T>
): { value: T };

export function useSessionStorage<T extends string | number | boolean | object | null>(
  key: string,
  initialValue: MaybeGetter<T>,
  options: UseStorageOptions<T> = {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): { value: any } {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window?.sessionStorage, options);
}
