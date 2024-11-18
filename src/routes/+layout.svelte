<script lang="ts">
  import '../app.css';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';

  let { children } = $props();
</script>

<div class="mx-auto grid min-h-svh max-w-screen-lg grid-rows-main">
  <Header />
  <div class="min-w-1 px-6">
    {@render children()}
  </div>
  <Footer />
</div>
