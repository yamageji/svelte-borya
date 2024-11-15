<script lang="ts">
  import { usePreferredReducedMotion } from './index.svelte';

  const prefersReducedMotion = usePreferredReducedMotion();
</script>

<p>prefersReducedMotion: {prefersReducedMotion.value}</p>
