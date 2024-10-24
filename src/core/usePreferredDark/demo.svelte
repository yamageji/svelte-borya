<script lang="ts">
	import { usePreferredDark } from './index.svelte';

	const prefersDark = usePreferredDark();
</script>

<div>
	<h2 class="font-bold">usePreferredDark</h2>

	<div class="ml-2">
		<p>prefersDark: {prefersDark.value}</p>
	</div>
</div>
