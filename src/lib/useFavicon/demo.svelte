<script lang="ts">
  import { useFavicon } from './index.svelte';

  const vueRogo = 'vue.png';
  const svelteKitRogo = 'svelte.icon';

  const favicon = useFavicon(vueRogo, {
    baseUrl: '/',
    rel: 'icon'
  });
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">useFavicon</h2>

  <div class="mt-2 flex gap-4">
    <button
      type="button"
      onclick={() => (favicon.value = vueRogo)}
      class="mt-2 rounded bg-stone-700 px-4 py-2 text-stone-50 duration-200 hover:bg-stone-950 dark:bg-stone-200 dark:text-stone-950 dark:hover:bg-white"
    >
      Vue
    </button>
    <button
      type="button"
      onclick={() => (favicon.value = svelteKitRogo)}
      class="mt-2 rounded bg-stone-700 px-4 py-2 text-stone-50 duration-200 hover:bg-stone-950 dark:bg-stone-200 dark:text-stone-950 dark:hover:bg-white"
    >
      Svelte
    </button>
  </div>
</div>
