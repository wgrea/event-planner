<!-- src/lib/components/analyze/CTA.svelte -->
<script lang="ts">
  export let href: string;
  export let label: string = "View Safety Assessment";
</script>

<a
  {href}
  class="block w-full text-center bg-[#fcdab7] text-vibe-brown font-bold py-3 rounded-lg border border-orange-300 shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]" 
>
  {label}
</a>