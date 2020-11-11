<template>
  <div>
    <v-row>
      <v-col md="6">
        <h1>{{ $auth.user.name }}</h1>
               <h3>
                 {{ profile.images.length }} posts
                 -
                  <v-btn to="/friends" color="rgba(0,0,0,0.2)">
                    {{"profile.friends.length"}}
                  </v-btn>
               </h3>
      </v-col>
    </v-row>
    <h4>{{ profile.bio }}</h4>
    <div>
      <post-list-view :images="profile.images"></post-list-view>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`/profile`);
    console.log(data)
    return { profile: data };
  },
};
</script>

<style scoped>
/*.container {*/
/*  !*margin: 0 auto;*!*/
/*  !*min-height: 100vh;*!*/
/*  !*display: flex;*!*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  text-align: center;*/
/*}*/
/*.userInfo {*/
/*  !*flex-direction: column;*!*/
/*}*/
/*.row {*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*}*/
</style>
