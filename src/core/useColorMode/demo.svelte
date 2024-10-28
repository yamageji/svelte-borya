<script lang="ts">
  import { useColorMode } from '../useColorMode/index.svelte';

  const mode = useColorMode();
</script>

<!-- <button @click="next()">
  <span class="ml-2 capitalize">{{ state }}</span>
</button> -->

<p class="">{mode.value.state}</p>
