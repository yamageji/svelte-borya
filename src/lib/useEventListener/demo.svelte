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

<p>key: {key}</p>

<div
  bind:this={divRef}
  class="mt-2 w-fit cursor-pointer rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
>
  toggle Click: {isClick}
</div>
