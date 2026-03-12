import { defineUserConfig } from 'vitepress-export-pdf';
import userConfig from './config.mjs';

function extractLinksFromConfig(config) {
  const links = [];

  function toPath(link) {
    if (!link) return null;
    const base = link.replace(/\/$/, '') || '';
    return base ? `${base}/index.html` : '/index.html';
  }

  function extractLinks(sidebar) {
    if (!sidebar) return;

    const items = Array.isArray(sidebar) ? sidebar : (sidebar.items || []);

    for (const item of items) {
      if (item.link === '/' || item.link === '/index') continue;

      if (item.link && item.items) {
        links.push(toPath(item.link));
        extractLinks(item.items);
      } else if (item.items) {
        extractLinks(item.items);
      } else if (item.link) {
        const p = item.link.replace(/\/$/, '') || '';
        links.push(p ? `${p}.html` : '/index.html');
      }
    }
  }

  if (config.themeConfig && config.themeConfig.sidebar) {
    extractLinks(config.themeConfig.sidebar);
  }

  return links;
}

// Extract links from the user config directly (which exports the VitePress config)
const sidebar = userConfig.themeConfig?.sidebar || [];
const links = extractLinksFromConfig({ themeConfig: { sidebar } });

// Build route order from sidebar: index first, then all pages in sidebar order
const routeOrder = ['/index.html', '/', '/index', ...links];

// Normalize path to a comparable key (export may use .html, trailing slash, or /index)
function pathToKey(path) {
  if (!path) return '';
  return path
    .replace(/\.html$/, '')
    .replace(/\/$/, '')
    .replace(/\/index$/, '')
    .replace(/^\//, '');
}

const routeKeys = routeOrder.map((r) => pathToKey(r));

// Header/footer are not used here; continuous page numbers are added in post-processing (see scripts/add-pdf-page-numbers.mjs)

// print all links
console.log('Links:', links);


export default defineUserConfig({
    // Include only pages from the sidebar configuration
    // Exclude assets and other non-content files
    routePatterns: [
        '/',
        '/index.html',
        ...links,
        '!/img/**',
        '!/processed/**',
        '!**/*.don-use.txt',
    ],


   sorter: (pageA, pageB) => {
        const orderOf = (path) => {
            const key = pathToKey(path);
            const i = routeKeys.indexOf(key);
            return i === -1 ? 9999 : i;
        };
        return orderOf(pageA.path) - orderOf(pageB.path);
    },
  outFile: 'metadata-standards-guide.pdf',
  outDir: 'docs/public',
  pdfOptions: {
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    margin: {
        top: 60,
        bottom: 60,
        left: 25,
    },
  },
});

