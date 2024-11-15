<script lang="ts">
  import type { SvelteComponent } from 'svelte';

  import UseBreakpoints from '$lib/useBreakpoints/index.svx';
  import UseBreakpointsDemo from '$lib/useBreakpoints/demo.svelte';
  import UseBrowserLocation from '$lib/useBrowserLocation/index.svx';
  import UseBrowserLocationDemo from '$lib/useBrowserLocation/demo.svelte';
  import UseClipboard from '$lib/useClipboard/index.svx';
  import UseClipboardDemo from '$lib/useClipboard/demo.svelte';

  const components = [
    { slug: 'useBreakpoints', docs: UseBreakpoints, demo: UseBreakpointsDemo },
    { slug: 'useBrowserLocation', docs: UseBrowserLocation, demo: UseBrowserLocationDemo },
    { slug: 'useClipboard', docs: UseClipboard, demo: UseClipboardDemo }
  ];

  let { data } = $props();
  let Docs = $state<typeof SvelteComponent>();
  let Demo = $state<typeof SvelteComponent>();

  $effect(() => {
    Docs = components.find((component) => component.slug === data.slug)
      ?.docs as unknown as typeof SvelteComponent;
    Demo = components.find((component) => component.slug === data.slug)
      ?.demo as unknown as typeof SvelteComponent;
  });
</script>

<div class="flex flex-col gap-8">
  {#if Docs}
    <section class="demo">
      <Docs class="demo" />
    </section>
  {/if}

  {#if Demo}
    <section>
      <h2 class="text-lg font-bold">Demo</h2>
      <div class="mt-4 rounded-md bg-stone-100 p-8">
        <Demo />
      </div>
    </section>
  {/if}
</div>

<style>
  .demo :global(h1) {
    @apply mb-4 text-3xl font-bold;
  }
  .demo :global(h2) {
    @apply mb-2 mt-6 text-lg font-bold;
  }
</style>
