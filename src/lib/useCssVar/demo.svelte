<script lang="ts">
  import { onMount } from 'svelte';
  import { useCssVar } from './index.svelte';
  import type { UseCssVarReturn } from './index.svelte';

  let el: HTMLDivElement;
  let elv: HTMLDivElement;
  let cssVar = $state<UseCssVarReturn>({ variable: null });
  let colorVal = $state<UseCssVarReturn>({ variable: null });
  let key = $state('--color');

  onMount(() => {
    $effect(() => {
      cssVar = useCssVar('--color', el);
      colorVal = useCssVar(key, elv);
    });
  });

  function switchColor() {
    if (cssVar.variable === '#df8543') cssVar.variable = '#7fa998';
    else cssVar.variable = '#df8543';
  }

  function changeVar() {
    if (key === '--color') key = '--color-one';
    else key = '--color';
  }
</script>

<div>
  <div bind:this={el} style="--color: #7fa998; color: var(--color)">
    Sample text, {cssVar.variable}
  </div>
  <button
    type="button"
    onclick={switchColor}
    class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
  >
    Change Color
  </button>
</div>

<div>
  <div
    bind:this={elv}
    style="--color: #7fa998; --color-one: #df8543;"
    style:color={colorVal.variable}
  >
    Sample text, {key}: {colorVal.variable}
  </div>
  <button
    type="button"
    onclick={changeVar}
    class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
  >
    Change Color Variable
  </button>
</div>
