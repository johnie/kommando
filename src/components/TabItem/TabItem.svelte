<script>
  export let tab;
  export let currentIndex;
  export let index;

  let url = new URL(tab.url);
</script>

<li
  class={`container flex px-4 py-1 text-sm text-gray-200 ${
    index === currentIndex ? "bg-purple-800" : ""
  }`}
>
  <div class="w-1/12 flex items-center">
    {#if tab.favIconUrl}
      <img src={tab.favIconUrl} alt={tab.title} width="16" height="16" />
    {/if}
  </div>
  <div class="w-11/12">
    <div class="truncate">{tab.title}</div>
    <div class="text-xs text-gray-400">{url.hostname}</div>
  </div>
</li>
