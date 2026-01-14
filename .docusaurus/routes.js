import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blogs',
    component: ComponentCreator('/blogs', 'bf3'),
    exact: true
  },
  {
    path: '/blogs/archive',
    component: ComponentCreator('/blogs/archive', '29e'),
    exact: true
  },
  {
    path: '/blogs/authors',
    component: ComponentCreator('/blogs/authors', '5ae'),
    exact: true
  },
  {
    path: '/blogs/electoral-bonds-analysis',
    component: ComponentCreator('/blogs/electoral-bonds-analysis', 'ca8'),
    exact: true
  },
  {
    path: '/blogs/resolve-vulnerabilities-in-frontend-apps',
    component: ComponentCreator('/blogs/resolve-vulnerabilities-in-frontend-apps', '665'),
    exact: true
  },
  {
    path: '/blogs/tags',
    component: ComponentCreator('/blogs/tags', 'cc4'),
    exact: true
  },
  {
    path: '/blogs/tags/angular',
    component: ComponentCreator('/blogs/tags/angular', '304'),
    exact: true
  },
  {
    path: '/blogs/tags/data-analysis',
    component: ComponentCreator('/blogs/tags/data-analysis', 'b00'),
    exact: true
  },
  {
    path: '/blogs/tags/data-visualization',
    component: ComponentCreator('/blogs/tags/data-visualization', '661'),
    exact: true
  },
  {
    path: '/blogs/tags/electoral-bonds',
    component: ComponentCreator('/blogs/tags/electoral-bonds', 'c30'),
    exact: true
  },
  {
    path: '/blogs/tags/front-end',
    component: ComponentCreator('/blogs/tags/front-end', '848'),
    exact: true
  },
  {
    path: '/blogs/tags/libraries',
    component: ComponentCreator('/blogs/tags/libraries', 'ba1'),
    exact: true
  },
  {
    path: '/blogs/tags/npm',
    component: ComponentCreator('/blogs/tags/npm', 'bab'),
    exact: true
  },
  {
    path: '/blogs/tags/package-json',
    component: ComponentCreator('/blogs/tags/package-json', 'fd2'),
    exact: true
  },
  {
    path: '/blogs/tags/python',
    component: ComponentCreator('/blogs/tags/python', '85d'),
    exact: true
  },
  {
    path: '/blogs/tags/react',
    component: ComponentCreator('/blogs/tags/react', 'a36'),
    exact: true
  },
  {
    path: '/blogs/tags/security',
    component: ComponentCreator('/blogs/tags/security', '685'),
    exact: true
  },
  {
    path: '/blogs/tags/streamlit',
    component: ComponentCreator('/blogs/tags/streamlit', '64a'),
    exact: true
  },
  {
    path: '/blogs/tags/vue',
    component: ComponentCreator('/blogs/tags/vue', 'be8'),
    exact: true
  },
  {
    path: '/blogs/tags/vulnerabilities',
    component: ComponentCreator('/blogs/tags/vulnerabilities', '809'),
    exact: true
  },
  {
    path: '/blogs/tags/yarn',
    component: ComponentCreator('/blogs/tags/yarn', '0aa'),
    exact: true
  },
  {
    path: '/resume',
    component: ComponentCreator('/resume', 'fe3'),
    exact: true
  },
  {
    path: '/tutorials',
    component: ComponentCreator('/tutorials', '1c1'),
    routes: [
      {
        path: '/tutorials',
        component: ComponentCreator('/tutorials', 'c0c'),
        routes: [
          {
            path: '/tutorials/tags',
            component: ComponentCreator('/tutorials/tags', '778'),
            exact: true
          },
          {
            path: '/tutorials/tags/data-cleaning',
            component: ComponentCreator('/tutorials/tags/data-cleaning', 'fd5'),
            exact: true
          },
          {
            path: '/tutorials/tags/data-collection',
            component: ComponentCreator('/tutorials/tags/data-collection', '340'),
            exact: true
          },
          {
            path: '/tutorials/tags/data-science',
            component: ComponentCreator('/tutorials/tags/data-science', '7e5'),
            exact: true
          },
          {
            path: '/tutorials/tags/python',
            component: ComponentCreator('/tutorials/tags/python', '6d7'),
            exact: true
          },
          {
            path: '/tutorials/tags/web-scraping',
            component: ComponentCreator('/tutorials/tags/web-scraping', '21e'),
            exact: true
          },
          {
            path: '/tutorials',
            component: ComponentCreator('/tutorials', '614'),
            routes: [
              {
                path: '/tutorials',
                component: ComponentCreator('/tutorials', 'f36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorials/data-science/data-science-part-1-getting-the-data',
                component: ComponentCreator('/tutorials/data-science/data-science-part-1-getting-the-data', '9d9'),
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
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
