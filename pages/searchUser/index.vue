<template>
  <v-card>
    <v-autocomplete
      v-model="value"
      :items="users"
      dense
      filled
      label="Search Users"
    ></v-autocomplete>
  </v-card>
</template>

<script>
export default {
  async asyncData({$axios}) {
    const {data} = await $axios.get(`/users`)
    console.log("users", {data})
    return {users: data.map((u) => u.name)}
  }
}
</script>

<style scoped>

</style>
