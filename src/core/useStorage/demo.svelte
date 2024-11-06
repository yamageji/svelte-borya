<script lang="ts">
  import { useStorage } from './index.svelte';

  const theDefault = 1;
  const state1 = useStorage('svelte-borya-storage-1', theDefault);
  const state2 = useStorage('svelte-borya-storag-2', false);
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">useStorage</h2>

  <div class="ml-2 mt-2">
    <p lang="json">number: {state1.value}</p>
    <p lang="json">boolean: {state2.value}</p>
    <div class="flex gap-2">
      <button
        onclick={() => (state1.value += 1)}
        class="mt-2 rounded bg-stone-700 px-4 py-2 text-stone-50 duration-200 hover:bg-stone-950 dark:bg-stone-200 dark:text-stone-950 dark:hover:bg-white"
        >Increment number</button
      >
      <button
        onclick={() => (state2.value = !state2.value)}
        class="mt-2 rounded bg-stone-700 px-4 py-2 text-stone-50 duration-200 hover:bg-stone-950 dark:bg-stone-200 dark:text-stone-950 dark:hover:bg-white"
        >toggle boolean</button
      >
    </div>
  </div>
</div>
