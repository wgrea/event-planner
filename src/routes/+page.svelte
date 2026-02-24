<!-- src/routes/+page.svelte -->
<script lang="ts">
import type { BarType, EventType, ClubType } from '$lib/types';

import barTypesJson from '$lib/data/bar-types.json';
import eventTypesJson from '$lib/data/event-types.json';
import clubTypesJson from '$lib/data/club-types.json';
import mockConsumption from '$lib/data/mock-country-consumption.json';

import Header from '$lib/components/home/Header.svelte';
  import CategoryGrid from '$lib/components/home/CategoryGrid.svelte';
  import ExtraButtons from '$lib/components/home/ExtraButtons.svelte';
  import DrankEverywhere from '$lib/components/home/DrankEverywhere.svelte';
  import Dashboard from '$lib/components/home/Dashboard.svelte';
  import SafetyButton from '$lib/components/home/SafetyButton.svelte';
  import AboutSection from '$lib/components/home/AboutSection.svelte';

const barTypes = barTypesJson as BarType[];
const eventTypes = eventTypesJson as EventType[];
const clubTypes = clubTypesJson as ClubType[];

type CountryConsumption = {
  code: string;
  liters: number;
};
const consumption = mockConsumption as CountryConsumption[];

  // Drank Everywhere subset (hardcoded or filtered)
  const drankEverywhere = [
    { name: 'Heineken', country: 'Netherlands', category: 'Beer' },
    { name: 'Budweiser', country: 'USA', category: 'Beer' },
    { name: 'Bud Light', country: 'USA', category: 'Beer' },
    { name: 'Corona Extra', country: 'Mexico', category: 'Beer' },
    { name: 'Miller Lite', country: 'USA', category: 'Beer' },
    { name: 'Stella Artois', country: 'Belgium', category: 'Beer' }
  ];
</script>

<div class="min-h-screen bg-[#CDE7F6]/30 p-6">
  <div class="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
    <Header />
    <Dashboard {consumption} />
    {#each consumption as row}
      <a
        href={`/safety/inspect?code=${row.code}`}
        class="text-blue-600 underline"
      >
        {row.code}
      </a>
    {/each}
    <CategoryGrid {barTypes} {eventTypes} {clubTypes} />
    <ExtraButtons />
    <DrankEverywhere {drankEverywhere} />
    <AboutSection />
  </div>
</div>

