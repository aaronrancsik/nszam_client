<template>
  <div>
    <div class="bg"></div>
    <v-app>
      <v-container fill-height>
        <v-app-bar app dense>
          <v-toolbar-title>
            <v-btn to="/">Imagehub</v-btn>
          </v-toolbar-title>

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
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item to="/">
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
              <v-list-item to="/login">
                <v-list-item-icon>
                  <v-icon>mdi-login</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Login</v-list-item-title>
              </v-list-item>
              <v-list-item to="/profile">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Account</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
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
};
</script>
<style scoped>
.bg {
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 0;
  background: linear-gradient(
    -35deg,
    rgb(250, 79, 0) 0%,
    rgb(84, 58, 180) 100%
  );
}
</style>
