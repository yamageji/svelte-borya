<script lang="ts">
  import { useDark } from '$lib/useDark/index.svelte';

  const isDark = useDark();
</script>

<div class="flex gap-1 lg:pl-2">
  <button
    type="button"
    onclick={() => (isDark.value = !isDark.value)}
    class="grid size-10 place-content-center"
  >
    {#if isDark.value}
      <span class="hidden">moon</span>
      <span class="heroicons--moon-solid iconify size-5 dark:text-neutral-50"></span>
    {:else}
      <span class="hidden">sun</span>
      <span class="heroicons--sun-solid iconify size-5 text-neutral-700"></span>
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
