// Initialize the client
const algoliasearch = require('algoliasearch');

// Replace by your value
const app_id = '***********';
const admin_api_key = '**********';

// Create an instance
const client = algoliasearch(
  app_id,
  admin_api_key
);


// Initialize the index we want to push our data to
const index = client.initIndex('contact');
// Push Data
const contactsJSON = require("./contact_dataset.json");
index.saveObjects(contactsJSON, {
    autoGenerateObjectIDIfNotExist: true
  }).then(({ objectIDs }) => {
    console.log(objectIDs);
  });

// Configure
index.setSettings({
  'customRanking': ['desc(followers)']
},
{
  searchableAttributes: [
    'unordered(lastname)',
    'unordered(firstname)',
    'company'
    ]
},
{
  attributesForFaceting: [
      'searchable(city)',
      'searchable(state)',
      'searchable(followers)',
      'searchable(company)'
  ]
}).then(() => {
  // done
});

