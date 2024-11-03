<script lang="ts">
  import { usePreferredColorScheme } from './index.svelte';

  const prefersColorScheme = usePreferredColorScheme();
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">usePreferredColorScheme</h2>

  <div class="ml-2 mt-2">
    <p>prefersColorScheme: {prefersColorScheme.value}</p>
  </div>
</div>
