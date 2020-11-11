<template>
  <div>
    <v-row>
        <h1>{{ user.name }}</h1>

      <v-spacer></v-spacer>

<!--TODO button title: friend request status-->

        <div v-if="/*!this.user.friends.contains({id: this.user.id}) */ true">
          <v-btn @click="addFriend()" color="rgba(0,0,0,0.2)">
            Add Friend
          </v-btn>
        </div>

    </v-row >
<!--     <div>-->
<!--         {{ "user.images.length" }} posts-->
<!--         - -->
<!--          <v-btn to="/friends" color="rgba(0,0,0,0.1)">-->
<!--            {{"user.friends.length"}}-->
<!--          </v-btn>-->
<!--       </div>-->

<!--    <h4>{{ user.bio }}</h4>-->
<!--    <div>-->
<!--      <post-list-view :images="user.images"></post-list-view>-->
<!--    </div>-->
  </div>
</template>

<!--TODO get user id (substring from from url??), make axios link dynamic-->

<script>
export default {
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`/users/`+ params.id  );
    console.log({data});
    return { user: data };
  },
  data() {
    return {
      route: this.$route,
      // id: this.route.toString().substr(this.route.lastIndexOf("/")),
    };
  },
  methods:{
    addFriend(){
      console.log("add friend button clicked")
    }
  }
};
</script>

<style scoped>

</style>
