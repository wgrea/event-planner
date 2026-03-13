<!-- src/lib/components/docs/UXPrinciples.svelte -->
<section class="space-y-8">
  <header>
    <h2 class="text-xl font-bold text-[#5B3E31]">High-Order UX Application</h2>
    <p class="text-sm opacity-70">Moving beyond "AI-generated UI" to intentional interaction design.</p>
  </header>

  <div class="grid grid-cols-2 md:grid-cols-3 gap-2 p-4 bg-amber-50/50 rounded-xl border border-amber-100 text-xs">
    <span class="font-medium">• understanding people</span>
    <span class="font-medium">• designing flows</span>
    <span class="font-medium">• shaping meaning</span>
    <span class="font-medium">• structuring information</span>
    <span class="font-medium">• reducing friction</span>
    <span class="font-medium">• building trust</span>
    <span class="font-medium">• creating clarity</span>
    <span class="font-medium">• mapping journeys</span>
    <span class="font-medium">• designing systems</span>
  </div>

  <div class="space-y-6">
    <div class="p-5 rounded-2xl border border-orange-100 bg-orange-50/30">
      <h3 class="text-sm font-bold text-[#2563EB] mb-2 uppercase tracking-wide">Trust & Agency</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <p class="font-bold">Cognitive Alignment</p>
          <p class="opacity-70 text-xs">The UI matches the user's mental model of 'Atmosphere' rather than just 'Location'.</p>
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
          <p class="text-[11px] mt-2 font-bold text-green-700">My Fix: Nested IA</p>
          <p class="text-[11px] opacity-70">Information is grouped by 'Mental Model' (Discovery → Evaluation → Safety), not just technical convenience.</p>
        </div>

        <div class="p-4 rounded-xl border border-gray-100">
          <p class="text-xs font-bold text-red-600">AI Failure: Micro-interaction only</p>
          <p class="text-[11px] mt-1 italic">"Showing a spinner but not explaining the result."</p>
          <p class="text-[11px] mt-2 font-bold text-green-700">My Fix: Certainty Feedback</p>
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