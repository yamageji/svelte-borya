<script lang="ts">
  import { useStorage } from './index.svelte';
  import { defaultWindow } from '../_configurable';

  const theDefault = 0;
  const state1 = useStorage('svelte-borya-storage-1', theDefault, defaultWindow?.localStorage, {
    shallow: true
  });
  // const state2 = useStorage('svelte-borya-storag-2', false);
</script>

<p lang="json">number: {state1.value}</p>
<!-- <p lang="json">boolean: {state2.value}</p> -->
<div class="flex gap-2">
  <button
    onclick={() => (state1.value += 1)}
    class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
    >Increment number</button
  >
  <!-- <button
        onclick={() => (state2.value = !state2.value)}
        class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
        >toggle boolean</button
      > -->
</div>
