<script lang="ts">
  import { useEyeDropper } from '$lib/useEyeDropper/index.svelte';

  const { isSupported, open, sRGBHex } = useEyeDropper({ initialValue: '#ffffff' });
</script>

<div class="flex gap-8">
  <div>
    {#if isSupported.value}
      <div>
        <p>isSupported: {isSupported.value}</p>
        <p class="flex items-center gap-1">
          <span>sRGBHex:</span>
          <span
            class="h-3.5 w-3.5 rounded-full border border-neutral-300"
            style:background-color={sRGBHex.value}
          ></span>
          <span>{sRGBHex.value}</span>
        </p>
        <button
          type="button"
          disabled={!isSupported.value}
          onclick={() => open()}
          class="mt-2 rounded bg-neutral-700 px-4 py-2 text-neutral-50 duration-200 hover:bg-neutral-950 dark:bg-neutral-200 dark:text-neutral-950 dark:hover:bg-white"
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
