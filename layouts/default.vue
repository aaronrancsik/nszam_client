<template>
  <div>
    <v-app>
      <v-container >
        <v-app-bar app dense>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          <v-toolbar-title>
            <v-btn to="/">Imagehub</v-btn>
          </v-toolbar-title>
          <div v-if="$auth.loggedIn" class="profileButton">
            <v-btn to="/profile">Profile</v-btn>
          </div>
        </v-app-bar>
        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
        >
          <v-list
            nav
            dense
          >
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
    data: () => ({
      drawer: false,
      group: null,
    }),
  }
</script>
<style>
</style>
