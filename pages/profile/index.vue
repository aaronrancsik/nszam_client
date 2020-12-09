<template>
  <div>
    <v-row>
      <v-col md="6">
        <h1>{{ $auth.user.name }}</h1>
        <h1>{{ profile.filter(x => x.authorId == 1).length }} posts</h1>


        <div  v-for="u in friends">
          <v-btn :to="'/friends/'+u.userId" :profile="profile" color="rgba(0,0,0,0.2)">
            {{u.name}}
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <h4>{{ profile.bio }}</h4>
    <div>
      <post-list-view :images="profile.posts"></post-list-view>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`/images`);

    const data2 = await $axios.get(`/friends/1`)
    const data3 = await $axios.get(`/likes/`)



    return { profile: data, friends: data2.data, likes: data3.data };
  },
};
</script>

<style scoped>

</style>
