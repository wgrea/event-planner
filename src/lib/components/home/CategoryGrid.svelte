<!-- src/lib/components/home/CategoryGrid.svelte -->
<script lang="ts">
  import type { BarType, EventType, ClubType } from '$lib/types';

  export let barTypes: BarType[];
  export let eventTypes: EventType[];
  export let clubTypes: ClubType[];
</script>

<section class="section">
  <h2 class="section-title">Explore By Category</h2>

  <div class="category-grid">
    <a href="/bars" class="card">
      <h3>Bar Types</h3>
      <p>{barTypes.length} curated atmospheres</p>
    </a>

    <a href="/events" class="card">
      <h3>Event Types</h3>
      <p>{eventTypes.length} social experiences</p>
    </a>

    <a href="/clubs" class="card">
      <h3>Club Types</h3>
      <p>{clubTypes.length} nightlife scenes</p>
    </a>

    <a href="/drinks" class="card">
      <h3>Global Drinks Database</h3>
      <p>Worldwide & regional</p>
    </a>
  </div>
</section>
