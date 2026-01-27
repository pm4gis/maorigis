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

  // Primary site domain
  url: 'https://maorigis.nz',
  baseUrl: '/',
  trailingSlash: false,

  // These are still used by some plugins and links
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Māori GIS',
        items: [
          { type: 'doc', docId: 'intro', position: 'left', label: 'Guide' },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              { label: 'Introduction', to: '/docs/intro' },
              { label: 'Ngā Poutama Matawhenua at LINZ', href: 'https://www.linz.govt.nz/poutama' },
            ],
          },
          {
            title: 'Contact',
            items: [
              { label: 'Email Author', href: 'mailto:duane.wilkins@gmail.com' },
              { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/duanewilkins/' },
            ],
          },
          {
            title: 'Code',
            items: [
          //    { label: 'GitHub', href: 'https://github.com/pm4gis/maorigis' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Māori GIS. He mapi nā tātou, mō tātou. This work is open source under Creative Commons Attribution. Reuse and adaptation are welcomed with attribution`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
