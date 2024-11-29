<script lang="ts">
  import { useColorMode } from '$lib/useColorMode/index.svelte';

  const mode = useColorMode();
  const toggleMode = () => {
    if (mode.value === 'light') {
      mode.value = 'dark';
    } else {
      mode.value = 'light';
    }
  };
</script>

<div class="flex gap-1 lg:pl-2">
  <button type="button" onclick={toggleMode} class="grid size-10 place-content-center">
    {#if mode.value === 'dark'}
      <span class="hidden">moon</span>
      <span class="iconify size-5 heroicons--moon-solid dark:text-neutral-50"></span>
    {:else}
      <span class="hidden">sun</span>
      <span class="iconify size-5 text-neutral-700 heroicons--sun-solid"></span>
    {/if}
  </button>

  <a
    href="https://github.com/yamageji/svelte-borya"
    target="_blank"
    rel="noopener noreferrer"
    class="grid size-10 place-content-center"
  >
    <span class="hidden">github</span>
    <span class="iconify size-6 mdi--github dark:text-neutral-50"></span>
  </a>
</div>
