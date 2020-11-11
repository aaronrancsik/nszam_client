<template>
  <div>
  <div v-if="this.$auth.user.id == user.id">
    <Requests/>
  </div>
  <h1>Friends</h1>
    <v-spacer></v-spacer>
  <v-list v-for="user in [{id:1, name:'user1'}, {id:2, name:'user2'}]" color="rgba(0,0,0,0.2)">
    <v-list-item>
        <v-card-title primary-title>

          <v-list-item>
            <NuxtLink :to="`/users/${user.id}`">
              {{ user.name }}
            </NuxtLink>
          </v-list-item>

        </v-card-title>
    </v-list-item>
  </v-list>
  </div>
</template>
<!--TODO get user id!!!-->
<script>
import Requests from "~/components/Requests";
export default {
name: "friends",
  async asyncData({ $axios }) {
    // const { data } = await $axios.get(`/users/${user.id}/friends`);
    // console.log("users", { data });
    // return { friends: data};
  },
  data() {
  return {
    user: {id: 4, name: "kamus kami"}
  };
  },
  components: {Requests}
}
</script>

<style scoped>
</style>
