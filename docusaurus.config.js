// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Utkarsh Tiwari (UT | utk09)",
  tagline: "FRONTEND DEVELOPER | DATA ENGINEER | ASPIRING FULLSTACK DEVELOPER",
  favicon: "img/favicon.ico",
  url: "https://utk09.com",
  baseUrl: "/",

  organizationName: "utk09",
  projectName: "utk09.github.io",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: "/blog",
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    async function tailwindCssPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.png",
      // navbar: {
      //   title: "UT",
      //   logo: {
      //     alt: "Utkarsh Tiwari (UT) Logo",
      //     src: "img/logo.png",
      //   },
      //   items: [
      //     {
      //       type: "docSidebar",
      //       sidebarId: "aboutSidebar",
      //       position: "left",
      //       label: "About",
      //     },
      //     { to: "/blog", label: "Blog", position: "left" },
      //     {
      //       href: "https://github.com/utk09",
      //       label: "GitHub",
      //       position: "right",
      //     },
      //   ],
      // },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/utkarsh09/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/utk0909",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Utkarsh Tiwari (UT | utk09). Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
