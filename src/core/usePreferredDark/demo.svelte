<script lang="ts">
	import { usePreferredDark } from './index.svelte';

	const prefersDark = usePreferredDark();
</script>

<div class="p-4 border-2 border-stone-300 rounded-md">
	<h2 class="font-bold text-lg">usePreferredDark</h2>

	<div class="ml-2 mt-2">
		<p>prefersDark: {prefersDark.value}</p>
	</div>
</div>
