<template>
  <post-list-view :likes="likes" :users="users" :images="images"></post-list-view>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`/feed/1`).then(
    ).catch((err)=>{
      console.log(err);
    });

    const data2 = await $axios.get(`/users/`).then(
    ).catch((err)=>{
      console.log(err);
    });

    const data3 = await $axios.get(`/likes/`).then(
    ).catch((err)=>{
      console.log(err);
    });


    return {  images: data, users: data2.data, likes: data3.data };

  }
};
</script>
