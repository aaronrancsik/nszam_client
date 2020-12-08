<template>
  <div>
    <v-autocomplete
      color="white"
      v-model="user"
      :items="users"
      dense
      filled
      label="Search Users"
    ></v-autocomplete>
    <v-row dense v-if="user">
      <v-card sm="6">
        <v-card-title primary-title>
          <v-icon>mdi-account</v-icon> {{ user }}
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
    return { users: data.map((u) => u.name) };
  },
  data() {
    return {
      user: null,
    };
  },
};
</script>

<style scoped>
</style>
