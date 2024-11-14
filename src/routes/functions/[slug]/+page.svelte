<script lang="ts">
  import type { SvelteComponent } from 'svelte';

  import UseBreakpoints from '$lib/useBreakpoints/index.svx';
  import UseBreakpointsDemo from '$lib/useBreakpoints/demo.svelte';
  import UseBrowserLocation from '$lib/useBrowserLocation/index.svx';
  import UseBrowserLocationDemo from '$lib/useBrowserLocation/demo.svelte';
  import UseClipboard from '$lib/useClipboard/index.svx';
  import UseClipboardDemo from '$lib/useClipboard/demo.svelte';

  let { data } = $props();

  let Docs = $state<typeof SvelteComponent>();
  let Demo = $state<typeof SvelteComponent>();

  const docsComponents = {
    useBreakpoints: UseBreakpoints,
    useBrowserLocation: UseBrowserLocation,
    useClipboard: UseClipboard
  };
  const demoComponents = {
    useBreakpoints: UseBreakpointsDemo,
    useBrowserLocation: UseBrowserLocationDemo,
    useClipboard: UseClipboardDemo
  };

  Docs = docsComponents[data.slug as keyof typeof docsComponents] as typeof SvelteComponent;
  Demo = demoComponents[data.slug as keyof typeof demoComponents] as typeof SvelteComponent;
</script>

<div class="flex flex-col gap-8">
  {#if Docs}
    <section>
      <Docs />
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
</style>
