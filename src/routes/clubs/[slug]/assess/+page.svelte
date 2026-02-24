<script lang="ts">
  import { page } from '$app/stores';
  import Breadcrumb from '$lib/components/safety/Breadcrumb.svelte';
  import SafetyCard from '$lib/components/safety/SafetyCard.svelte';

  const slug = $page.params.slug!;
  const name = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const placeholder = {
    riskLevel: 'High',
    notes: [
      'High sensory stimulation and late-night peak hours.',
      'Pressure level increases significantly after midnight.',
      'Hydration and pacing are important for safety.'
    ],
    recommendations: [
      'Take breaks outside to cool down.',
      'Stay aware of your surroundings during peak hours.',
      'Hydrate regularly and avoid energy drink overload.'
    ]
  };
</script>

<Breadcrumb current="Assess" />

<h1 class="text-2xl font-semibold mb-4">
  Safety Assessment — {name}
</h1>

<SafetyCard title="Overall Risk Level">
  <p class="text-lg font-medium">{placeholder.riskLevel}</p>
</SafetyCard>

<SafetyCard title="Key Safety Notes">
  <ul class="list-disc ml-5 space-y-1">
    {#each placeholder.notes as note}
      <li>{note}</li>
    {/each}
  </ul>
</SafetyCard>

<SafetyCard title="Recommended Actions">
  <ul class="list-disc ml-5 space-y-1">
    {#each placeholder.recommendations as rec}
      <li>{rec}</li>
    {/each}
  </ul>
</SafetyCard>

<p class="text-sm text-gray-500 mt-6">
  Placeholder content • Real safety logic will use your database
</p>
