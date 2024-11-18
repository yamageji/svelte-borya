<script lang="ts">
  import { useTimeoutFn } from './index.svelte';

  const defaultText = 'Please wait for 3 seconds';
  let text = $state(defaultText);
  const timeoutFn = useTimeoutFn(() => {
    text = 'Fired!';
  }, 3000);

  function restart() {
    text = defaultText;
    timeoutFn.start();
  }
</script>

<div class="rounded-md border-2 border-neutral-300 p-4">
  <h2 class="text-lg font-bold">useTimeoutFn</h2>

  <div>
    <p>{text}</p>
    <p>isPending: {timeoutFn.isPending}</p>
    <button
      class={timeoutFn.isPending
        ? 'mt-2 rounded bg-neutral-200 px-4 py-2 text-neutral-500 duration-200  dark:bg-neutral-800 dark:text-neutral-500'
        : 'mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white'}
      onclick={restart}
    >
      Restart
    </button>
  </div>
</div>
