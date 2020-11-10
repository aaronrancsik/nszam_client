<template>
  <div>
    <form v-on:submit.prevent="upload">
      <v-file-input
        v-model="img"
        accept="image/*"
        label="File input"
      ></v-file-input>
      <v-btn :disabled="dis()" @click="upload" class="mr-4"> submit </v-btn>
    </form>
    <v-snackbar color="success" v-model="snackbar" timeout="2000">
      <div>Upload finished sucessfully</div>
      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" icon @click="snackbar = false"><v-icon>mdi-close</v-icon></v-btn>
      </template>
    </v-snackbar>
    <v-snackbar color="error" v-model="snackbar2" timeout="2000">
      <div>Upload failed</div>
      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" icon @click="snackbar2 = false"><v-icon>mdi-close</v-icon></v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  methods: {
    dis() {
      return this.img == null;0
    },
    upload() {
      if (this.img) {
        this.createBase64(this.img);
      }
    },
    createBase64(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
        this.$axios
          .post("/images", {
            owner: this.$auth.user.name,
            content: this.image,
          })
          .then((result) => {
            this.snackbar = true;
            this.img = null;
          })
          .catch((err) => {
            this.snackbar2 = true;
            console.log(err);
          });
      };
      reader.readAsDataURL(fileObject);
    },
  },
  data: function () {
    return {
      snackbar: false,
      snackbar2: false,
      img: null,
      image: "",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
