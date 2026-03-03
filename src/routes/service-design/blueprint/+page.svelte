<!-- src/routes/service-design/blueprint/+page.svelte -->
<script>
  import { goto } from '$app/navigation';
</script>

<div class="min-h-screen bg-softBlue/30 p-6">
  <div class="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-8">

    <header class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-gray-800">Service Design Blueprint</h1>
      <a href="/" class="text-gray-500 hover:text-gray-700 text-xl">✕</a>
    </header>

    <section>
      <h2 class="text-xl font-semibold text-softOrange mb-2">
        Sequential trust-building flow
      </h2>

      <div class="grid grid-cols-3 gap-4 text-sm">
        <div class="bg-softBlue/20 p-3 rounded-lg">
          <h3 class="font-semibold">Awareness</h3>
          <ul class="list-disc ml-4">
            <li>Explore map</li>
            <li>See patterns</li>
            <li>Notice trends</li>
          </ul>
        </div>

        <div class="bg-softBlue/20 p-3 rounded-lg">
          <h3 class="font-semibold">Evaluation</h3>
          <ul class="list-disc ml-4">
            <li>Check details</li>
            <li>Compare data</li>
            <li>Review risks</li>
          </ul>
        </div>

        <div class="bg-softBlue/20 p-3 rounded-lg">
          <h3 class="font-semibold">Action</h3>
          <ul class="list-disc ml-4">
            <li>Review guidance</li>
            <li>Make decision</li>
            <li>Take action</li>
          </ul>
        </div>
      </div>
    </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold">Frontstage (Visible)</h2>
    <ul class="list-disc ml-4 text-sm">
      <li>Explore — World map, heat coding, visual patterns</li>
      <li>Check — Charts, time data, country details</li>
      <li>Decide — Risk cards, WHO guidelines, safety info</li>
    </ul>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold">Backstage (System)</h2>
    <ul class="list-disc ml-4 text-sm">
      <li>Data Load — Fetch consumption data, apply heat mapping</li>
      <li>Analysis — Calculate peaks, aggregate time series</li>
      <li>Risk Scoring — Apply WHO thresholds, generate alerts</li>
    </ul>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold">Trust Building (Inspired by Retail Safety)</h2>
    <ul class="list-disc ml-4 text-sm">
      <li>Transparency — Clear data sources, visible calculations</li>
      <li>Verification — WHO certified, peer-reviewed guidelines</li>
      <li>Consistency — Predictable flows, reliable patterns</li>
      <li>Safety First — Calm badges, non-alarming presentation</li>
    </ul>
  </section>

  <section class="space-y-4">
    <h2 class="text-xl font-semibold">Retail Workflow Mapping</h2>
    <ul class="list-disc ml-4 text-sm">
      <li>Inspect → Awareness</li>
      <li>Wrap & Seal → Evaluation</li>
      <li>Label → Action</li>
      <li>Clean — System Reset returns to fresh start</li>
    </ul>
  </section>

  <section class="space-y-4">
  <h2 class="text-xl font-semibold">Anticipated Reviewer Questions</h2>
  <p class="text-gray-600 text-sm">Cross-disciplinary questions I expect when presenting this UX-first prototype.</p>

  <div class="space-y-3 text-sm">
    <div>
      <h3 class="font-semibold text-softOrange">Business & Product</h3>
      <ul class="list-disc ml-4">
        <li>How will this make money?</li>
        <li>What’s the business model?</li>
        <li>Who is the target user?</li>
      </ul>
    </div>

    <div>
      <h3 class="font-semibold text-softOrange">Cybersecurity</h3>
      <ul class="list-disc ml-4">
        <li>What data is collected?</li>
        <li>Are there privacy risks?</li>
      </ul>
    </div>

    <div>
      <h3 class="font-semibold text-softOrange">AI & ML</h3>
      <ul class="list-disc ml-4">
        <li>Where does AI fit into this?</li>
        <li>Is this an AI-powered recommender?</li>
      </ul>
    </div>

    <div>
      <h3 class="font-semibold text-softOrange">UX & Design</h3>
      <ul class="list-disc ml-4">
        <li>Why this flow?</li>
        <li>Why semantic color systems?</li>
      </ul>
    </div>
  </div>
</section>

</div>
</div>
