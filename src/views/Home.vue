<template>
  <div class="home">
    <div class="hamburger-wrapper" :class="{'menu-active': displayMenu}" @click="toggleMenu">
      <div class="hamburger"/>
    </div>
    <Overview v-if="activeTab==='Overview'"/>
    <Gallery/>
    <HomeNav :displayMenu="displayMenu"/>
    <footer>Scroll --></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Gallery from "@/components/Gallery.vue";
import Overview from "./Overview.vue";
import HomeNav from "@/components/HomeNav.vue";
import * as call from "../utils/apiCalls";
import { mapActions } from "vuex";

export default {
  name: "home",
  data() {
    return {
      displayMenu: false
    };
  },
  components: {
    Gallery,
    HomeNav,
    Overview
  },
  methods: {
    //mapping methods to actions
    ...mapActions({
      getWeather: "setWeather",
      getPhotos: "setPhotos",
      getNews: "setNews"
    }),
    toggleMenu() {
      this.displayMenu = !this.displayMenu;
    }
  },
  mounted() {
    this.getWeather();
    this.getPhotos();
    this.getNews();
    this.$root.$on("closeMenu", () => {
      this.displayMenu = false;
    });
  },
  computed: {
    activeTab() {
      return this.$store.state.activeTab;
    }
  }
};
</script>

<style scoped>
.hamburger-wrapper {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  cursor: pointer;
  z-index: 11;
}

.hamburger {
  width: 40px;
  height: 4px;
  background: rgb(208, 208, 208);
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.hamburger::before,
.hamburger::after {
  content: "";
  position: absolute;
  width: 40px;
  left: 10px;
  height: 4px;
  background: rgb(208, 208, 208);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}

.hamburger:before {
  top: -13px;
}

.hamburger:after {
  top: 13px;
}

.hamburger:hover,
.hamburger:hover::before,
.hamburger:hover::after {
  background: rgb(244, 244, 244);
}

.hamburger-wrapper.menu-active .hamburger {
  background: rgba(0, 0, 0, 0);
  box-shadow: 0 2px 5pc rgba(0, 0, 0, 0);
}

.hamburger-wrapper.menu-active .hamburger::before {
  top: 0;
  transform: rotate(45deg);
}

.hamburger-wrapper.menu-active .hamburger::after {
  top: 0;
  transform: rotate(135deg);
}

footer {
  position: absolute;
  font-size: 1.1rem;
  letter-spacing: 2px;
  bottom: 0;
  color: white;
  background-color: rgb(19, 43, 35);
  left: 0;
  right: 0;
}
</style>
