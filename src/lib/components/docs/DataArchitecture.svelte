<!-- src/lib/components/docs/DataArchitecture.svelte -->
<section class="space-y-6">
  <header>
    <h2 class="text-xl font-bold text-[#5B3E31]">System Schema</h2>
    <p class="text-sm opacity-70">A many-to-many relationship where drinks 'fit' spaces.</p>
  </header>

  <div class="space-y-4">
    <div class="p-4 bg-gray-50 rounded-xl border border-gray-100">
      <code class="text-[10px] text-blue-600 font-mono">
        Drink_Category ↔ Bar_Type ↔ Pressure_Level
      </code>
      <p class="text-xs mt-2 opacity-80">
        Unlike a flat directory, my bridge tables use <strong>Fit Scores (1–5)</strong> to determine if a drink belongs in a specific atmosphere.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="p-4 border border-orange-100 rounded-xl">
        <h4 class="text-xs font-bold uppercase tracking-tighter text-orange-600 mb-2">Entity: Drink</h4>
        <ul class="text-[11px] space-y-1 opacity-70">
          <li>• ABV & Origin</li>
          <li>• Flavor Profile (Tags)</li>
          <li>• Cultural Notes</li>
          <li>• Restriction Logic (Parallel Taxonomy)</li>
        </ul>
      </div>
      <div class="p-4 border border-blue-100 rounded-xl">
        <h4 class="text-xs font-bold uppercase tracking-tighter text-blue-600 mb-2">Entity: Venue</h4>
        <ul class="text-[11px] space-y-1 opacity-70">
          <li>• Vibe/Music Identity</li>
          <li>• Interaction Intensity (Pressure)</li>
          <li>• Social Dynamics</li>
          <li>• Safety Verification</li>
        </ul>
      </div>
    </div>
  </div>
</section>