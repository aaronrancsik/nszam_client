<template>
  <div>
    <v-autocomplete
      color="white"
      v-model="user"
      :items="users"
      item-text="name"
      dense
      filled
      label="Search Users"
      return-object
    ></v-autocomplete>
    <v-row dense v-if="user">
      <v-card sm="6" color="rgba(0,0,0,0.2)">
        <v-card-title primary-title>

            <li :key="user.userId">
              <NuxtLink :to="`/users/${user.userId}`">
                {{ user.name }}
              </NuxtLink>
            </li>

        </v-card-title>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`/users`);
    console.log("users", { data });
    return { users: data};
  },
  data() {
    return {
      user: null,
      users: this.users,
    };
  },
};
</script>

<style scoped>
</style>
