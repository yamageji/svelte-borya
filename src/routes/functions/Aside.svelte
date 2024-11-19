<script lang="ts">
  import list from '../navigationList.json';
</script>

<aside class="h-full overflow-y-auto pb-8 pt-6">
  <h2 class="text-xl font-bold">Functions</h2>
  <ul>
    {#each list as { title, items }}
      <li>
        <h3 class="mt-6 font-bold">{title}</h3>
        <ul class="mt-2 space-y-2">
          {#each items as item}
            <li class="ml-2">
              <a
                href={`/functions/${item}`}
                class="relative truncate text-neutral-700 duration-150 before:absolute before:-left-2 before:mr-1.5 before:h-6 before:w-px before:duration-200 before:content-[''] hover:text-neutral-950 hover:before:bg-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 dark:hover:before:bg-neutral-300"
                >{item}</a
              >
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</aside>
