<!-- src/routes/+page.svelte -->

<script lang="ts">
  import type { BarType, EventType, ClubType } from '$lib/types';

  import barTypesJson from '$lib/data/bar-types.json';
  import eventTypesJson from '$lib/data/event-types.json';
  import clubTypesJson from '$lib/data/club-types.json';

  import Header from '$lib/components/home/Header.svelte';
  import CategoryGrid from '$lib/components/home/CategoryGrid.svelte';
  import DrankEverywhere from '$lib/components/home/DrankEverywhere.svelte';
  import ServiceDesignButton from '$lib/components/home/ServiceDesignButton.svelte';
  import AboutSection from '$lib/components/home/AboutSection.svelte';

  const barTypes = barTypesJson as BarType[];
  const eventTypes = eventTypesJson as EventType[];
  const clubTypes = clubTypesJson as ClubType[];

  type CountryConsumption = { code: string; liters: number };

  const drankEverywhere = [
    { name: 'Heineken', country: 'Netherlands', category: 'Beer', slug: 'heineken' },
    { name: 'Budweiser', country: 'USA', category: 'Beer', slug: 'budweiser' },
    { name: 'Bud Light', country: 'USA', category: 'Beer', slug: 'bud-light' },
    { name: 'Corona Extra', country: 'Mexico', category: 'Beer', slug: 'corona-extra' },
    { name: 'Miller Lite', country: 'USA', category: 'Beer', slug: 'miller-lite' },
    { name: 'Stella Artois', country: 'Belgium', category: 'Beer', slug: 'stella-artois' }
  ];
</script>

<div class="min-h-screen bg-[#fcdab7] p-6">
  <div class="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-10">

    <Header />
    <CategoryGrid {barTypes} {eventTypes} {clubTypes} />
    <DrankEverywhere {drankEverywhere} />
    <AboutSection />
    <ServiceDesignButton />
  </div>
</div>
