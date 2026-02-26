<!-- src/lib/components/home/SafetyButton.svelte -->
<script>
  import { page } from '$app/stores';
  export let href;

  $: code = $page.url.searchParams.get('code');
  $: finalHref = code ? `${href}?code=${code}` : href;
</script>

<a
  href={finalHref}
  class="
    fixed bottom-6 right-6
    w-20 h-20
    rounded-full
    flex items-center justify-center
    bg-[#FFF7ED]
    text-black
    shadow-lg shadow-light-orange-300/40
    text-[10px] leading-tight font-semibold text-center px-2
  "
>
  View Safety<br/>Assessment
</a>
