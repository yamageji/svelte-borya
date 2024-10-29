<script lang="ts">
  import { useStorage } from './index.svelte';

  const theDefault = 1;
  const state1 = useStorage('svalte-borya-storage-1', theDefault);
  const state2 = useStorage('svalte-borya-storag-2', false);
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">useStorage</h2>

  <p lang="json">number: {state1.value}</p>
  <p lang="json">boolean: {state2.value}</p>
  <div class="mt-2">
    <button onclick={() => (state1.value += 1)} class="rounded bg-stone-200 px-4 py-2"
      >Increment number</button
    >
  </div>
  <div class="mt-2">
    <button onclick={() => (state2.value = !state2.value)} class="rounded bg-stone-200 px-4 py-2"
      >toggle boolean</button
    >
  </div>
</div>
