<template>
  <div class="home">
    <Newsfeed/>
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

export default {
  name: "home",
  components: {
    Newsfeed,
    Gallery,
    Weather
  },
  methods: {
    getWeather() {
      if (!this.$store.state.weather) {
        const x = navigator.geolocation.getCurrentPosition(async location => {
          const { latitude, longitude } = location.coords;
          let weather = await call.fetchWeather(latitude, longitude);
          this.$store.dispatch("setWeather", weather);
        });
      }
    },
    async getPhotos() {
      if (!this.$store.state.photos.length) {
        let photos = await call.fetchRandomPhotos();
        this.$store.dispatch("setPhotos", photos);
      }
    },
    async getNews() {
      if (!this.$store.state.news) {
        let news = await call.fetchNews();
        this.$store.dispatch("setNews", news);
      }
    }
  },
  mounted() {
    this.getWeather();
    this.getPhotos();
    this.getNews();
  }
};
</script>
