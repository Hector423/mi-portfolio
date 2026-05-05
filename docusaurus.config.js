// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Héctor | Mi portfolio',
  tagline: 'Writeups de Ciberseguridad',
  favicon: 'img/favicon.ico',
  url: 'https://Hector423.github.io',
  baseUrl: '/mi-portfolio/',
  organizationName: 'Hector423', 
  projectName: 'mi-portfolio', 
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Hector423/mi-portfolio/tree/main/',
        },
        blog: {
          showReadingTime: true,
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Héctor Portfolio',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Writeups',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Hector423/mi-portfolio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'DockerLabs',
            items: [
              {
                label: 'Máquinas Muy Fáciles',
                // Ajustado a tu ruta real según la imagen
                to: '/docs/DockerLabs/Máquinas muy faciles/trust', 
              },
              {
                label: 'Máquinas Fáciles',
                to: '/docs/DockerLabs/Máquinas fáciles/Mirame',
              },
            ],
          },
          {
            title: 'Contacto',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Hector423',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Héctor. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
