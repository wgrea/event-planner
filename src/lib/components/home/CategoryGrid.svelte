<!-- src/lib/components/home/CategoryGrid.svelte -->
<script lang="ts">
  import type { BarType, EventType, ClubType } from '$lib/types';

  export let barTypes: BarType[];
  export let eventTypes: EventType[];
  export let clubTypes: ClubType[];
</script>

<section class="section">
  <h2 class="section-title">Where Drinks Are Found</h2>
  <p class="subtle-text mb-4">
    Drinks are experienced in social settings like bars, events, and clubs.
  </p>

  <a href="/drinks" class="view-all mb-4 block">
    Explore the Full Global Drinks Database
  </a>

  <div class="category-grid">
    <a href="/bars" class="card">
      <h3>Bar Types</h3>
      <p>{barTypes.length} types</p>
    </a>

    <a href="/events" class="card">
      <h3>Event Types</h3>
      <p>{eventTypes.length} types</p>
    </a>

    <a href="/clubs" class="card">
      <h3>Club Types</h3>
      <p>{clubTypes.length} types</p>
    </a>
  </div>
</section>
