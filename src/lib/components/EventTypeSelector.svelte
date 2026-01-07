<!-- src/lib/components/EventTypeSelector.svelte -->
<script lang="ts">
  import { eventCategories } from '$lib/data/eventCategories';
  export let selectedCategory: string = '';
</script>

<div class="flex flex-wrap gap-2">
  {#each eventCategories as category}
    <button 
      class:bg-blue-500={selectedCategory === category.id}
      class:bg-gray-200={selectedCategory !== category.id}
      class="px-4 py-2 rounded-lg flex items-center gap-2"
      on:click={() => selectedCategory = category.id}
    >
      <span>{category.icon}</span>
      <span>{category.name}</span>
    </button>
  {/each}
</div>