<template>
  <div>
    <div class="bg"></div>
    <v-app>
      <v-container>
        <v-app-bar app dense>
          <v-toolbar-title>
            <v-btn to="/">Imagehub</v-btn>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <div v-if="$auth.loggedIn">
            <v-btn icon to="/upload">
              <v-icon>mdi-upload</v-icon>
            </v-btn>
          </div>

          <v-spacer></v-spacer>

          <div v-if="$auth.loggedIn">
            <v-btn icon to="/searchUser">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </div>

          <div v-if="$auth.loggedIn">
            <v-btn icon to="/profile">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </div>

          <div v-if="$auth.loggedIn">
            <v-btn icon @click="logoutFB">
              <v-icon>mdi-logout</v-icon>
            </v-btn>
          </div>
        </v-app-bar>
        <v-main>
          <Nuxt />
        </v-main>
      </v-container>
    </v-app>
  </div>
</template>
<script>
export default {
  middleware: ["auth"],
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    async logoutFB(ctx) {
      await this.$auth.logout("facebook");
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.bg {
  left: 0;
  top: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 0;
  background: linear-gradient(
    -35deg,
    rgba(250, 79, 0, 0.4) 0%,
    rgba(84, 58, 180, 0.4) 100%
  );
}
</style>
