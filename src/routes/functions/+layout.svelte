<script lang="ts">
  import Aside from './Aside.svelte';

  let { children } = $props();
</script>

<div class="grid-cols-functions mt-10 grid gap-10">
  <Aside />
  <main class="w-full">
    {@render children()}
  </main>
</div>
