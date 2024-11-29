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

<div class="">
  <div class="mb-2">
    <h1 class="mb-4 text-3xl font-bold">
      {data.docs?.title}
    </h1>
    <p>{data.docs.description}</p>
  </div>

  <section class="mt-10 md:mt-14">
    <h2 class="text-xl font-bold">Demo</h2>
    <div class="mt-4 rounded-md bg-neutral-100 p-8 dark:bg-neutral-800">
      {#if Demo}
        <Demo />
      {/if}
    </div>
  </section>

  <section class="docs">
    {#if Docs}
      <Docs />
    {/if}
  </section>
</div>

<style>
  :global(.docs h2) {
    @apply mb-3 mt-10 text-xl font-bold md:mt-14;
  }
  :global(.docs pre) {
    @apply overflow-x-auto rounded-md !bg-neutral-100 p-6 text-sm leading-6 md:text-base md:leading-7;
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
    @apply border border-neutral-500 p-2 text-sm md:text-base;
  }
  :global(.docs td) {
    @apply break-words break-all border border-neutral-500 p-2 text-sm md:text-base;
  }
  :global(.docs a) {
    @apply underline;
  }
  :global(.docs p) {
    @apply mt-4;
  }
</style>
