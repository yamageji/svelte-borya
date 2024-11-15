<script lang="ts">
  import { usePreferredDark } from './index.svelte';

  const prefersDark = usePreferredDark();
</script>

<p>prefersDark: {prefersDark.value}</p>
