<script lang="ts">
  import { useDark } from '../useDark/index.svelte';

  const isDark = useDark();
  const toggleDark = () => (isDark.value = !isDark.value);
</script>

<div
  class="rounded-md border-2 border-stone-300 p-4 dark:border-stone-950 dark:bg-stone-800 dark:text-stone-50"
>
  <h2 class="text-lg font-bold">useColorMode</h2>

  <div class="ml-2 mt-2">
    <p class="">mode: {isDark.value ? 'Dark' : 'Light'}</p>
    <button
      type="button"
      onclick={toggleDark}
      class="mt-2 rounded bg-stone-800 px-4 py-2 text-stone-50 dark:bg-stone-200 dark:text-stone-950"
    >
      change
    </button>
  </div>
</div>
