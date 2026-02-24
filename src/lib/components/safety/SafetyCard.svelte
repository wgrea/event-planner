<!-- src/lib/components/safety/SafetyCard.svelte -->
<script lang="ts">
  export let title: string;
</script>


<div class="bg-[#CDE7F6]/20 border border-[#CDE7F6] rounded-lg p-4 space-y-2">
  <h3 class="font-semibold text-gray-800">{title}</h3>
  <slot />
</div>
