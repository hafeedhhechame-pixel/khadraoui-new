import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/products.json'), 'utf-8'));

const BASE_URL = 'https://khadraoui.dz';

const pages = [
    '/',
    '/about',
    '/products',
    '/contact'
];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
  ${productsData.products.map(product => `
  <url>
    <loc>${BASE_URL}/products/${product.id}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  `).join('')}
</urlset>`;

    fs.writeFileSync('public/sitemap.xml', sitemap);
    console.log('Sitemap generated successfully!');
};

generateSitemap();
