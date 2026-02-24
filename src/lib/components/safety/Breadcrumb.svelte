<!-- src/routes/safety/Breadcrumb.svelte -->
<script>
  export let current = 'inspect';
</script>

<div class="flex items-center gap-3 text-sm mb-6">
  <div class={current === 'inspect'
    ? 'font-semibold text-softOrange'
    : 'text-gray-500'}>
    Inspect
  </div>
  <span class="text-gray-400">→</span>
  <div class={current === 'analyze'
    ? 'font-semibold text-softOrange'
    : 'text-gray-500'}>
    Analyze
  </div>
  <span class="text-gray-400">→</span>
  <div class={current === 'assess'
    ? 'font-semibold text-softOrange'
    : 'text-gray-500'}>
    Assess
  </div>
</div>
