<script lang="ts">
  import { usePreferredDark } from './index.svelte';

  const prefersDark = usePreferredDark();
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">usePreferredDark</h2>

  <div class="ml-2 mt-2">
    <p>prefersDark: {prefersDark.value}</p>
  </div>
</div>
