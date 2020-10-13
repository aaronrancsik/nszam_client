<template>
  <div>
    <v-row>
      <v-col>
        <h1>{{ $auth.user.name }}</h1>
        <h3>{{ profile.posts.length }} posts - 4 followers</h3>
      </v-col>
      <v-col> </v-col>
      <v-col>
        <div>
          <v-btn @click="logoutFB">LOGOUT</v-btn>
        </div>
      </v-col>
    </v-row>
    <h4>{{ profile.bio }}</h4>
    <div>
      <post-list-view :posts="profile.posts"></post-list-view>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`/profile`);
    return { profile: data };
  },
  methods: {
    async logoutFB() {
      await this.$auth.logout("facebook");
    },
  },
};
</script>

<style scoped>
/*.container {*/
/*  !*margin: 0 auto;*!*/
/*  !*min-height: 100vh;*!*/
/*  !*display: flex;*!*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  text-align: center;*/
/*}*/
/*.userInfo {*/
/*  !*flex-direction: column;*!*/
/*}*/
/*.row {*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*}*/
</style>
