
// Replace with your own values
const app_id = 'ITP4GM7PGU';
const search_only_api_key = '98ec2925946deee046bb35ddd77bef30'; // search only API key, not admin API key

const searchClient = algoliasearch(
  app_id,
  search_only_api_key
);

const search = instantsearch({
  indexName: 'contact',
  searchClient,
  routing: true,
});

search.addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: 50,
    }),
    instantsearch.widgets.searchBox({
      container: '#searchbox',
      placeholder: 'Search for contacts',
    }),
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item: document.getElementById('hit-template').innerHTML,
        empty: `We didn't find any results for the search <em>"{{query}}"</em>`,
      },
    }),
    instantsearch.widgets.clearRefinements({
      container: '#clear-refinements',
    }),
    instantsearch.widgets.refinementList({
        container: document.querySelector('#state'),
        attribute: 'state',
        searchable: true,
        searchablePlaceholder: 'Search for a state',
        limit: 5,
        sortBy: ['name:asc'],
        showMore: true
    }),
    instantsearch.widgets.refinementList({
          container: document.querySelector('#city'),
          attribute: 'city',
          searchable: true,
          searchablePlaceholder: 'Search for a city',
          limit: 5,
          sortBy: ['name:asc'],
          showMore: true
    }),
    instantsearch.widgets.refinementList({
        container: document.querySelector('#company'),
        attribute: 'company',
        searchable: true,
        searchablePlaceholder: 'Search for a company',
        limit: 5,
        sortBy: ['name:asc'],
        showMore: true
    }),
    instantsearch.widgets.rangeSlider({
      container: document.querySelector('#followers'),
      attribute: 'followers',
      min: 10,
      max: 10000,
      step: 10,
      pips: true,
    }),
    instantsearch.widgets.stats({
      container: "#stats",
      templates: {
        body(hit) {
          return `<p> &#128073 <b>${hit.nbHits}</b> results found ${
            hit.query != "" ? `for <b>"${hit.query}"</b>` : ``
          } in <b>${hit.processingTimeMS}ms</b></p>`;
        }
      }
    }),
    instantsearch.widgets.hitsPerPage({
      container: '#hits-per-page',
      items: [
        { label: '16 contacts per page', value: 16, default: true },
        { label: '24 contacts per page', value: 24 },
      ]
    }),
    instantsearch.widgets.pagination({
      container: "#pagination"
    })
]);

search.start();
