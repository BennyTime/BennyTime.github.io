// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Grand Divide',
  tagline: 'A D&D Adventure in the World of Vaeloran',
  favicon: 'img/grand_divide.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://bennytime.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/grand-divide/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BennyTime', // Usually your GitHub org/user name.
  projectName: 'BennyTime.github.io', // Usually your repo name.
  
  trailingSlash: true,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'The Grand Divide',
        logo: {
          alt: 'The Grand Divide Logo',
          src: 'img/peak.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'World Guide',
          },
          {to: '/blog', label: 'Campaign Log', position: 'left'},
          {
            href: 'https://github.com/BennyTime/BennyTime.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'The World',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Timeline',
                to: '/docs/timeline/early-eras',
              },
              {
                label: 'World Regions',
                to: '/docs/world-regions/concordant-plains',
              },
              {
                label: 'Races',
                to: '/docs/races/aelvar',
              },
            ],
          },
          {
            title: 'Lore & Rules',
            items: [
              {
                label: 'Gods & Religion',
                to: '/docs/gods-religion/creators',
              },
              {
                label: 'General Knowledge',
                to: '/docs/knowledge/laws-and-rules',
              },
              {
                label: 'Organizations & Guilds',
                to: '/docs/organizations/concordant-plains',
              },
              {
                label: 'Languages & Realms',
                to: '/docs/languages-realms/languages',
              },
              {
                label: 'Items & Equipment',
                to: '/docs/items-equipment/new-weapons',
              },
            ],
          },
          {
            title: 'Campaign',
            items: [
              {
                label: 'Session Log',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/BennyTime/BennyTime.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Grand Divide Campaign. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
