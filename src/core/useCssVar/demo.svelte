<script lang="ts">
  import { useCssVar } from './index.svelte';

  let el = null;
  const cssVar = useCssVar('--color', el);

  function switchColor() {
    if (cssVar.variable === '#df8543') cssVar.variable = '#7fa998';
    else cssVar.variable = '#df8543';
  }

  let elv = null;
  let key = $state('--color');
  const colorVal = useCssVar(key, elv);
  function changeVar() {
    if (key === '--color') key = '--color-one';
    else key = '--color';
  }
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">useCssVar</h2>

  <div class="ml-2 mt-2 flex flex-col gap-2">
    <div>
      <div bind:this={el} style="--color: #7fa998; color: var(--color)">
        Sample text, {cssVar.variable}
      </div>
      <button
        type="button"
        onclick={switchColor}
        class="mt-2 rounded bg-stone-700 px-4 py-2 text-stone-50 duration-200 hover:bg-stone-950 dark:bg-stone-200 dark:text-stone-950 dark:hover:bg-white"
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
        class="mt-2 rounded bg-stone-700 px-4 py-2 text-stone-50 duration-200 hover:bg-stone-950 dark:bg-stone-200 dark:text-stone-950 dark:hover:bg-white"
      >
        Change Color Variable
      </button>
    </div>
  </div>
</div>
