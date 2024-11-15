<script lang="ts">
  import '../app.css';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';

  let { children } = $props();
</script>

<div class="grid-rows-main mx-auto grid min-h-svh max-w-screen-lg">
  <Header />
  <div class="px-6 dark:bg-stone-950 dark:text-stone-50">
    {@render children()}
  </div>
  <Footer />
</div>
