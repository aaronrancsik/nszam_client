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
      <v-btn text @click="snackbar = false"> Close </v-btn>
    </v-snackbar>
    <v-snackbar color="error" v-model="snackbar2" timeout="2000">
      <div>Upload failed</div>
      <v-btn text @click="snackbar2 = false"> Close </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  methods: {
    dis() {
      return this.img == null;
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
            this.img = null
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
