<script lang="ts">
  import Aside from './Aside.svelte';

  let { children } = $props();
</script>

<div class="mt-10 flex w-full gap-10">
  <Aside />
  <main class="flex-grow">
    {@render children()}
  </main>
</div>
