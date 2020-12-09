<template>
  <v-row dense>
    <v-col
      v-for="image in $attrs.images"
      :key="image.id"
      xl="2"
      lg="3"
      md="6"
      sm="6"
      xs="12"
    >
      <v-card class="ma-5" elevation="24">
        <v-img
          :src="image.content"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-row>
          <div v-if="image.authorId">
          <v-card-text>
            <v-icon color="white">mdi-at</v-icon>
            <div v-for="u in $attrs.users.filter(x => x.userId == image.authorId)">
              {{ u.name }}
            </div>
          </v-card-text>
          </div>

          <div v-if="$attrs.likes">
            <v-card-text>
            <v-icon color="white">mdi-heart</v-icon>
                <span>
                  {{$attrs.likes.filter(x => x.likedImageId == image.imageId).length}}
                </span>
          </v-card-text>
          </div>
         </v-row>

        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
</style>
