<!-- src/routes/safety/inspect/+page.svelte -->
<script>
  import { page } from '$app/stores';
  import Breadcrumb from '$lib/components/safety/Breadcrumb.svelte';

  $: code = $page.url.searchParams.get('code') || 'GBR';
</script>

<div class="min-h-screen bg-[#CDE7F6]/30 p-6">
  <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">

    <Breadcrumb current="inspect" />

    <h1 class="text-2xl font-bold">Inspect</h1>
    <p class="text-gray-600">Review data for {code}</p>

    <p class="text-gray-500 text-sm">
      Graph view coming soon — using mock data for now.
    </p>

  </div>
</div>
