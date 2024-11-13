/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */

import type { MaybeGetter } from '$lib/shared';
import type { ConfigurableNavigator } from '../_configurable';
import { toValue, useTimeoutFn } from '$lib/shared';
import { defaultNavigator } from '../_configurable';
import { useEventListener } from '../useEventListener/index.svelte';
import { usePermission } from '../usePermission/index.svelte';

export interface UseClipboardOptions<Source> extends ConfigurableNavigator {
  read?: boolean;
  source?: Source;
  copiedDuring?: number;
  legacy?: boolean;
}

export interface UseClipboardReturn<Optional> {
  isSupported: boolean;
  text: string;
  copied: boolean;
  copy: Optional extends true ? (text?: string) => Promise<void> : (text: string) => Promise<void>;
}

export function useClipboard(options?: UseClipboardOptions<undefined>): UseClipboardReturn<false>;
export function useClipboard(
  options: UseClipboardOptions<MaybeGetter<string>>
): UseClipboardReturn<true>;
export function useClipboard(
  options: UseClipboardOptions<MaybeGetter<string> | undefined> = {}
): UseClipboardReturn<boolean> {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500,
    legacy = false
  } = options;

  const isClipboardApiSupported = navigator && 'clipboard' in navigator;
  const permissionRead = usePermission('clipboard-read');
  const permissionWrite = usePermission('clipboard-write');
  const isSupported = isClipboardApiSupported || legacy;
  let text = $state('');
  let copied = $state(false);
  const timeout = useTimeoutFn(() => (copied = false), copiedDuring);

  function updateText() {
    if (isClipboardApiSupported && isAllowed(permissionRead.state as unknown as PermissionState)) {
      navigator!.clipboard.readText().then((value) => {
        text = value;
      });
    } else {
      text = legacyRead();
    }
  }

  if (isSupported && read) useEventListener(['copy', 'cut'], updateText);

  async function copy(value = toValue(source)) {
    if (isSupported && value != null) {
      if (isClipboardApiSupported && isAllowed(permissionWrite.state as unknown as PermissionState))
        await navigator!.clipboard.writeText(value);
      else legacyCopy(value);

      text = value;
      copied = true;
      timeout.start();
    }
  }

  function legacyCopy(value: string) {
    const ta = document.createElement('textarea');
    ta.value = value ?? '';
    ta.style.position = 'absolute';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }

  function legacyRead() {
    return document?.getSelection?.()?.toString() ?? '';
  }

  function isAllowed(status: PermissionState | undefined) {
    return status === 'granted' || status === 'prompt';
  }

  return {
    get isSupported() {
      return isSupported;
    },
    get text() {
      return text as string;
    },
    set text(value: string) {
      text = value;
    },
    get copied() {
      return copied as boolean;
    },
    copy
  };
}
