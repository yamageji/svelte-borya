import type { MaybeGetter } from '$lib/shared';
import type { ConfigurableNavigator } from '../_configurable';
import { toValue, useTimeoutFn } from '$lib/shared';
import { defaultNavigator } from '../_configurable';
import { useEventListener } from '../useEventListener/index.svelte';
import { useSupported } from '../useSupported/index.svelte';

export interface UseClipboardItemsOptions<Source> extends ConfigurableNavigator {
  read?: boolean;
  source?: Source;
  copiedDuring?: number;
}

export interface UseClipboardItemsReturn<Optional> {
  isSupported: boolean;
  content: ClipboardItems;
  copied: boolean;
  copy: Optional extends true
    ? (content?: ClipboardItems) => Promise<void>
    : (text: ClipboardItems) => Promise<void>;
}

export function useClipboardItems(
  options?: UseClipboardItemsOptions<undefined>
): UseClipboardItemsReturn<false>;
export function useClipboardItems(
  options: UseClipboardItemsOptions<MaybeGetter<ClipboardItems>>
): UseClipboardItemsReturn<true>;
export function useClipboardItems(
  options: UseClipboardItemsOptions<MaybeGetter<ClipboardItems> | undefined> = {}
): UseClipboardItemsReturn<boolean> {
  const { navigator = defaultNavigator, read = false, source, copiedDuring = 1500 } = options;

  const isSupported = useSupported(() => navigator && 'clipboard' in navigator) as {
    value: boolean;
  };
  let content = $state<ClipboardItems>([]);
  let copied = $state(false);
  const timeout = useTimeoutFn(() => (copied = false), copiedDuring);

  function updateContent() {
    if (isSupported.value) {
      navigator!.clipboard.read().then((items) => {
        content = items;
      });
    }
  }

  if (isSupported.value && read) useEventListener(['copy', 'cut'], updateContent);

  async function copy(value = toValue(source)) {
    if (isSupported.value && value != null) {
      await navigator!.clipboard.write(value);

      content = value;
      copied = true;
      timeout.start();
    }
  }

  return {
    get isSupported() {
      return isSupported.value;
    },
    get content() {
      return content as ClipboardItems;
    },
    get copied() {
      return copied as boolean;
    },
    copy
  };
}
