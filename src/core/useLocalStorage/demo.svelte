<script lang="ts">
  import { useLocalStorage } from './index.svelte';

  const state = useLocalStorage('svalte-borya-local-storage', false);
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">useLocalStorage</h2>

  <p lang="json">boolean: {state.value}</p>

  <div class="mt-2">
    <button
      onclick={() => (state.value = !state.value)}
      class="mt-2 rounded bg-stone-700 px-4 py-2 text-stone-50 duration-200 hover:bg-stone-950 dark:bg-stone-200 dark:text-stone-950 dark:hover:bg-white"
      >toggle boolean</button
    >
  </div>
</div>
