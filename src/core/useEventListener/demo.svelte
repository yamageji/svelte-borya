<script lang="ts">
  import { useEventListener } from './index.svelte';
  import { onMount } from 'svelte';

  let key = $state('');
  let isClick = $state(false);

  let divRef: Window | HTMLDivElement;

  onMount(() => {
    useEventListener(divRef, 'click', () => {
      isClick = !isClick;
    });
  });

  useEventListener('keydown', (e) => {
    key = e.key;
  });
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">useEventListener</h2>

  <div class="ml-2 mt-2">
    <p>key: {key}</p>
    <p></p>
  </div>

  <div bind:this={divRef} class="mt-2 w-fit cursor-pointer rounded bg-slate-200 px-4 py-2">
    toggle Click: {isClick}
  </div>
</div>
