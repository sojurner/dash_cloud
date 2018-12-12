<template>
  <div class="home">
    <div class="hamburger-wrapper" :class="{'menu-active': displayMenu}" @click="toggleMenu">
      <div class="hamburger"/>
    </div>
    <Overview v-if="activeTab==='Overview'"/>
    <Gallery/>
    <Weather/>
  </div>
</template>

<script>
// @ is an alias to /src
import Newsfeed from "@/components/Newsfeed.vue";
import Gallery from "@/components/Gallery.vue";
import Weather from "@/components/Weather.vue";
import * as call from "../utils/apiCalls";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: {
    Newsfeed,
    Gallery,
    Weather
  },
  methods: {
    //mapping methods to actions
    ...mapActions({
      getWeather: "setWeather",
      getPhotos: "setPhotos",
      getNews: "setNews"
    })
  },
  mounted() {
    this.getWeather();
    this.getPhotos();
    this.getNews();
  }
};
</script>
