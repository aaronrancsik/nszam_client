<template>
  <v-row dense>
    <v-col v-for="post in $attrs.posts" :key="post.id" xl="2" lg="3" md="6" sm="12">
      <v-card class="ma-5" elevation="24">
        <v-img
          :src="post.imgUrl"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title v-text="post.title"></v-card-title>
        </v-img>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>


<!--    <v-col v-for="card in cards" :key="card.title" :cols="card.flex">-->

<!--    </v-col>-->
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
