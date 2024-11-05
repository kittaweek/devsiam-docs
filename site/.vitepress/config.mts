import { defineConfig } from 'vitepress'
import Cookies from "js-cookie";
const user_email=Cookies.get('user_email')


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Devsiam Docs",
  description: "Easy docs for me.",
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
          collapsed: false,
          items: [
            { text: "Create Cloud SQL", link: "/gcp/create-cloudsql/" },
            {
              text: "Create Artifact registry",
              link: "/gcp/create-artifact-registry/",
            },
            { text: "Create Cloud Run", link: "/gcp/create-cloud-run/" },
          ],
        },
      ],
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
