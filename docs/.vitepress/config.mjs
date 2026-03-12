import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
  title: "Reference Guide on Metadata Standards for Development Data",
  description: "World Bank Group reference guide on metadata standards for development data",
  base: '/',
  themeConfig: {
    logo: '/hub-outline.svg',
    siteTitle: 'Metadata Standards Guide',
    outline: {
      level: [2, 3]
    },
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      { text: 'Home', link: '/' },
      { text: 'Contents', link: '/contents' },
      { text: 'Foreword', link: '/foreword' },
      { text: 'Acknowledgments', link: '/acknowledgments' },
      { text: 'Acronyms', link: '/acronyms' },
      { text: 'Introduction', link: '/introduction' },
      { text: '1. Metadata Strategy for Development Data', link: '/chapter-1-metadata-strategy' },
      {
        text: '2. Metadata: Definitions, Benefits, Creation, and Use',
        link: '/chapter-2/',
        collapsed: false,
        items: [
          { text: '2.1 Metadata', link: '/chapter-2/2-1-metadata' },
          { text: '2.2 Structured Metadata', link: '/chapter-2/2-2-structured-metadata' },
          { text: '2.3 Metadata Standards', link: '/chapter-2/2-3-metadata-standards' },
          { text: '2.4 Metadata Templates', link: '/chapter-2/2-4-metadata-templates' },
          { text: '2.5 Choosing the Right Level of Metadata Production', link: '/chapter-2/2-5-choosing-right-level' },
          { text: '2.6 Generating Metadata Compliant with Standards', link: '/chapter-2/2-6-generating-metadata' },
          { text: '2.7 Metadata Quality Control', link: '/chapter-2/2-7-quality-control' },
          { text: '2.8 Metadata Governance', link: '/chapter-2/2-8-governance' },
          { text: '2.9 Metadata Dissemination and Use', link: '/chapter-2/2-9-dissemination-use' },
          { text: '2.10 Archiving and Preserving Metadata', link: '/chapter-2/2-10-archiving-preserving' },
        ],
      },
      {
        text: '3. World Bank Group Metadata Standards',
        link: '/chapter-3/',
        collapsed: false,
        items: [
          { text: '3.1 Selection, Development, Maintenance, and Versioning', link: '/chapter-3/3-1-selection-development-maintenance-versioning' },
          { text: '3.2 Maintaining Flexibility in the Use of Metadata Standards', link: '/chapter-3/3-2-maintaining-flexibility' },
          { text: '3.3 Technical Documentation', link: '/chapter-3/3-3-technical-documentation' },
          { text: '3.4 Elements Common Across Standards', link: '/chapter-3/3-4-elements-common-across-standards' },
          { text: '3.5 World Bank Group Metadata Standards by Data Type', link: '/chapter-3/3-5-wb-metadata-standards-by-data-type' },
          { text: '3.6 Administrative Metadata', link: '/chapter-3/3-6-administrative-metadata' },
          { text: '3.7 Relationship Metadata', link: '/chapter-3/3-7-relationship-metadata' },
          { text: '3.8 Compatibility with Other Metadata Standards', link: '/chapter-3/3-8-compatibility-with-other-standards' },
        ],
      },
      { text: 'Annex 1 – Recommendations to System Developers', link: '/annex-1-recommendations-system-developers' },
      { text: 'Annex 2 – Guidance for the Procurement of Data', link: '/annex-2-procurement-guidance' },
      { text: 'Annex 3 – References and Resources', link: '/annex-3-references-resources' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})

