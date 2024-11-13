<script lang="ts">
  import Header from '$components/site/Header.svelte';
  import '../app.css';
  let { children } = $props();
</script>

<div class="">
  <Header />
  <main class="mt-10 px-6 dark:bg-stone-950 dark:text-stone-50">
    {@render children()}
  </main>
</div>
