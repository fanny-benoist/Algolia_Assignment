I've created an app that calls Algolia search librairy to search for a person in a contact database. 

Each records contains the attributes:
- Last Name
- First Name
- Company
- Address
- City
- State
- ZIP
- County
- Email
- Phone
- Fax
- Web

You can search for a last name, a first name or a company.
To help you get result faster, you can facet per company, state, county or followers depending on what you're looking for.

## Contents
- index-configuration.js: (To run)
    This file allows you to create a new Index in your dashboard with the correct configurations
  - Initialize client
  - Push Data 
  - Configure

- contact_dataset.json:
  - List of records       

- Search UI: 
    - .docs/index.html: front-end search using InstantSearch.js
    - .docs/app.js: create widgets
    - .docs/app.css: style front-end

## Setup
To run this project:    
- install the git repository locally   
- replace App ID, Admin API Key and SearchOnly API Key on index-configuration.js and app.js
- install algoliasearch 
- run index-configuration.js