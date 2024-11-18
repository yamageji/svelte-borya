<script lang="ts">
  import { useFavicon } from './index.svelte';

  const vueRogo = 'vue.png';
  const svelteKitRogo = 'svelte.icon';

  const favicon = useFavicon(vueRogo, {
    baseUrl: '/',
    rel: 'icon'
  });
</script>

<div class="flex gap-4">
  <button
    type="button"
    onclick={() => (favicon.value = vueRogo)}
    class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
  >
    Vue
  </button>
  <button
    type="button"
    onclick={() => (favicon.value = svelteKitRogo)}
    class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
  >
    Svelte
  </button>
</div>
