<!-- src/routes/service-design/blueprint/+page.svelte -->
<script>
  import { goto } from '$app/navigation';
  
  // Define FAQs directly in the script
  const faqs = [
    {
      group: "Product & Purpose",
      q: "What problem does this prototype solve?",
      a: "It helps users understand cultural drinking environments, safety context, and vibe expectations — something traditional travel apps don’t address."
    },
    {
      group: "Product & Purpose",
      q: "Who is this designed for?",
      a: "Travelers, expats, solo explorers, and anyone who wants cultural context and safety clarity before choosing a nightlife environment."
    },
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
      group: "AI & ML",
      q: "Is this an AI recommender system?",
      a: "No — the value comes from human-curated cultural nuance and safety communication. AI could support future features, but it is not the focus of this prototype."
    },
    {
      group: "UX & Accessibility",
      q: "Why the light UI for a nightlife app?",
      a: "To prioritize readability and cultural warmth. We avoid the 'Dark Mode' cliché to frame the app as a Cultural Atlas rather than a club flyer."
    }
  ];
</script>

<section class="space-y-8">
  <header>
    <h2 class="text-xl font-bold text-[#5B3E31]">High-Order UX Application</h2>
    <p class="text-sm opacity-70">Moving beyond "AI-generated UI" to intentional interaction design.</p>
  </header>

  <div class="grid grid-cols-2 md:grid-cols-3 gap-2 p-4 bg-gray-50/50 rounded-xl text-xs">
    <span class="font-medium">understanding people</span>
    <span class="font-medium">designing flows</span>
    <span class="font-medium">shaping meaning</span>
    <span class="font-medium">structuring information</span>
    <span class="font-medium">reducing friction</span>
    <span class="font-medium">building trust</span>
    <span class="font-medium">creating clarity</span>
    <span class="font-medium">mapping journeys</span>
    <span class="font-medium">designing systems</span>
  </div>

  <div class="space-y-6">
    <div class="p-5 rounded-2xl border border-orange-100 bg-orange-50/30">
      <h3 class="text-sm font-bold text-[#2563EB] mb-2 uppercase tracking-wide">Trust & Agency</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <p class="font-bold">Cognitive Alignment</p>
          <p class="opacity-70 text-xs">The UI matches the user’s mental model of 'Atmosphere' rather than just 'Location'.</p>
        </div>
        <div>
          <p class="font-bold">Trust Calibration</p>
          <p class="opacity-70 text-xs">Value transparency: We don't just give a safety score; we explain <em>why</em> (e.g., 'Well-lit entrance').</p>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <h3 class="text-sm font-bold text-[#5B3E31] border-b pb-1">Solving the "AI Failure" Patterns</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl border border-gray-100">
          <p class="text-xs font-bold text-red-600">AI Failure: Flat Hierarchy</p>
          <p class="text-[11px] mt-1 italic">"Everything is on the top level because it's easier to prompt."</p>
          <p class="text-[11px] mt-2 font-bold text-green-700">Our Fix: Nested IA</p>
          <p class="text-[11px] opacity-70">Information is grouped by 'Mental Model' (Discovery -> Evaluation -> Safety), not just technical convenience.</p>
        </div>

        <div class="p-4 rounded-xl border border-gray-100">
          <p class="text-xs font-bold text-red-600">AI Failure: Micro-interaction only</p>
          <p class="text-[11px] mt-1 italic">"Showing a spinner but not explaining the result."</p>
          <p class="text-[11px] mt-2 font-bold text-green-700">Our Fix: Certainty Feedback</p>
          <p class="text-[11px] opacity-70">Focusing on the UX component: "Did that work? Is this safe?" through persistent state updates.</p>
        </div>
      </div>
    </div>

    <div class="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
      <h4 class="text-xs font-bold text-blue-800">System Learnability vs. User Learning</h4>
      <p class="text-xs opacity-80 mt-1">
        Instead of the user learning a complex interface, the system uses <strong>Adaptive/Predictive flows</strong> that learn the user's vibe and safety comfort levels through recurring interactions.
      </p>
    </div>

    <div class="p-4 bg-orange-50/50 border border-orange-100 rounded-xl">
      <h4 class="text-xs font-bold text-orange-600 uppercase">Retail → UX Mapping</h4>
      <p class="text-xs opacity-80 mt-1">
        My retail workflow directly shaped the UX logic: 
        Inspect → Awareness, Wrap & Seal → Evaluation, Label → Action, Clean → Reset. 
        This ensures the product mirrors real-world decision support and safety communication.
      </p>
    </div>
  </div>
</section>