<script lang="ts">
  import { useStorage } from './index.svelte';

  const state = useStorage('my-store', { greeting: 'Hello', name: 'VueUse' });
  const flag = useStorage('svelte-borya-storag-2', false);
  const count = useStorage('my-count', 0);
</script>

<p lang="json">state: {JSON.stringify(state.value)}</p>
<p lang="json">flag: {flag.value}</p>
<p lang="json">count: {count.value}</p>

<div class="mt-4 flex flex-col gap-2">
  <label>
    state.greeting:
    <input
      type="text"
      bind:value={state.value.greeting}
      class="rounded-sm border border-neutral-300 px-2 py-1 dark:bg-neutral-800"
    />
  </label>
  <label>
    state.name:
    <input
      type="text"
      bind:value={state.value.name}
      class="rounded-sm border border-neutral-300 px-2 py-1 dark:bg-neutral-800"
    />
  </label>
</div>

<div class="mt-2 flex gap-2">
  <button
    onclick={() => (state.value = { greeting: 'bye bye', name: 'Svelteborya' })}
    class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
    >change state</button
  >
  <button
    onclick={() => (flag.value = !flag.value)}
    class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
    >toggle flag</button
  >
  <button
    onclick={() => (count.value += 1)}
    class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
    >Increment number</button
  >
</div>
