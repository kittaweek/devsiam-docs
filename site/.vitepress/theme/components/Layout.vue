<script setup>
import DefaultTheme from "vitepress/theme";
import Cookies from "js-cookie";


const { Layout } = DefaultTheme;
</script>

<template>
  <div class="main-content">
    <div v-if="user?.email=='kittawee9469@gmail.com'">
      <Layout>
        <Content>
        </Content>
      </Layout>
    </div>
    <div v-else>
      <p align="center">
        <LoginButton
          v-if="auth0client"
          :client="auth0client"
          @login-complete="getUser()"
        />
      </p>
    </div>
  </div>
</template>

<script>
import auth from "../../auth";
export default {
  data() {
    return {
      auth0client: null,
      user: null,
    };
  },
  async mounted() {
    this.auth0client = await auth.createClient();
    this.getUser();
  },
  methods: {
    async login() {
      const loginWithPopup = await auth.loginWithPopup(this.auth0client);
    },
    async getUser() {
      this.user = await this.auth0client.getUser();
      this.checkUser()
    },
    async checkUser(){
      if (await Cookies.get('is_logout')=='true'){
        await auth.logout(this.auth0client);
        await Cookies.remove('is_logout')
      }
    }
  },
};
</script>