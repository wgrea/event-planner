<!-- src/lib/components/home/DrankEverywhere.svelte -->
<script lang="ts">
  export let drankEverywhere: {
    name: string;
    country: string;
    category: string;
  }[];
</script>

<section class="mb-8">
  <h2 class="text-xl font-semibold">Drank Everywhere</h2>
  <p class="text-gray-600 mb-4">Globally recognized brands found in most countries</p>

  <div class="grid gap-4">
    {#each drankEverywhere as item}
      <div class="drink-card">
        <h3>{item.name}</h3>
        <p>{item.country}</p>
        <p class="text-gray-500 text-sm">{item.category}</p>
      </div>
    {/each}
  </div>

  <a href="/drinks" class="view-all">View All Global Drinks</a>
</section>
