# Data Layer

This folder contains the static data used to populate the website.

## Current Data
- `products.json`: Contains the list of products.

## How to Replace with a CMS
To switch to a Headless CMS (like Sanity, Strapi, or Contentful):

1.  **Fetch Data**: Create a utility function (e.g., `src/lib/api.js`) to fetch data from your CMS API.
2.  **Replace Imports**: In `src/pages/Products.jsx` and `src/pages/ProductDetail.jsx`, replace the import of `products.json` with your async data fetching logic.
3.  **Update Types**: Ensure the fetched data matches the structure expected by the components (id, name, price, image, etc.).
