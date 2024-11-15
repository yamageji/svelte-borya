<script lang="ts">
  import { useLocalStorage } from './index.svelte';

  const state = useLocalStorage('svelte-borya-local-storage', false);
</script>

<p lang="json">boolean: {state.value}</p>
<button
  onclick={() => (state.value = !state.value)}
  class="mt-2 rounded bg-stone-700 px-4 py-2 text-stone-50 duration-200 hover:bg-stone-950 dark:bg-stone-200 dark:text-stone-950 dark:hover:bg-white"
  >toggle boolean</button
>
