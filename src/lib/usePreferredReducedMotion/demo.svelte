<script lang="ts">
  import { usePreferredReducedMotion } from './index.svelte';

  const prefersReducedMotion = usePreferredReducedMotion();
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">usePreferredReducedMotion</h2>

  <div class="ml-2 mt-2">
    <p>prefersReducedMotion: {prefersReducedMotion.value}</p>
  </div>
</div>
