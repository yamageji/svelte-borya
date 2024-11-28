<script lang="ts">
  import { useStorage } from './index.svelte';
  import { defaultWindow } from '../_configurable';

  const state = useStorage('my-store', { hello: 'hi', greeting: 'Hello' });
  const flag = useStorage('svelte-borya-storag-2', false);
  const count = useStorage('my-count', 0);
</script>

<p lang="json">state: {JSON.stringify(state.value)}</p>
<p lang="json">flag: {flag.value}</p>
<p lang="json">count: {count.value}</p>

<div class="flex gap-2">
  <button
    onclick={() => (flag.value = !flag.value)}
    class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
    >toggle flag</button
  >
  <button
    onclick={() => (count.value += 1)}
    class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
    >Increment number</button
  >
  <button
    onclick={() => (state.value = null)}
    class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
    >delete state from storage</button
  >
</div>
