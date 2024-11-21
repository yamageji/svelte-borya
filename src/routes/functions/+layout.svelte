<script lang="ts">
  import Aside from './Aside.svelte';

  let { children } = $props();
</script>

<div class="pt-4">
  <div
    class="fixed inset-0 left-[max(24px,calc(50%-488px))] right-auto top-[calc(64px+14px)] z-20 hidden w-60 overflow-y-auto lg:block"
  >
    <Aside />
  </div>
  <main class="lg:pl-72">
    {@render children()}
  </main>
</div>
