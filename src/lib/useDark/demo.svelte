<script lang="ts">
  import { useDark } from '../useDark/index.svelte';

  const isDark = useDark();
  const toggleDark = () => (isDark.value = !isDark.value);
</script>

<p class="">mode: {isDark.value ? 'Dark' : 'Light'}</p>
<button
  type="button"
  onclick={toggleDark}
  class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
>
  change
</button>
