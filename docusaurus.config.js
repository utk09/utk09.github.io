// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Utkarsh Tiwari (UT | utk09)",
  tagline: "FRONTEND DEVELOPER | DATA ENGINEER | ASPIRING FULLSTACK DEVELOPER",
  favicon: "img/favicon.ico?v=4",
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
        gtag: {
          trackingID: ["G-67H9CP0Z8Q", "G-H98RBFSDQ5"],
        },
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/tutorials",
          path: "tutorials",
          editUrl: ({ docPath }) => {
            return `https://github.com/utk09/utk09.github.io/edit/main/tutorials/${docPath}`;
          },
        },
        blog: {
          routeBasePath: "/blogs",
          showReadingTime: true,
          editUrl: ({ blogDirPath, blogPath }) => {
            return `https://github.com/utk09/utk09.github.io/edit/main/${blogDirPath}/${blogPath}`;
          },
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
      metadata: [
        {
          name: "description",
          content:
            "Frontend Developer | Blogger | Major League Hacking (MLH) Coach | Data Engineer | YouTuber @TuplesEdu | MLH Technical Program Associate | Software Engineer",
        },
        {
          name: "keywords",
          content:
            "utkarsh tiwari, UT, utk09, TuplesEdu, Major League Hacking, MLH, youtuber, frontend development, data engineering, software engineering, tech blogging, technology, lifelong learning",
        },
        {
          name: "author",
          content: "Utkarsh Tiwari (UT | utk09)",
        },
        {
          name: "robots",
          content: "index, follow",
        },
      ],
      colorMode: {
        defaultMode: "dark",
      },
      image: "img/logo.png?v=4",
      navbar: {
        title: "UT",
        logo: {
          alt: "Utkarsh Tiwari (UT) Logo",
          src: "img/logo.png?v=4",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorials",
          },
          { to: "/blogs", label: "Blogs", position: "left" },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "About",
            items: [
              {
                label: "Tutorials",
                to: "/tutorials",
              },
              {
                label: "Blogs",
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
          {
            title: "External",
            items: [
              {
                label: "Dev.to",
                href: "https://dev.to/utk09",
              },
              {
                label: "Medium",
                href: "https://medium.com/@utk09",
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
