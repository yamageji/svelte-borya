<script lang="ts">
  import { breakpointsTailwind, useBreakpoints } from './index.svelte';

  const breakpoints = useBreakpoints(breakpointsTailwind);

  const smWidth = breakpointsTailwind.sm;

  let reactiveStuff = $state<keyof typeof breakpointsTailwind>('sm');
  let isGreaterThanBreakpoint = $derived(breakpoints.greaterOrEqual(reactiveStuff));

  const current = breakpoints.current();
  const active = breakpoints.active();
  const xs = breakpoints.smaller('sm');
  const xse = breakpoints.smallerOrEqual('sm');
  const sm = breakpoints.between('sm', 'md');
  const md = breakpoints.between('md', 'lg');
  const lg = breakpoints.between('lg', 'xl');
  const xl = breakpoints.between('xl', '2xl');
  const xxl = breakpoints.greater('2xl');
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">useColorMode</h2>

  <div class="ml-2 mt-2">
    <div>Current breakpoints: {current.value}</div>
    <div>Active breakpoint: {active.value}</div>
    <div>xs(&lt;{smWidth}px): {xs.value}</div>
    <div>xs(&lt;={smWidth}px): {xse.value}</div>
    <div>sm: {sm.value}</div>
    <div>md: {md.value}</div>
    <div>lg: {lg.value}</div>
    <div>xl: {xl.value}</div>
    <div>2xl: {xxl.value}</div>
    <div>greaterThanBreakPoint: {isGreaterThanBreakpoint.value}</div>
  </div>
</div>
