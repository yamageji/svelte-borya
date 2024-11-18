<script lang="ts">
  import type { SvelteComponent } from 'svelte';

  import UseLocalStorage from '$lib/useLocalStorage/index.svx';
  import UseLocalStorageDemo from '$lib/useLocalStorage/demo.svelte';
  import UseSessionStorage from '$lib/useSessionStorage/index.svx';
  import UseSessionStorageDemo from '$lib/useSessionStorage/demo.svelte';
  import UseStorage from '$lib/useStorage/index.svx';
  import UseStorageDemo from '$lib/useStorage/demo.svelte';

  import UseBreakpoints from '$lib/useBreakpoints/index.svx';
  import UseBreakpointsDemo from '$lib/useBreakpoints/demo.svelte';
  import UseBrowserLocation from '$lib/useBrowserLocation/index.svx';
  import UseBrowserLocationDemo from '$lib/useBrowserLocation/demo.svelte';
  import UseClipboard from '$lib/useClipboard/index.svx';
  import UseClipboardDemo from '$lib/useClipboard/demo.svelte';
  import UseClipboardItems from '$lib/useClipboardItems/index.svx';
  import UseClipboardItemsDemo from '$lib/useClipboardItems/demo.svelte';
  import UseColorMode from '$lib/useColorMode/index.svx';
  import UseColorModeDemo from '$lib/useColorMode/demo.svelte';
  import UseCssVar from '$lib/useCssVar/index.svx';
  import UseCssVarDemo from '$lib/useCssVar/demo.svelte';
  import UseDark from '$lib/useDark/index.svx';
  import UseDarkDemo from '$lib/useDark/demo.svelte';
  import UseEventListener from '$lib/useEventListener/index.svx';
  import UseEventListenerDemo from '$lib/useEventListener/demo.svelte';
  import UseEyeDropper from '$lib/useEyeDropper/index.svx';
  import UseEyeDropperDemo from '$lib/useEyeDropper/demo.svelte';
  import UseFavicon from '$lib/useFavicon/index.svx';
  import UseFaviconDemo from '$lib/useFavicon/demo.svelte';
  import UseMediaQuery from '$lib/useMediaQuery/index.svx';
  import UseMediaQueryDemo from '$lib/useMediaQuery/demo.svelte';
  import UsePermission from '$lib/usePermission/index.svx';
  import UsePermissionDemo from '$lib/usePermission/demo.svelte';
  import UsePreferredColorScheme from '$lib/usePreferredColorScheme/index.svx';
  import UsePreferredColorSchemeDemo from '$lib/usePreferredColorScheme/demo.svelte';
  import UsePreferredContrast from '$lib/usePreferredContrast/index.svx';
  import UsePreferredContrastDemo from '$lib/usePreferredContrast/demo.svelte';
  import UsePreferredDark from '$lib/usePreferredDark/index.svx';
  import UsePreferredDarkDemo from '$lib/usePreferredDark/demo.svelte';
  import UsePreferredLanguages from '$lib/usePreferredLanguages/index.svx';
  import UsePreferredLanguagesDemo from '$lib/usePreferredLanguages/demo.svelte';
  import UsePreferredReducedMotion from '$lib/usePreferredReducedMotion/index.svx';
  import UsePreferredReducedMotionDemo from '$lib/usePreferredReducedMotion/demo.svelte';

  const components = [
    { slug: 'useLocalStorage', docs: UseLocalStorage, demo: UseLocalStorageDemo },
    { slug: 'useSessionStorage', docs: UseSessionStorage, demo: UseSessionStorageDemo },
    { slug: 'useStorage', docs: UseStorage, demo: UseStorageDemo },
    { slug: 'useBreakpoints', docs: UseBreakpoints, demo: UseBreakpointsDemo },
    { slug: 'useBrowserLocation', docs: UseBrowserLocation, demo: UseBrowserLocationDemo },
    { slug: 'useClipboard', docs: UseClipboard, demo: UseClipboardDemo },
    { slug: 'useClipboardItems', docs: UseClipboardItems, demo: UseClipboardItemsDemo },
    { slug: 'useColorMode', docs: UseColorMode, demo: UseColorModeDemo },
    { slug: 'useCssVar', docs: UseCssVar, demo: UseCssVarDemo },
    { slug: 'useDark', docs: UseDark, demo: UseDarkDemo },
    { slug: 'useEventListener', docs: UseEventListener, demo: UseEventListenerDemo },
    { slug: 'useEyeDropper', docs: UseEyeDropper, demo: UseEyeDropperDemo },
    { slug: 'useFavicon', docs: UseFavicon, demo: UseFaviconDemo },
    { slug: 'useMediaQuery', docs: UseMediaQuery, demo: UseMediaQueryDemo },
    { slug: 'usePermission', docs: UsePermission, demo: UsePermissionDemo },
    {
      slug: 'usePreferredColorScheme',
      docs: UsePreferredColorScheme,
      demo: UsePreferredColorSchemeDemo
    },
    { slug: 'usePreferredContrast', docs: UsePreferredContrast, demo: UsePreferredContrastDemo },
    { slug: 'usePreferredDark', docs: UsePreferredDark, demo: UsePreferredDarkDemo },
    { slug: 'usePreferredLanguages', docs: UsePreferredLanguages, demo: UsePreferredLanguagesDemo },
    {
      slug: 'usePreferredReducedMotion',
      docs: UsePreferredReducedMotion,
      demo: UsePreferredReducedMotionDemo
    }
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
    <section class="docs">
      <Docs />
    </section>
  {/if}

  {#if Demo}
    <section class="demo">
      <h2 class="text-lg font-bold">Demo</h2>
      <div class="mt-4 rounded-md bg-neutral-100 p-8 dark:bg-neutral-800">
        <Demo />
      </div>
    </section>
  {/if}
</div>

<style>
  :global(.docs h1) {
    @apply mb-4 text-3xl font-bold;
  }
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
</style>
