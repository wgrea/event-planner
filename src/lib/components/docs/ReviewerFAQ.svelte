<!-- src/lib/components/docs/ReviewerFAQ.svelte -->
<script>
  const faqs = [
    {
      group: "Product Strategy",
      q: "How is this different from a travel app?",
      a: "Travel apps focus on 'Existence' (Does this bar exist?). We focus on 'Resonance' (Will I feel safe and comfortable in this environment?)."
    },
    {
      group: "Technical Design",
      q: "Why use JSON instead of a live DB?",
      a: "For the prototype phase, JSON ensures high-speed exploration and 'Contextual Certainty'. It allows for hard-coded cultural nuances that AI often misses."
    },
    {
      group: "UX & Accessibility",
      q: "Why the light UI for a nightlife app?",
      a: "To prioritize readability and cultural warmth. We avoid the 'Dark Mode' cliché to frame the app as a Cultural Atlas rather than a club flyer."
    }
  ];
</script>

<section class="space-y-6">
  <header>
    <h2 class="text-xl font-bold text-[#5B3E31]">Reviewer Q&A</h2>
  </header>

  <div class="space-y-4">
    {#each faqs as item}
      <div class="group border-l-2 border-orange-200 pl-4 hover:border-blue-400 transition-colors">
        <p class="text-[10px] font-black text-orange-500 uppercase">{item.group}</p>
        <p class="text-sm font-bold text-[#5B3E31] mt-1">{item.q}</p>
        <p class="text-sm opacity-70 mt-1 leading-relaxed">{item.a}</p>
      </div>
    {/each}
  </div>
</section>