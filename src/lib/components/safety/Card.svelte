<!-- src/lib/components/safety/Card.svelte -->
<script lang="ts">
  export let title: string;
  export let variant: 'default' | 'warning' | 'info' | 'success' = 'default';
  
  $: variantClasses = {
    'default': { header: 'bg-gray-50/50 border-gray-100', icon: '📋' },
    'warning': { header: 'bg-yellow-50 border-yellow-100', icon: '⚠️' },
    'info':    { header: 'bg-blue-50 border-blue-100', icon: 'ℹ️' },
    'success': { header: 'bg-green-50 border-green-100', icon: '✅' }
  }[variant];
</script>

<div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
  <div class="px-4 py-3 border-b {variantClasses.header}">
    <h3 class="font-bold text-vibe-brown flex items-center gap-2">
      <span class="text-lg" aria-hidden="true">{variantClasses.icon}</span>
      {title}
    </h3>
  </div>
  <div class="p-4">
    <slot />
  </div>
</div>