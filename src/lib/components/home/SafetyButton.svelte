<!-- src/lib/components/home/SafetyButton.svelte -->
<script>
  import { page } from '$app/stores';
  export let href;

  // Future Will Note:
  // This button is ONLY for the Safety flow (Inspect → Analyze → Assess).
  // Do NOT render on the Home page.
  // It auto-appends ?code=XYZ when present.
  $: code = $page.url.searchParams.get('code');
  $: finalHref = code ? `${href}?code=${code}` : href;
</script>

<a href={finalHref} class="fixed bottom-6 right-6 ...">
  View Safety Assessment
</a>
