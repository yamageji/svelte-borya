<script lang="ts">
	import { useMounted } from './index.svelte';

	const isMounted = useMounted();
</script>

<div class="p-4 border-2 border-stone-300 rounded-md">
	<h2 class="font-bold text-lg">useMounted</h2>

	<div class="ml-2 mt-2">
		<p>isMounted: {isMounted ? 'mounted' : 'unmounted'}</p>
	</div>
</div>
