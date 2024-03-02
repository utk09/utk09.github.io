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
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: "weekly",
          priority: 0.9,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/tutorials",
          path: "tutorials",
        },
        blog: {
          routeBasePath: "/blogs",
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
      navbar: {
        title: "UT",
        logo: {
          alt: "Utkarsh Tiwari (UT) Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorials",
          },
          { to: "/blogs", label: "Blog", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About",
            items: [
              {
                label: "Tutorials",
                to: "/tutorials",
              },
              {
                label: "Blog",
                to: "/blogs",
              },
              {
                label: "Resume",
                to: "/resume",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/utkarsh09/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/utk0909",
              },
              {
                label: "GitHub",
                href: "https://github.com/utk09",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Utkarsh Tiwari (UT | utk09). Built with &hearts; using Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
