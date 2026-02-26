<!-- src/lib/components/drinks/DrinkGrid.svelte -->
<script lang="ts">
  import type { Drink } from '$lib/types';
  import DrinkCard from './DrinkCard.svelte';

  export let drinks: Drink[];
</script>

<div class="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  {#each drinks as drink (drink.id)}
    <DrinkCard {drink} />
  {/each}
</div>

{#if drinks.length === 0}
  <div class="text-center py-12 text-gray-500">
    No drinks found.
  </div>
{/if}