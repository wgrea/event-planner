<!-- src/routes/drinks/[id]/assess/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import Breadcrumb from '$lib/components/safety/Breadcrumb.svelte';
  import SafetyCard from '$lib/components/safety/SafetyCard.svelte';

  const id = $page.params.id!;
  const name = id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const placeholder = {
    riskLevel: 'Varies',
    notes: [
      'Risk depends on alcohol percentage and serving size.',
      'Mixing with energy drinks increases strain on the heart.',
      'Cultural context influences typical consumption patterns.'
    ],
    recommendations: [
      'Check alcohol percentage before consuming.',
      'Pair with food to slow absorption.',
      'Alternate alcoholic drinks with water.',
      'Follow WHO guidelines for weekly limits.'
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
