<script>
  import mockData from './mockData';
  import SearchInput from './components/SearchInput';
  import TabItem from './components/TabItem';

  const KEY_CODES = {
    DOWN: 40,
    UP: 38,
    ENTER: 13,
  };

  let query = '';
  let currentTabs = [];
  let currentIndex = 0;

  const tabQuery = { active: false, currentWindow: true };

  if (chrome && chrome.tabs) {
    chrome.tabs.query(tabQuery, (tabs) => {
      console.log(tabs)
      currentTabs = tabs;
    });
  } else {
    currentTabs = mockData;
  }

  const clearInput = () => {
    currentIndex = 0;
    query = '';
  };

  const switchBrowserTab = ({ id }) => {
    chrome.tabs.update(Number(id), { highlighted: true });
    clearInput();
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  let startsWith = (item, query) =>
    item.title.toLowerCase().indexOf(query.toLowerCase()) != -1;

  $: filteredTabs =
    query && query.length
      ? currentTabs.filter((tab) => startsWith(tab, query))
      : currentTabs;

  const getKeyInput = ({ keyCode }) => {
    if (keyCode === KEY_CODES.DOWN && currentIndex < filteredTabs.length - 1) {
      currentIndex++;
    } else if (keyCode === KEY_CODES.UP && currentIndex > 0) {
      currentIndex--;
    } else if (keyCode === KEY_CODES.ENTER && filteredTabs[currentIndex]) {
      switchBrowserTab(filteredTabs[currentIndex]);
    }
  };
</script>

<div class="w-96 bg-gray-700 relative">
  <SearchInput
    bind:value={query}
    onChange={handleInputChange}
    onKeyDown={getKeyInput}
  />
  <ul class="bg-gray-800">
    {#each filteredTabs as tab, index}
      <TabItem {tab} {currentIndex} {index} />
    {/each}
  </ul>
</div>
