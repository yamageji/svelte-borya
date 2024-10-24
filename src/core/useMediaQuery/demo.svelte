<script lang="ts">
	import { useMediaQuery } from '../useMediaQuery/index.svelte';

	const isLargeScreen = useMediaQuery('(min-width: 1024px)');
	const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
</script>

<div>
	<h2 class="font-bold">useMediaQuery</h2>
	<ul class="ml-2">
		<li>
			<p>isLargeScreen: {isLargeScreen.value}</p>
		</li>
		<li>
			<p>prefersDark: {prefersDark.value}</p>
		</li>
	</ul>
</div>
