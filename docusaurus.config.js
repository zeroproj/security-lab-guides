// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Security Lab Guides',
  tagline: 'Guias e laboratórios práticos de segurança open source',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages
  url: 'https://zeroproj.github.io',
  baseUrl: '/security-lab-guides/',
  organizationName: 'zeroproj',
  projectName: 'security-lab-guides',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs', // 📘 Docs em /docs
          editUrl: 'https://github.com/zeroproj/security-lab-guides/tree/main/',
        },
        blog: false, // ❌ sem blog
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Security Lab Guides',
      logo: {
        alt: 'Security Lab Guides',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs',
          label: 'Documentação',
          position: 'left',
        },
        {
          href: 'https://github.com/zeroproj/security-lab-guides',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Introdução',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Projeto',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/zeroproj/security-lab-guides',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Security Lab Guides`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;

