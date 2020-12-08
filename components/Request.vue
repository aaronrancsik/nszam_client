<template>
  <div>
    <h1>Friend Requests</h1>
    <v-list v-for="request in [{id:1, requester:'user1'}, {id:2, requester:'user2'}]" color="rgba(0,0,0,0.2)">
      <v-list-item>
<!--        TODO link to user-->
        <NuxtLink :to="`/`">
          {{ request.requester }}
        </NuxtLink>
        <v-spacer></v-spacer>
        <v-btn @click="accept">Accept</v-btn>
        <v-btn @click="decline">Decline</v-btn>
      </v-list-item>
    </v-list>
  </div>
</template>

<!--TODO pass user id from /friends-->

<script>
export default {
  name: "Requests",
  // async asyncData({ $axios }) {
  //   const { data } = await $axios.get(`/users/${user.id}/requesters`);
  //   console.log(data)
  //   return { requesters: data };
  // },
  methods: {
    accept() {
      console.log("accept")
    },
    decline() {
      console.log("decline")
    },
  }
}
</script>

<style scoped>
</style>
