<script lang="ts">
  import { useMediaQuery } from './index.svelte';

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
</script>

<p>isLargeScreen: {isLargeScreen.value}</p>
<p>prefersDark: {prefersDark.value}</p>
