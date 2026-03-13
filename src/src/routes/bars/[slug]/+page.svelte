<!-- src/routes/bars/[slug]/+page.svelte -->
<script lang="ts">
  import AnalyzeLayout from '$lib/components/analyze/Layout.svelte';
  import AnalyzeCTA from '$lib/components/analyze/CTA.svelte';
  import BarAnalyzeDetails from '$lib/components/analyze/BarDetails.svelte';
  import Toggle from '$lib/components/Toggle.svelte';
  import { findRelatedDrinks } from '$lib/utils/drinks';

  export let data;
  const bar = data.bar;

  const relatedDrinks = findRelatedDrinks(bar.typical_drinks);
</script>

<AnalyzeLayout theme="green" title={bar.name} backHref="/bars">
  <BarAnalyzeDetails {bar} />
  <AnalyzeCTA href={`/bars/${bar.slug}/assess`} />
</AnalyzeLayout>
