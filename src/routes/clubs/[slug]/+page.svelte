<!-- src/routes/clubs/[slug]/+page.svelte -->
<script lang="ts">
  import AnalyzeLayout from '$lib/components/analyze/Layout.svelte';
  import AnalyzeCTA from '$lib/components/analyze/CTA.svelte';
  import ClubAnalyzeDetails from '$lib/components/analyze/ClubDetails.svelte';
  import Toggle from '$lib/components/Toggle.svelte';
  import { findRelatedDrinks } from '$lib/utils/drinks';

  export let data;
  const club = data.club;

  const relatedDrinks = findRelatedDrinks(club.typical_drinks);
</script>

<AnalyzeLayout theme="purple" title={club.name} backHref="/clubs">
  <ClubAnalyzeDetails {club} />
  <AnalyzeCTA href={`/clubs/${club.slug}/assess`} />
</AnalyzeLayout>

