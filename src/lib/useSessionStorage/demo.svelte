<script lang="ts">
  import { useSessionStorage } from './index.svelte';

  const state = useSessionStorage('svelte-borya-session-storage', false);
</script>

<p lang="json">boolean: {state.value}</p>
<button
  onclick={() => (state.value = !state.value)}
  class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
  >toggle boolean</button
>
