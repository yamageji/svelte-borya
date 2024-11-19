<script lang="ts">
  import type { SvelteComponent } from 'svelte';

  let { data } = $props();

  let Docs = $state<typeof SvelteComponent>();
  let Demo = $state<typeof SvelteComponent>();

  $effect(() => {
    Docs = data.docs.content;
    Demo = data.demo.content;
  });
</script>

<div class="flex flex-col gap-8">
  <section class="docs">
    <h1 class="mb-4 text-3xl font-bold">
      {data.docs?.title}
    </h1>
    {#if Docs}
      <Docs />
    {/if}
  </section>

  <section class="demo">
    <h2 class="text-lg font-bold">Demo</h2>
    <div class="mt-4 rounded-md bg-neutral-100 p-8 dark:bg-neutral-800">
      {#if Demo}
        <Demo />
      {/if}
    </div>
  </section>
</div>

<style>
  :global(.docs h2) {
    @apply mb-3 mt-10 text-lg font-bold;
  }
  :global(.docs pre) {
    @apply overflow-x-auto rounded-md !bg-neutral-100 p-6 text-sm leading-6;
  }
  :global(.dark .docs pre) {
    @apply !bg-neutral-800;
  }
  :global(html.dark .shiki span) {
    @apply !bg-neutral-800;
  }
  :global(.docs table) {
    @apply w-full;
  }
  :global(.docs th) {
    @apply border border-neutral-500 p-2;
  }
  :global(.docs td) {
    @apply border border-neutral-500 p-2;
  }
  :global(.docs a) {
    @apply underline;
  }
</style>
