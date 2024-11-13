<script lang="ts">
  // State
  import UseLocalStorage from '$lib/useLocalStorage/demo.svelte';
  import UseSessionStorage from '$lib/useSessionStorage/demo.svelte';
  import UseStorage from '$lib/useStorage/demo.svelte';
  // Browser
  import UseBreakpoints from '$lib/useBreakpoints/demo.svelte';
  import UseBrowserLocation from '$lib/useBrowserLocation/demo.svelte';
  import UseClipboard from '$lib/useClipboard/demo.svelte';
  import UseClipboardItems from '$lib/useClipboardItems/demo.svelte';
  import UseColorMode from '$lib/useColorMode/demo.svelte';
  import UseCssVar from '$lib/useCssVar/demo.svelte';
  import UseDark from '$lib/useDark/demo.svelte';
  import UseEventListener from '$lib/useEventListener/demo.svelte';
  import UseEyeDropper from '$lib/useEyeDropper/demo.svelte';
  import UseFavicon from '$lib/useFavicon/demo.svelte';
  import UseMediaQuery from '$lib/useMediaQuery/demo.svelte';
  import UsePermission from '$lib/usePermission/demo.svelte';
  import UsePreferredColorScheme from '$lib/usePreferredColorScheme/demo.svelte';
  import UsePreferredContrast from '$lib/usePreferredContrast/demo.svelte';
  import UsePreferredDark from '$lib/usePreferredDark/demo.svelte';
  import UsePreferredLanguages from '$lib/usePreferredLanguages/demo.svelte';
  import UsePreferredReducedMotion from '$lib/usePreferredReducedMotion/demo.svelte';
  // Animation
  import UseTimeoutFn from '$lib/shared/useTimeoutFn/demo.svelte';
  // Component
  import UseMounted from '$lib/useMounted/demo.svelte';
  // Utilities
</script>

<h1 class="mb-6 text-4xl font-bold">Svelte Borya</h1>

<section>
  <h2 class="text-3xl font-bold">State</h2>
  <div class="mt-4 grid gap-4 lg:grid-cols-2">
    <UseLocalStorage />
    <UseSessionStorage />
    <UseStorage />
  </div>
</section>

<section class="mt-10">
  <h2 class="text-3xl font-bold">Browser</h2>
  <div class="mt-4 grid gap-4 lg:grid-cols-2">
    <UseBreakpoints />
    <UseBrowserLocation />
    <UseClipboard />
    <UseClipboardItems />
    <UseColorMode />
    <UseCssVar />
    <UseDark />
    <UseEventListener />
    <UseEyeDropper />
    <UseFavicon />
    <UseMediaQuery />
    <UsePermission />
    <UsePreferredColorScheme />
    <UsePreferredContrast />
    <UsePreferredDark />
    <UsePreferredLanguages />
    <UsePreferredReducedMotion />
  </div>
</section>

<section class="mt-10">
  <h2 class="text-3xl font-bold">Animation</h2>
  <div class="mt-4 grid gap-4 lg:grid-cols-2">
    <UseTimeoutFn />
  </div>
</section>

<section class="mt-10">
  <h2 class="text-3xl font-bold">Component</h2>
  <div class="mt-4 grid gap-4 lg:grid-cols-2">
    <UseMounted />
  </div>
</section>

<section class="mt-10">
  <h2 class="text-3xl font-bold">Utilities</h2>
  <div class="mt-4 grid gap-4 lg:grid-cols-2"><div class="grid gap-4 lg:grid-cols-2"></div></div>
</section>
