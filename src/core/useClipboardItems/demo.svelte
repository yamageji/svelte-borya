<script lang="ts">
  import { useClipboardItems } from './index.svelte';
  import { usePermission } from '../usePermission/index.svelte';

  let input = $state('');

  let clipboardItems = $state(useClipboardItems());
  let computedText = $state('');
  $effect(() => {
    Promise.all(clipboardItems.content.map((item) => item.getType('text/html')))
      .then((blobs) => {
        return Promise.all(blobs.map((blob) => blob.text()));
      })
      .then((texts) => {
        computedText = texts.join('');
      });
  });
  const permissionRead = usePermission('clipboard-read');
  const permissionWrite = usePermission('clipboard-write');

  function createClipboardItems(text: string) {
    const mime = 'text/html';
    const blob = new Blob([text], { type: mime });
    return new ClipboardItem({
      [mime]: blob
    });
  }
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">useClipboardItems</h2>

  <div class="ml-2 mt-2">
    {#if clipboardItems.isSupported}
      <div>
        <note>
          Clipboard Permission: read <b>{permissionRead.state}</b> | write
          <b>{permissionWrite.state}</b>
        </note>
        <p>
          Current copied:
          <code>{(computedText && `${computedText} (mime: text/html)`) || 'none'}</code>
        </p>
        <div class="flex items-center gap-2">
          <input
            bind:value={input}
            type="text"
            class="mt-2 rounded-sm border border-stone-500 px-2.5 py-1 dark:border-stone-200 dark:bg-stone-900"
          />
          <button
            type="button"
            class="mt-2 rounded bg-stone-800 px-4 py-2 text-stone-50 dark:bg-stone-200 dark:text-stone-950"
            onclick={() => clipboardItems.copy([createClipboardItems(input)])}
          >
            Copy
          </button>
        </div>
      </div>
    {:else}
      <p>Your browser does not support Clipboard API</p>
    {/if}
  </div>
</div>
