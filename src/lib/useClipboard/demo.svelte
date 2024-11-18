<script lang="ts">
  import { useClipboard } from './index.svelte';
  import { usePermission } from '../usePermission/index.svelte';

  let input = $state('');

  const clipboard = useClipboard();
  const permissionRead = usePermission('clipboard-read');
  const permissionWrite = usePermission('clipboard-write');
</script>

{#if clipboard.isSupported}
  <div>
    <note>
      Clipboard Permission: read <b>{permissionRead.state}</b> | write
      <b>{permissionWrite.state}</b>
    </note>
    <p>
      Current copied: <code>{clipboard.text || 'none'}</code>
    </p>
    <div class="flex items-center gap-2">
      <input
        type="text"
        bind:value={input}
        class="mt-2 rounded-sm border border-neutral-500 px-2.5 py-1 dark:border-neutral-200 dark:bg-neutral-900"
      />
      <button
        type="button"
        onclick={() => clipboard.copy(input)}
        class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
      >
        Copy
      </button>
    </div>
  </div>
{:else}
  <p>Your browser does not support Clipboard API</p>
{/if}
