<!-- src/routes/safety/assess/+page.svelte -->
<script>
  import { page } from '$app/stores';
  import Breadcrumb from '$lib/components/safety/Breadcrumb.svelte';

  $: code = $page.url.searchParams.get('code') || 'GBR';
</script>


<div class="min-h-screen bg-softBlue/30 p-6">
  <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">
    <slot />
  </div>
</div>

