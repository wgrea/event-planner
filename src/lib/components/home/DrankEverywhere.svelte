<!-- src/lib/components/home/DrankEverywhere.svelte -->
<script lang="ts">
  export let drankEverywhere: {
    name: string;
    country: string;
    category: string;
  }[];
</script>

<section
  class="
    mb-8 p-4 rounded-xl
    bg-[#FFF7ED]/70
    border border-[#F59E0B]/30
  "
>
  <h2 class="text-xl font-semibold text-[#7A4A00]">Drank Everywhere</h2>

  <p class="text-gray-700 mb-2">
    Globally recognized brands found in most countries
  </p>

  <p class="text-gray-600 text-sm mb-4 italic">
    (A quick look at what’s familiar worldwide)
  </p>

  <div class="grid gap-2 max-h-64 overflow-y-auto pr-2">
    {#each drankEverywhere as item}
      <div class="drank-everywhere-card p-2 text-sm">
        {item.name} — {item.country} — {item.category}
      </div>
    {/each}
  </div>
</section>
