<script lang="ts">
  import UseMounted from '../core/useMounted/demo.svelte';
  import UseMediaQuery from '../core/useMediaQuery/demo.svelte';
  import UsePreferredDark from '../core/usePreferredDark/demo.svelte';
  import UseEventListener from '../core/useEventListener/demo.svelte';
  import UseStorage from '../core/useStorage/demo.svelte';
  import UseLocalStorage from '../core/useLocalStorage/demo.svelte';
</script>

<h1 class="mb-6 text-2xl font-bold">Svelte Borya</h1>

<div class="flex flex-col gap-4">
  <UseMounted />
  <UseMediaQuery />
  <UsePreferredDark />
  <UseEventListener />
  <UseStorage />
  <UseLocalStorage />
</div>
