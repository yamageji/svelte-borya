<script lang="ts">
  import { usePreferredContrast } from './index.svelte';

  const prefersContrast = usePreferredContrast();
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">usePreferredContrast</h2>

  <div class="ml-2 mt-2">
    <p>prefersContrast: {prefersContrast.value}</p>
  </div>
</div>
