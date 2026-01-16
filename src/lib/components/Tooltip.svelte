<script lang="ts">
  export let text: string;
  export let position: 'top' | 'bottom' = 'top';
</script>

<div class="relative inline-block group">
  <slot />
  <div class="absolute invisible group-hover:visible bg-gray-900 text-white text-xs p-2 rounded w-48 z-50
    {position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'}">
    {text}
  </div>
</div>