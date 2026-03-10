<!-- src/lib/components/Toggle.svelte -->
<script lang="ts">
  import { slide } from 'svelte/transition';

  export let title = '';
  export let isOpen = false;
  export let theme: 'green' | 'purple' | 'yellow' | 'orange' = 'green';

  const themeClasses = {
    green:  'bg-green-50 border-green-200',
    purple: 'bg-purple-50 border-purple-200',
    yellow: 'bg-yellow-50 border-yellow-200',
    orange: 'bg-orange-50 border-orange-200'
  };
</script>

<div class={`rounded-lg overflow-hidden border ${themeClasses[theme]}`}>
  <button
    type="button"
    class="w-full flex items-center justify-between p-4 text-left hover:bg-black/5 transition-colors"
    on:click={() => isOpen = !isOpen}
  >
    <span class="font-semibold text-vibe-brown">{title}</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 transform transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {#if isOpen}
    <div transition:slide={{ duration: 250 }}>
      <div class="p-4 pt-0 border-t border-vibe-brown/10">
        <slot />
      </div>
    </div>
  {/if}
</div>
