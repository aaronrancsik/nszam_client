<template>
  <div class="container">
  <h1>Profile</h1>
  <div v-if="$auth.loggedIn">
    <v-card-text>{{$auth.user.name}}</v-card-text>
      <div class="row">
        <v-card-text>{{ profile.sumPosts }} posts</v-card-text>
        <v-card-text>{{ profile.followers }} followers</v-card-text>
      </div>
    <div>
      <v-btn @click="logoutFB">LOGOUT</v-btn>
    </div>
    <div>
      <post-list-view :posts="profile.posts"></post-list-view>
    </div>
  </div>
</div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    const { data } = await $axios.get(`/profile`)
    return { profile: data }
  },
  methods: {
    async logoutFB(){
      await this.$auth.logout('facebook')
    }
  }
}
</script>

<style scoped>
.container {
  /*margin: 0 auto;*/
  /*min-height: 100vh;*/
  /*display: flex;*/
  justify-content: center;
  align-items: center;
  text-align: center;
}
.userInfo {
  /*flex-direction: column;*/
}
.row {
  display: flex;
  flex-direction: row;
}
</style>
