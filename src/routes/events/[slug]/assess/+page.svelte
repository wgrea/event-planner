<!-- src/routes/events/[slug]/assess/+page.svelte -->
<script lang="ts">
  import AssessLayout from '$lib/components/safety/AssessLayout.svelte';
  import SafetyCard from '$lib/components/safety/Card.svelte';
  import EventDetails from '$lib/components/safety/EventDetails.svelte';
  import { calculateRisk } from '$lib/utils/safety';

  export let data;
  const event = data.event;

  const riskLevel = event.overall_risk || calculateRisk(event.touch_level, 'touch');
</script>

<AssessLayout
  theme="yellow"
  title={`Safety Assessment — ${event.name}`}
  backHref={`/events/${event.slug}`}
>
  <EventDetails {event} />
</AssessLayout>
