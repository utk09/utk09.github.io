import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blogs',
    component: ComponentCreator('/blogs', '843'),
    exact: true
  },
  {
    path: '/blogs/archive',
    component: ComponentCreator('/blogs/archive', '723'),
    exact: true
  },
  {
    path: '/blogs/electoral-bonds-analysis',
    component: ComponentCreator('/blogs/electoral-bonds-analysis', 'e9f'),
    exact: true
  },
  {
    path: '/blogs/resolve-vulnerabilities-in-frontend-apps',
    component: ComponentCreator('/blogs/resolve-vulnerabilities-in-frontend-apps', '771'),
    exact: true
  },
  {
    path: '/blogs/tags',
    component: ComponentCreator('/blogs/tags', '73b'),
    exact: true
  },
  {
    path: '/blogs/tags/angular',
    component: ComponentCreator('/blogs/tags/angular', '54f'),
    exact: true
  },
  {
    path: '/blogs/tags/data-analysis',
    component: ComponentCreator('/blogs/tags/data-analysis', 'ee8'),
    exact: true
  },
  {
    path: '/blogs/tags/data-visualization',
    component: ComponentCreator('/blogs/tags/data-visualization', 'e7b'),
    exact: true
  },
  {
    path: '/blogs/tags/electoral-bonds',
    component: ComponentCreator('/blogs/tags/electoral-bonds', '9e2'),
    exact: true
  },
  {
    path: '/blogs/tags/front-end',
    component: ComponentCreator('/blogs/tags/front-end', '100'),
    exact: true
  },
  {
    path: '/blogs/tags/libraries',
    component: ComponentCreator('/blogs/tags/libraries', '55d'),
    exact: true
  },
  {
    path: '/blogs/tags/npm',
    component: ComponentCreator('/blogs/tags/npm', '053'),
    exact: true
  },
  {
    path: '/blogs/tags/package-json',
    component: ComponentCreator('/blogs/tags/package-json', 'd52'),
    exact: true
  },
  {
    path: '/blogs/tags/python',
    component: ComponentCreator('/blogs/tags/python', '234'),
    exact: true
  },
  {
    path: '/blogs/tags/react',
    component: ComponentCreator('/blogs/tags/react', '8a6'),
    exact: true
  },
  {
    path: '/blogs/tags/security',
    component: ComponentCreator('/blogs/tags/security', '8d7'),
    exact: true
  },
  {
    path: '/blogs/tags/streamlit',
    component: ComponentCreator('/blogs/tags/streamlit', '550'),
    exact: true
  },
  {
    path: '/blogs/tags/vue',
    component: ComponentCreator('/blogs/tags/vue', 'da7'),
    exact: true
  },
  {
    path: '/blogs/tags/vulnerabilities',
    component: ComponentCreator('/blogs/tags/vulnerabilities', '9af'),
    exact: true
  },
  {
    path: '/blogs/tags/yarn',
    component: ComponentCreator('/blogs/tags/yarn', '8f4'),
    exact: true
  },
  {
    path: '/resume',
    component: ComponentCreator('/resume', 'be6'),
    exact: true
  },
  {
    path: '/tutorials',
    component: ComponentCreator('/tutorials', '94d'),
    routes: [
      {
        path: '/tutorials',
        component: ComponentCreator('/tutorials', '6de'),
        routes: [
          {
            path: '/tutorials/tags',
            component: ComponentCreator('/tutorials/tags', '83b'),
            exact: true
          },
          {
            path: '/tutorials/tags/data-cleaning',
            component: ComponentCreator('/tutorials/tags/data-cleaning', '659'),
            exact: true
          },
          {
            path: '/tutorials/tags/data-collection',
            component: ComponentCreator('/tutorials/tags/data-collection', '99e'),
            exact: true
          },
          {
            path: '/tutorials/tags/data-science',
            component: ComponentCreator('/tutorials/tags/data-science', '1b0'),
            exact: true
          },
          {
            path: '/tutorials/tags/python',
            component: ComponentCreator('/tutorials/tags/python', '78c'),
            exact: true
          },
          {
            path: '/tutorials/tags/web-scraping',
            component: ComponentCreator('/tutorials/tags/web-scraping', 'aff'),
            exact: true
          },
          {
            path: '/tutorials',
            component: ComponentCreator('/tutorials', '364'),
            routes: [
              {
                path: '/tutorials',
                component: ComponentCreator('/tutorials', '935'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorials/data-science/data-science-part-1-getting-the-data',
                component: ComponentCreator('/tutorials/data-science/data-science-part-1-getting-the-data', 'fb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '797'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
