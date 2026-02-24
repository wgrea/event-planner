<!-- src/lib/components/home/SafetyButton.svelte -->
<script>
  import { page } from '$app/stores';
  export let href;

  $: code = $page.url.searchParams.get('code');
  $: finalHref = code ? `${href}?code=${code}` : href;
</script>

<a href={finalHref} class="fixed bottom-6 right-6 ...">
  View Safety Assessment
</a>
