<template>
  <div>
    <NuxtLogo />
    Register Content
    {{ count }}
    <br/>
    {{ valt }}
    <button @click="inc">asdsd</button>
    <button @click="inc2">asdsd</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        valt:0
      }
    },
    fetch(){

    },
    async asyncData(){
    }
    ,
    methods:{
      inc(){
        this.$store.commit('increment')
      },
      inc2(){
        this.valt++
      }

    },
    computed:{
      count(){
        return this.$store.state.counter
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>