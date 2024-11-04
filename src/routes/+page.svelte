<script lang="ts">
  import UsePermission from '../core/usePermission/demo.svelte';
  import UseTimeoutFn from '../shared/useTimeoutFn/demo.svelte';
  import UseBrowserLocation from '../core/useBrowserLocation/demo.svelte';
  import UseBreakpoints from '../core/useBreakpoints/demo.svelte';
  import UseEyeDropper from '../core/useEyeDropper/demo.svelte';
  import UseFavicon from '../core/useFavicon/demo.svelte';
  import UseDark from '../core/useDark/demo.svelte';
  import UseColorMode from '../core/useColorMode/demo.svelte';
  import UseMounted from '../core/useMounted/demo.svelte';
  import UseMediaQuery from '../core/useMediaQuery/demo.svelte';
  import UsePreferredColorScheme from '../core/usePreferredColorScheme/demo.svelte';
  import UsePreferredContrast from '../core/usePreferredContrast/demo.svelte';
  import UsePreferredDark from '../core/usePreferredDark/demo.svelte';
  import UsePreferredLanguages from '../core/usePreferredLanguages/demo.svelte';
  import UsePreferredReducedMotion from '../core/usePreferredReducedMotion/demo.svelte';
  import UseEventListener from '../core/useEventListener/demo.svelte';
  import UseStorage from '../core/useStorage/demo.svelte';
  import UseLocalStorage from '../core/useLocalStorage/demo.svelte';
  import UseSessionStorage from '../core/useSessionStorage/demo.svelte';
</script>

<h1 class="mb-6 text-2xl font-bold">Svelte Borya</h1>

<div class="flex flex-col gap-4">
  <UsePermission />
  <UseTimeoutFn />
  <UseBrowserLocation />
  <UseBreakpoints />
  <UseEyeDropper />
  <UseFavicon />
  <UseDark />
  <UseColorMode />
  <UseMediaQuery />
  <UseMounted />
  <UsePreferredColorScheme />
  <UsePreferredContrast />
  <UsePreferredDark />
  <UsePreferredLanguages />
  <UsePreferredReducedMotion />
  <UseEventListener />
  <UseStorage />
  <UseLocalStorage />
  <UseSessionStorage />
</div>
