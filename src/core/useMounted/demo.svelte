<script lang="ts">
	import { useMounted } from './index.svelte';

	const isMounted = useMounted();
</script>

<div>
	<h2 class="font-bold">useMounted</h2>
	<p class="ml-2">isMounted: {isMounted ? 'mounted' : 'unmounted'}</p>
</div>
