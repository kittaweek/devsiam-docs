import { defineConfig } from 'vitepress'
import tabsPlugin from '@red-asuka/vitepress-plugin-tabs'
import Cookies from "js-cookie";
const user_email=Cookies.get('user_email')


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Devsiam Docs",
  description: "Easy docs for me.",
  markdown: {
    config: (md) => {
      tabsPlugin(md)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: "Released under the MIT License.",
      copyright:
        'Kittawee Kongpan | © 2023-present | Powered by <a href="https://vitepress.dev" target="_blank">VitePress</a>',
    },
    search: {
      provider: 'local'
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "GCP", link: "/gcp" },
      { text: "PHP", link: "/php" },
      { text: "Python", link: "/python" },
      { text: "VueJS", link: "/vuejs" },
      { text: "NestJs", link: "/nestjs" },
      { text: "Database", link: "/database" },
      { text: "Operation", link: "/operation" },
      {
        text: user_email,
        items: [
          { text: 'Sign out', link: '/signout' },
        ]
      }

    ],
    sidebar: {
      "/gcp/": [
        {
          text: "GCP",
          collapsed: true,
          items: [
            { text: "Create Cloud SQL", link: "/gcp/create-cloudsql/" },
            {
              text: "Create Artifact registry",
              link: "/gcp/create-artifact-registry/",
            },
            { text: "Create Cloud Run", link: "/gcp/create-cloud-run/" },
            { text: "Cloud Build", items: [
              { text: "Create Cloud Build", link: "/gcp/cloud-build/create-cloud-build/" },
              { text: "Example file", link: "/gcp/cloud-build/example-file/" },
            ] },
          ],
        },
      ],
      "/php/":[
        {
          text: "PHP",
          collapsed: true,
          items: [
            { text: "Laravel", 
              collapsed: true,
              items: [
                { text: "Overview", link: "/php/laravel/" },
              ]
             },
          ]
        }
      ],
      "/database/": [
        {
          text: "Database",
          items: [
            { text: "MySQL", link: "/database/mysql/" },
            // { text: "PostgreSQL", link: "/database/postgresql/" },
            // { text: "MongoDB", link: "/database/mongodb/" },
          ],
        },
      ],
      "/operation/": [
        {
          text: "Operation",
          items: [
            // { text: "Command Line Interface", link: "/operation/cli/" },
            // { text: "Git", link: "/operation/git/" },
            // { text: "Version Control", link: "/operation/version-control/" },
            { text: "Shared Secret", link: "/operation/shared-secret/" },
          ],
        },
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/kittaweek" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/kittawee-kongpan-360887249/",
      },
      // { icon: 'facebook', link: 'https://www.facebook.com/P0sTMaN' },
      // { icon: 'instagram', link: 'https://www.instagram.com/p0st_man/' },
    ],
  },
});
