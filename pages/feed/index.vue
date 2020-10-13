<template>
  <div>
    <post-list-view :posts="posts"></post-list-view>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    const { data } = await $axios.get(`/posts`)
    return { posts: data }
  }
};
</script>

<style lang="scss" scoped>
</style>
