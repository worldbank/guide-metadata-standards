import { defineUserConfig } from 'vitepress-export-pdf';
import userConfig from './config.mjs';

function extractLinksFromConfig(config) {
  const links = [];

  function extractLinks(sidebar) {
    if (!sidebar) return;
    
    const items = Array.isArray(sidebar) ? sidebar : (sidebar.items || []);
    
    for (const item of items) {
      // Skip root/home link as it's handled separately
      if (item.link === '/' || item.link === '/index') {
        continue;
      }
      
      // If item has both a link and nested items, include parent first
      if (item.link && item.items) {
        links.push(`${item.link}.html`);
        // Then include nested items in order
        extractLinks(item.items);
      } else if (item.items) {
        // If item has items but no link, just process items
        extractLinks(item.items);
      } else if (item.link) {
        // Simple link without nested items
        links.push(`${item.link}.html`);
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
const routeOrder = [
  '/index.html',
  ...links,
];

const headerTemplate = `<div style="margin-top: -0.4cm; height: 70%; width: 100%; display: flex; justify-content: center; align-items: center; color: lightgray; border-bottom: solid lightgray 1px; font-size: 10px;font-family: arial; ">
  <span class="title"></span>
</div>`;

const footerTemplate = `<div style="margin-bottom: -0.4cm; height: 70%; width: 100%; display: flex; justify-content: center; align-items: center; color: lightgray; border-top: solid lightgray 1px; font-size: 10px; font-family: arial;">
  <span style="margin-left: 15px;">Page <span class="pageNumber"></span> of <span class="totalPages"></span> | Chapter: <span class="title"></span></span>
</div>`;

// print all links
console.log('Links:', links);


export default defineUserConfig({
    // Include only pages from the sidebar configuration
    // Exclude assets and other non-content files
    routePatterns: [
        '/index.html',
        ...links,
        '!/img/**',
        '!/processed/**',
        '!**/*.don-use.txt',
    ],


    /*
    sorter: (pageA, pageB) => {
		const aIndex = routeOrder.findIndex(route => route === pageA.path);
		const bIndex = routeOrder.findIndex(route => route === pageB.path);
		return aIndex - bIndex;
	},
    */
   sorter: (pageA, pageB) => {

        //if not in routeOrder, add to end
        /*if (!routeOrder.includes(pageA.path) && !routeOrder.includes(pageB.path)) {
            return 1000;
        }*/

        const aIndex = routeOrder.findIndex(route => route === pageA.path);
        const bIndex = routeOrder.findIndex(route => route === pageB.path);

        return aIndex - bIndex;
    },
  outFile: 'data-quality-compliance-report.pdf',
  outDir: 'docs/public',
  pdfOptions: {
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    headerTemplate,
    footerTemplate,
    margin: {
        top: 60,
        bottom: 60,
        left: 25,
    },
  },
});

