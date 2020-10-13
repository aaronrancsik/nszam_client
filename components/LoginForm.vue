<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary" dense>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <div v-if="!$auth.loggedIn">
          <v-btn @click="loginFB">LOGIN</v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    methods: {
      async loginFB(){
        await this.$auth.loginWith('facebook')
      },
    }
}
</script>

<style lang="scss" scoped>

</style>
