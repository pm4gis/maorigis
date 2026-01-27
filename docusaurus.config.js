// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Māori GIS Mapping',
  tagline: 'A practical GIS mapping guide for people working in iwi and Māori communities',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://maorigis.nz',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'pm4gis',
  projectName: 'maorigis',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */ ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          editUrl: 'https://github.com/pm4gis/maorigis/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */ ({
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
      colorMode: {
        respectPrefersColorScheme: true,
      },

      docs: {
        sidebar: {
          autoCollapseCategories: false,
          hideable: false,
        },
      },

      image: 'img/social-card.png',
      metadata: [
        {
          name: 'keywords',
          content:
            'Māori GIS, Māori mapping, Maori Maps, Maori GIS Maps, Aotearoa New Zealand GIS, iwi mapping, hapū mapping, whānau mapping, whenua, wai, moana, taiao, mahinga kai, wāhi tapu, Māori data sovereignty, kaitiakitanga, geospatial data NZ, LINZ data, QGIS NZ, ArcGIS, hazard mapping NZ, place names Aotearoa, te reo Māori on maps, indigenous GIS, cultural mapping',
        },
        {
          name: 'author',
          content: 'Duane Wilkins, Māori GIS Mapping',
        },
      ],

      navbar: {
        title: 'Māori GIS',
        items: [{ type: 'doc', docId: 'intro', position: 'left', label: 'Guide' }],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              { label: 'Introduction', to: '/docs/intro' },
              { label: 'About the Author', to: '/docs/about' },
            ],
          },
          {
            title: 'Contact',
            items: [
              { label: 'Email', href: 'mailto:duane.wilkins@gmail.com' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/duanewilkins/' },
            ],
          },
          {
            title: 'More resources',
            items: [{ label: 'Matawhenua', href: 'https://matawhenua.com' }],
          },
        ],
        copyright: `© ${new Date().getFullYear()} MāoriGIS.nz | Reuse with attribution welcome.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
