<script lang="ts">
  import { useLocalStorage } from './index.svelte';

  const flag = useLocalStorage('svelte-borya-local-storage', false);
</script>

<p lang="json">flag: {flag.value}</p>
<button
  onclick={() => (flag.value = !flag.value)}
  class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
  >toggle flag</button
>
