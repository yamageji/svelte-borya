<script lang="ts">
  import { useDark } from '../useDark/index.svelte';

  const isDark = useDark();
  const toggleDark = () => (isDark.value = !isDark.value);
</script>

<p class="">mode: {isDark.value ? 'Dark' : 'Light'}</p>
<button
  type="button"
  onclick={toggleDark}
  class="mt-2 rounded bg-stone-700 px-4 py-2 text-stone-50 duration-200 hover:bg-stone-950 dark:bg-stone-200 dark:text-stone-950 dark:hover:bg-white"
>
  change
</button>
