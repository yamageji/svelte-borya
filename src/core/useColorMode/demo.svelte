<script lang="ts">
  import { useColorMode } from '../useColorMode/index.svelte';

  const mode = useColorMode();
  const toggleMode = () => {
    if (mode.value === 'light') {
      mode.value = 'dark';
    } else {
      mode.value = 'light';
    }
  };
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">useColorMode</h2>

  <div class="ml-2 mt-2">
    <p class="">mode: {mode.value}</p>
    <button
      type="button"
      onclick={toggleMode}
      class="mt-2 rounded bg-stone-800 px-4 py-2 text-stone-50 dark:bg-stone-200 dark:text-stone-950"
      >change</button
    >
  </div>
</div>
