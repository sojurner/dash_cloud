<template>
  <div class="img-container">
    <div class="img-wrapper" v-for="image in imageDisplay">
      <img :src="image" alt="unsplash images">
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery",
  computed: {
    imageDisplay() {
      return this.$store.state.photos;
    }
  }
};
</script>

<style scoped>
.img-container {
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vw);
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  display: flex;
}

.img-wrapper {
  height: 86vh;
  width: 100vw;
  flex-direction: row;
  flex-wrap: wrap;
  scroll-snap-align: start;
  min-width: 100vw;
}
img {
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.5;
  filter: grayscale(10%);
}
</style>