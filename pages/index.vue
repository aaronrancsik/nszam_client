<template>
  <post-list-view :images="images"></post-list-view>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`/posts`);
    console.log(data)
    return { images: data };
  }
};
</script>
