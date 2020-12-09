<template>
  <div>
<!--    <div v-if="this.$auth.user.id == profile.id">-->
<!--    <div v-if="$attrs.profile.id == user.id">-->
<!--      <Request/>-->
<!--    </div>-->
    <h1>Friends</h1>
    <div>
      <v-row
        v-for="f in JSON.parse($route.query.profile)['friends']"
      >
        <v-col class="pa-2">
         <v-card style="ma-5" class="pa-2">
            <v-card-text>   {{ f }} </v-card-text>
           <v-card-actions>
             <v-btn>Send request to {{f.name}}  </v-btn>
           </v-card-actions>
         </v-card>
        </v-col>
      </v-row>
    </div>
    <v-spacer></v-spacer>
    <v-list v-for="friend in friends"
            color="rgba(0,0,0,0.2)"
            :key="friend.id"
            xl="2"
            lg="3"
            md="6"
            sm="6"
            xs="12"
    >
      <v-list-item>
        <v-card-title primary-title>
          {{friend.name }}
          <v-list-item>
            <NuxtLink :to="`/users/${friend.id}`">
              {{ friend.name }}
            </NuxtLink>
          </v-list-item>

        </v-card-title>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import Requests from "~/components/Request";
export default {
  name: "friends",
  mounted() {
    console.log("profile: ",JSON.parse(this.$route.query.profile));
    // return { friends: this.$route.query.profile.friends };
  },
  data() {
    return {
      // TODO friends is somehow undefined...
      friends: this.$route.query.profile.friends,
      profile: this.$route.query.profile.id,
    };
  },
  components: {Request}
}
</script>

<style scoped>
</style>
