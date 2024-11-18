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

<p class="">mode: {mode.value}</p>
<button
  type="button"
  onclick={toggleMode}
  class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
  >change</button
>
