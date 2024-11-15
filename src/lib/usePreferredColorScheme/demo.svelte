<script lang="ts">
  import { usePreferredColorScheme } from './index.svelte';

  const prefersColorScheme = usePreferredColorScheme();
</script>

<p>prefersColorScheme: {prefersColorScheme.value}</p>
