<script lang="ts">
  import { breakpointsTailwind, useBreakpoints } from './index.svelte';

  const breakpoints = useBreakpoints(breakpointsTailwind);

  const current = breakpoints.current();
  const active = breakpoints.active();
  const smallerSm = breakpoints.smaller('sm');
  const smallerOrEqualSm = breakpoints.smallerOrEqual('sm');
  const betweenSmMd = breakpoints.between('sm', 'md');
  const greaterMd = breakpoints.greater('md');
</script>

<div class="flex flex-col gap-2">
  <div>Current breakpoints: [{current.value}]</div>
  <div>Active breakpoint: {active.value}</div>
  <div>smaller('sm'): {smallerSm.value}</div>
  <div>smallerOrEqual('sm'): {smallerOrEqualSm.value}</div>
  <div>between('sm', 'md'): {betweenSmMd.value}</div>
  <div>greater('md'): {greaterMd.value}</div>
</div>
