<script lang="ts">
  import NavigationUtilItems from './NavigationUtilItems.svelte';
  import list from './navigationList.json';

  let props = $props();
</script>

<ul class="flex flex-col gap-y-4">
  <li>
    <a
      href="/"
      onclick={props.closeMenu}
      class="text-xl font-bold text-neutral-700 duration-150 dark:text-neutral-300 dark:hover:text-neutral-100 dark:hover:before:bg-neutral-300"
      >Guide</a
    >
  </li>
  <li>
    <a
      href="/functions"
      onclick={props.closeMenu}
      class="text-xl font-bold text-neutral-700 duration-150 dark:text-neutral-300 dark:hover:text-neutral-100 dark:hover:before:bg-neutral-300"
      >Functions</a
    >
    <ul>
      {#each list as { title, items }}
        <li>
          <h3 class="mt-1.5 font-bold text-neutral-700 dark:text-neutral-300">{title}</h3>
          <ul class="mt-1.5 space-y-1.5">
            {#each items as item}
              <li class="ml-2">
                <a
                  href={`/functions/${item}`}
                  onclick={props.closeMenu}
                  class="relative truncate text-neutral-700 duration-150 before:absolute before:-left-2 before:mr-1.5 before:h-6 before:w-px before:duration-200 before:content-[''] hover:text-neutral-950 hover:before:bg-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 dark:hover:before:bg-neutral-300"
                  >{item}</a
                >
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </li>
</ul>
