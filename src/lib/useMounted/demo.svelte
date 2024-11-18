<script lang="ts">
  import { useMounted } from './index.svelte';

  const isMounted = useMounted();
</script>

<div class="rounded-md border-2 border-neutral-300 p-4">
  <h2 class="text-lg font-bold">useMounted</h2>

  <div class="ml-2 mt-2">
    <p>isMounted: {isMounted.value ? 'mounted' : 'unmounted'}</p>
  </div>
</div>
