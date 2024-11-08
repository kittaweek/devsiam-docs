//@ts-nocheck
import DefaultTheme from "vitepress/theme";
import { Tab, Tabs } from 'vue3-tabs-component'
import Layout from "./components/Layout.vue";
import LoginButton from "./components/LoginButton.vue";
import LogoutButton from "./components/LogoutButton.vue";
// Custom Theme Entrypoint for Vite, somehow we must ignore the default import
// import CSS after DefaultTheme otherwise everything must be overridden
import '@red-asuka/vitepress-plugin-tabs/dist/style.css'

const Theme = {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }: { app: any }) {
    app.component('Tab', Tab)
    app.component('Tabs', Tabs),``
    app.component("LoginButton", LoginButton);
    app.component("LogoutButton", LogoutButton);
  },
};

export default Theme;