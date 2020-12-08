<template>
  <div>
    <v-row>
      <v-col md="6">
<!--        <h1>{{ $auth.user.name }}</h1>-->
        <h1>{{ profile.name }}</h1>
        <h3>{{ profile.posts.length }} posts
          -

<!--            <v-btn to="/friends/{{profile.id}}" :profile="profile" color="rgba(0,0,0,0.2)">-->
<!--              {{profile.friends.length}} friends-->
<!--            </v-btn>-->

            <v-btn color="rgba(0,0,0,0.2)">
              <nuxt-link :to="{ path: 'friends', query: {profile: JSON.stringify(profile)}}">{{profile.friends.length}} friends</nuxt-link>
            </v-btn>

        </h3>
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
    const { data } = await $axios.get(`/profile`);
    return { profile: data };
  },
};
</script>

<style scoped>

</style>
