<script lang="ts">
	import { useMounted } from './index.svelte';

	const isMounted = useMounted();
</script>

<span>{isMounted ? 'mounted' : 'unmounted'}</span>
