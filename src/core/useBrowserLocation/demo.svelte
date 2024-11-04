<script lang="ts">
  import { useBrowserLocation } from './index.svelte';

  const location = useBrowserLocation();
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">useBrowserLocation</h2>
  <div class="mt-2 flex items-center gap-2">
    <p>Input and hash will be changed:</p>
    <input
      type="text"
      bind:value={location.value.hash}
      placeholder="Hash"
      class="rounded-sm border border-stone-500 px-2.5 py-1 dark:border-stone-200 dark:bg-stone-900"
    />
  </div>

  <div>
    <p>trigger: {location.value.trigger}</p>
    <p>state: {location.value}</p>
    <p>length: {location.value.length}</p>
    <p>origin: {location.value.origin}</p>
    <p>hash: {location.value.hash}</p>
    <p>host: {location.value.host}</p>
    <p>hostname: {location.value.hostname}</p>
    <p>href: {location.value.href}</p>
    <p>pathname: {location.value.pathname}</p>
    <p>port: {location.value.port}</p>
    <p>protocol: {location.value.protocol}</p>
    <p>search: {location.value.search}</p>
  </div>
</div>
