<!-- src/routes/safety/analyze/+page.svelte -->
 <script lang="ts">
  import { page } from '$app/stores';
  import details from '$lib/data/mock-country-details.json';
  import SafetyCard from '$lib/components/safety/SafetyCard.svelte';
  import Breadcrumb from '$lib/components/safety/Breadcrumb.svelte';

  type CountryDetail = {
    country: string;
    region: string;
    annual: number;
    change: number;
    peakHour: string;
    regionalAverage: number;
    globalRank: number;
    updated: string;
    source: string;
  };

  const typedDetails = details as Record<string, CountryDetail>;

  $: code = $page.url.searchParams.get('code') || 'GBR';
  $: country = typedDetails[code];
</script>

<div class="min-h-screen bg-[#CDE7F6]/30 p-6">
  <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">

    <Breadcrumb current="analyze" />

    <h1 class="text-2xl font-bold">{country.country}</h1>
    <p class="text-gray-600">{country.region} • Check Details</p>

    <SafetyCard title="Annual Consumption">
      <p class="text-xl font-bold">{country.annual}L</p>
      <p class="text-sm text-gray-600">+{country.change}% vs last year</p>
    </SafetyCard>

    <SafetyCard title="Peak Period Identified">
      <p>{country.peakHour}</p>
    </SafetyCard>

    <SafetyCard title="Regional Context">
      <ul class="list-disc ml-4 text-sm">
        <li>Europe average: {country.regionalAverage}L</li>
        <li>Global rank: #{country.globalRank} of 14</li>
      </ul>
    </SafetyCard>

    <SafetyCard title="Data Freshness">
      <p class="text-sm">Last updated: {country.updated}</p>
      <p class="text-sm text-gray-500">Source: {country.source}</p>
    </SafetyCard>

  </div>
</div>
