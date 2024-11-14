<script lang="ts">
  import '../app.css';
  import Header from './Header.svelte';

  let { children } = $props();
</script>

<div class="">
  <Header />
  <main class="mt-10 px-6 dark:bg-stone-950 dark:text-stone-50">
    {@render children()}
  </main>
</div>
