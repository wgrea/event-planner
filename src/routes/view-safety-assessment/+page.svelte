<!-- src/routes/view-safety-assessment/+page.svelte -->
<script>
  import { goto } from '$app/navigation';
</script>

<div class="p-6 max-w-xl mx-auto space-y-6">
  <h1 class="text-2xl font-bold">Safety Check</h1>
  <p class="text-gray-600">Proceeding to Risk Assessment</p>

  <div class="space-y-3 text-sm">
    <p>Please verify the following before proceeding:</p>
    <ul class="list-disc ml-4">
      <li>Data has been reviewed for accuracy</li>
      <li>Peak consumption patterns identified</li>
      <li>Regional comparisons validated</li>
      <li>Ready to assess safety guidelines</li>
    </ul>
  </div>

  <div class="flex gap-4 pt-4">
    <button
      class="px-4 py-2 rounded border border-gray-300"
      on:click={() => history.back()}
    >
      Review Again
    </button>

    <button
      class="px-4 py-2 rounded bg-green-600 text-white"
      on:click={() => goto('/safety/assess')}
    >
      Confirm & Continue
    </button>
  </div>
</div>
