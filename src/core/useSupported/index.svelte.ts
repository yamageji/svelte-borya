import { onMount } from 'svelte';

export function useSupported(callback: () => unknown) {
  let returnFn = $state();

  onMount(() => {
    returnFn = Boolean(callback());
  });

  return {
    get value() {
      return returnFn;
    }
  };
}
