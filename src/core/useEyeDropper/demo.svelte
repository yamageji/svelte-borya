<script lang="ts">
  import { useEyeDropper } from '../../core/useEyeDropper/index.svelte';

  const { isSupported, open, sRGBHex } = useEyeDropper({ initialValue: '#ffffff' });
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">useEyeDropper</h2>

  <div class="ml-2 mt-2 flex gap-8">
    <div>
      {#if isSupported.value}
        <div>
          <p>isSupported: {isSupported.value}</p>
          <p class="flex items-center gap-1">
            <span>sRGBHex:</span>
            <span
              class="h-3.5 w-3.5 rounded-full border border-stone-300"
              style:background-color={sRGBHex.value}
            ></span>
            <span>{sRGBHex.value}</span>
          </p>
          <button
            type="button"
            disabled={!isSupported.value}
            onclick={() => open()}
            class="mt-2 rounded bg-stone-700 px-4 py-2 text-stone-50 duration-200 hover:bg-stone-950 dark:bg-stone-200 dark:text-stone-950"
          >
            Open Eye Dropper
          </button>
        </div>
      {:else}
        <div>
          <span>Not Supported by Your Browser</span>
        </div>
      {/if}
    </div>
    <div class="flex gap-2">
      <div class="h-10 w-10 rounded-md bg-red-500"></div>
      <div class="h-10 w-10 rounded-md bg-teal-500"></div>
      <div class="h-10 w-10 rounded-md bg-indigo-500"></div>
      <div class="h-10 w-10 rounded-md bg-yellow-500"></div>
    </div>
  </div>
</div>
