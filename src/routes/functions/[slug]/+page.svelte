<script lang="ts">
  // import Demo from '$lib/useBreakpoints/index.svx';
  let { data } = $props();

  console.log(data.slug);
</script>

<!-- <Demo /> -->
<div>{data.slug}</div>
