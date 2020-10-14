<template>
  <v-layout row wrap align-center>
    <v-spacer></v-spacer>
    <v-flex>
      <v-btn icon x-large @click="loginFB">
        <v-icon x-large>mdi-facebook</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  layout: "login",
  methods: {
    async loginFB() {
      await this.$auth.loginWith("facebook");
    },
    async logoutFB() {
      await this.$auth.logout("facebook");
    },
  },
};
</script>


<style scoped>
</style>
