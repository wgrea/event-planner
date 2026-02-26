<!-- src/lib/components/home/DrankEverywhere.svelte -->
<script lang="ts">
  export let drankEverywhere: {
    name: string;
    country: string;
    category: string;
  }[];
</script>

<section class="mb-8 p-4 rounded-xl bg-gray-50 border border-gray-200">

  <h2 class="text-xl font-semibold">Drank Everywhere</h2>
  <p class="text-gray-600 mb-2">
    Globally recognized brands found in most countries
  </p>

  <!-- Future Will Note:
       Users may be more interested in what is NOT consumed everywhere.
       Consider adding a "Unique to Region" or "Local Specialties" section later.
  -->
  <p class="text-gray-500 text-sm mb-4 italic">
    (A quick look at what’s familiar worldwide)
  </p>

<div class="grid gap-2 max-h-64 overflow-y-auto pr-2">
  {#each drankEverywhere as item}
    <div class="drink-card p-2 text-sm">
      {item.name} — {item.country} — {item.category}
    </div>
  {/each}
</div>

</section>
