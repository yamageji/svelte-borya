<script lang="ts">
  import UseEyeDropper from '../core/useEyeDropper/demo.svelte';
  import UseFavicon from '../core/useFavicon/demo.svelte';
  import UseDark from '../core/useDark/demo.svelte';
  import UseColorMode from '../core/useColorMode/demo.svelte';
  import UseMounted from '../core/useMounted/demo.svelte';
  import UseMediaQuery from '../core/useMediaQuery/demo.svelte';
  import UsePreferredDark from '../core/usePreferredDark/demo.svelte';
  import UseEventListener from '../core/useEventListener/demo.svelte';
  import UseStorage from '../core/useStorage/demo.svelte';
  import UseLocalStorage from '../core/useLocalStorage/demo.svelte';
  import UseSessionStorage from '../core/useSessionStorage/demo.svelte';
</script>

<h1 class="mb-6 text-2xl font-bold">Svelte Borya</h1>

<div class="flex flex-col gap-4">
  <UseEyeDropper />
  <UseFavicon />
  <UseDark />
  <UseColorMode />
  <UseMediaQuery />
  <UseMounted />
  <UsePreferredDark />
  <UseEventListener />
  <UseStorage />
  <UseLocalStorage />
  <UseSessionStorage />
</div>
