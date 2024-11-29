<script lang="ts">
  import Guide from './Guide.svx';
</script>

<main class="mt-6 h-full">
  <div
    class="flex flex-col items-center gap-4 py-2 md:flex-row-reverse md:justify-center md:gap-10 md:py-8"
  >
    <div class="md:flex-shrink">
      <img src="/logo_beta.svg" alt="" class="size-40 md:size-full md:max-h-80 md:max-w-80" />
    </div>
    <div class="flex flex-col justify-center gap-3 md:gap-5">
      <h1 class="text-center text-5xl font-bold md:text-7xl">SvelteBorya</h1>
      <p class="text-center text-xl md:text-2xl">Collection of Svelte Runes Utilities</p>
    </div>
  </div>

  <Guide />
</main>
