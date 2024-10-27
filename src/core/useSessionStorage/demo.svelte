<script lang="ts">
  import { useSessionStorage } from './index.svelte';

  const state = useSessionStorage('svalte-borya-session-storage', false);
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">useSessionStorage</h2>

  <p lang="json">boolean: {state.value}</p>

  <div class="mt-2">
    <button onclick={() => (state.value = !state.value)} class="rounded bg-slate-200 px-4 py-2"
      >toggle boolean</button
    >
  </div>
</div>
