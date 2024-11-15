<script lang="ts">
  import { usePreferredLanguages } from './index.svelte';

  const prefersLanguages = usePreferredLanguages();
</script>

<p>prefersLanguages: {prefersLanguages.value}</p>
