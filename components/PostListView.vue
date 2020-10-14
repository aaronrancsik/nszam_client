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
          <v-card-text>
            <v-icon color="white">mdi-at</v-icon>
            <span v-text="image.owner"></span>
          </v-card-text>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
