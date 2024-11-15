<script lang="ts">
  import { useBrowserLocation } from './index.svelte';

  const location = useBrowserLocation();
</script>

<div class="flex items-center gap-2">
  <p>Input and hash will be changed:</p>
  <input
    type="text"
    bind:value={location.hash}
    placeholder="Hash"
    class="rounded-sm border border-stone-500 px-2.5 py-1 dark:border-stone-200 dark:bg-stone-900"
  />
</div>
<div>
  <p>trigger: {location.trigger}</p>
  <p>state: {location.state}</p>
  <p>length: {location.length}</p>
  <p>origin: {location.origin}</p>
  <p>hash: {location.hash}</p>
  <p>host: {location.host}</p>
  <p>hostname: {location.hostname}</p>
  <p>href: {location.href}</p>
  <p>pathname: {location.pathname}</p>
  <p>port: {location.port}</p>
  <p>protocol: {location.protocol}</p>
  <p>search: {location.search}</p>
</div>
