<script lang="ts">
  import { usePreferredLanguages } from './index.svelte';

  const prefersLanguages = usePreferredLanguages();
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">usePreferredLanguages</h2>

  <div class="ml-2 mt-2">
    <p>prefersLanguages: {prefersLanguages.value}</p>
  </div>
</div>
