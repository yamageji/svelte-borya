<script lang="ts">
  import { usePreferredContrast } from './index.svelte';

  const prefersContrast = usePreferredContrast();
</script>

<p>prefersContrast: {prefersContrast.value}</p>
