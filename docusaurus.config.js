// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenTokenRegistry',
  tagline: 'Community-Verified Token Information',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://otr.cash',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OpenTokenRegistry', // Usually your GitHub org/user name.
  projectName: 'otr.cash', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/OpenTokenRegistry/otr.cash/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'countdown',
      //   content:
      //     'CashTokens are part of the 2023 Bitcoin Cash Upgrade: <a target="_blank" rel="noopener noreferrer" href="https://cash.coin.dance/">Countdown</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: 'img/open-token-registry-social-card.png',
      navbar: {
        style: 'dark',
        title: '',
        logo: {
          alt: 'OpenTokenRegistry',
          src: 'img/open-token-registry-logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Docs',
          // },
          { to: '/docs/intro', label: 'Intro', position: 'left' },
          // { to: '/docs/spec/chip', label: 'Specification', position: 'left' },
          {
            href: 'https://github.com/OpenTokenRegistry/otr.cash',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'List a Token',
                to: '/docs/list',
              },
              {
                label: 'Integration for Developers',
                to: '/docs/integrate',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Bitcoin Cash Research',
                href: 'https://bitcoincashresearch.org/',
              },
              {
                label: 'CashTokens Reddit',
                href: 'https://old.reddit.com/r/cashtokens',
              },
              {
                label: 'Bitcoin Cash Reddit',
                href: 'https://old.reddit.com/r/Bitcoincash/',
              },
            ],
          },
          {
            title: 'Other Resources',
            items: [
              {
                label: 'CashTokens.org',
                href: 'https://cashtokens.org/',
              },
              {
                label: 'Why Bitcoin Cash?',
                href: 'https://whybitcoincash.com/',
              },
              {
                label: 'BCH.info',
                href: 'https://bch.info/',
              },
              {
                label: 'bitcoincash.org',
                href: 'https://bitcoincash.org/',
              },
            ],
          },
        ],
        copyright: `🄯 ${new Date().getFullYear()} OpenTokenRegistry contributors, released in the public domain. <br/><a rel="license"
        href="https://creativecommons.org/publicdomain/zero/1.0/">
       <img src="https://licensebuttons.net/p/zero/1.0/80x15.png" style="border-style: none;" alt="CC0" />
     </a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
