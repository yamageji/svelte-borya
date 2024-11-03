<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

<div class="p-4 dark:bg-stone-950 dark:text-stone-50">
  {@render children()}
</div>
