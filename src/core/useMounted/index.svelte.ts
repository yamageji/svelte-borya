import { onMount } from 'svelte';

export function useMounted() {
  let isMounted = $state(false);

  onMount(() => {
    isMounted = true;
  });

  return {
    get value() {
      return isMounted;
    }
  };
}
