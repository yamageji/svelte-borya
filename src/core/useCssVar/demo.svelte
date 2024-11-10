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
  <h2 class="text-lg font-bold">useColorMode</h2>

  <div class="ml-2 mt-2">
    <div bind:this={el} style="--color: #7fa998; color: var(--color)">
      Sample text, {cssVar.variable}
    </div>
    <button onclick={switchColor}> Change Color </button>
    <div
      bind:this={elv}
      style="--color: #7fa998; --color-one: #df8543;"
      style:color={colorVal.variable}
    >
      Sample text, {key}: {colorVal.variable}
    </div>
    <button style="margin-left: 0;" onclick={changeVar}> Change Color Variable </button>
  </div>
</div>
