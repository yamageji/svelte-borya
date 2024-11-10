<script lang="ts">
  // State
  import UseLocalStorage from '../core/useLocalStorage/demo.svelte';
  import UseSessionStorage from '../core/useSessionStorage/demo.svelte';
  import UseStorage from '../core/useStorage/demo.svelte';
  // Browser
  import UseBreakpoints from '../core/useBreakpoints/demo.svelte';
  import UseBrowserLocation from '../core/useBrowserLocation/demo.svelte';
  import UseClipboard from '../core/useClipboard/demo.svelte';
  import UseClipboardItems from '../core/useClipboardItems/demo.svelte';
  import UseColorMode from '../core/useColorMode/demo.svelte';
  import UseDark from '../core/useDark/demo.svelte';
  import UseEventListener from '../core/useEventListener/demo.svelte';
  import UseEyeDropper from '../core/useEyeDropper/demo.svelte';
  import UseFavicon from '../core/useFavicon/demo.svelte';
  import UseMediaQuery from '../core/useMediaQuery/demo.svelte';
  import UsePermission from '../core/usePermission/demo.svelte';
  import UsePreferredColorScheme from '../core/usePreferredColorScheme/demo.svelte';
  import UsePreferredContrast from '../core/usePreferredContrast/demo.svelte';
  import UsePreferredDark from '../core/usePreferredDark/demo.svelte';
  import UsePreferredLanguages from '../core/usePreferredLanguages/demo.svelte';
  import UsePreferredReducedMotion from '../core/usePreferredReducedMotion/demo.svelte';
  // Animation
  import UseTimeoutFn from '../shared/useTimeoutFn/demo.svelte';
  // Component
  import UseMounted from '../core/useMounted/demo.svelte';
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
