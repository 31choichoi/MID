import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://minterior.kr';
const FIRESTORE_URL = 'https://firestore.googleapis.com/v1/projects/gen-lang-client-0042597002/databases/ai-studio-06405249-7b2e-4cd1-94b9-c16f4c986be3/documents/posts';

async function generateSitemap() {
  console.log('Generating dynamic and static sitemap for minterior.kr...');

  const staticRoutes = [
    { loc: '', changefreq: 'weekly', priority: '1.0' },
    { loc: '/bundang-interior', changefreq: 'weekly', priority: '0.9' },
    { loc: '/portfolio', changefreq: 'weekly', priority: '0.9' },
    { loc: '/about', changefreq: 'monthly', priority: '0.8' },
    { loc: '/blog', changefreq: 'weekly', priority: '0.8' },
    { loc: '/booking', changefreq: 'monthly', priority: '0.7' }
  ];

  let dynamicRoutes = [];
  try {
    const response = await fetch(FIRESTORE_URL);
    if (response.ok) {
      const data = await response.json();
      if (data.documents) {
        dynamicRoutes = data.documents
          .map(doc => {
            const fields = doc.fields;
            if (!fields) return null;

            const id = doc.name.split('/').pop();
            const published = fields.published?.booleanValue ?? false;
            const updatedAt = fields.updatedAt?.stringValue || fields.createdAt?.stringValue || new Date().toISOString();
            
            if (published) {
              return {
                loc: `/blog/${id}`,
                lastmod: updatedAt.split('T')[0],
                changefreq: 'monthly',
                priority: '0.6'
              };
            }
            return null;
          })
          .filter(Boolean);
      }
    } else {
      console.warn('Failed to fetch posts from firestore REST API. Status:', response.status);
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  const currentDate = new Date().toISOString().split('T')[0];
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route.loc}</loc>
    <lastmod>${route.lastmod || currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

  const rootDir = process.cwd();
  const publicPath = path.join(rootDir, 'public', 'sitemap.xml');
  
  // Make sure the directory exists
  const publicDir = path.dirname(publicPath);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(publicPath, xml, 'utf8');
  console.log(`Success: sitemap.xml generated with ${allRoutes.length} URLs inside ${publicPath}.`);
}

generateSitemap();
