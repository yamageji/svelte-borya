<script lang="ts">
  import { useMediaQuery } from '../useMediaQuery/index.svelte';

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">useMediaQuery</h2>

  <div class="ml-2 mt-2">
    <p>isLargeScreen: {isLargeScreen.value}</p>
    <p>prefersDark: {prefersDark.value}</p>
  </div>
</div>
