<!-- src/lib/components/home/DrankEverywhere.svelte -->
<script lang="ts">
  export let drankEverywhere: {
    name: string;
    country: string;
    category: string;
    slug: string;
  }[];
</script>

<section class="mb-8 p-5 rounded-2xl bg-[#FFEDD5]/50 border border-[#FED7AA]">
  <h2 class="text-xl font-bold text-vibe-brown">Drank Everywhere</h2>
  <p class="text-vibe-brown/80 mb-1">Globally recognized brands</p>
  
  <div class="grid gap-2 mt-4">
    {#each drankEverywhere as item}
      <a 
        href="/drinks/{item.slug}" 
        class="flex justify-between items-center bg-white/80 border border-[#FED7AA]/40 p-3 rounded-xl hover:bg-white transition-colors shadow-sm group"
      >
        <div class="text-sm">
          <span class="font-bold text-vibe-brown">{item.name}</span>
          <span class="text-vibe-brown/60 ml-1">— {item.country}</span>
        </div>
        <span class="text-[#FED7AA] group-hover:translate-x-1 transition-transform">→</span>
      </a>
    {/each}
  </div>
</section>