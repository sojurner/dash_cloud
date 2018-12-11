<template>
  <div class="home">
    <Dashboard/>
    <Gallery/>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue";
import Gallery from "@/components/Gallery.vue";
import { fetchRandomPhotos } from "../utils/apiCalls";

export default {
  name: "home",
  components: {
    Dashboard,
    Gallery
  },
  async mounted() {
    let photos = await fetchRandomPhotos();
    this.$store.dispatch("setPhotos", photos);
  }
};
</script>
