<script lang="ts">
  import Aside from './Aside.svelte';

  let { children } = $props();
</script>

<div class="flex h-full w-full gap-10">
  <Aside />
  <main class="flex-grow pt-10">
    {@render children()}
  </main>
</div>
