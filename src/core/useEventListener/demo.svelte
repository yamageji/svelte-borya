<script lang="ts">
  import { useEventListener } from './index.svelte';

  let key = $state('');

  useEventListener('keydown', (e) => {
    key = e.key;
  });
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">useEventListener</h2>

  <div class="ml-2 mt-2">
    <p>key: {key}</p>
  </div>
</div>
