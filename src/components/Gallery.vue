<template>
  <div>
    <div v-for="image in imageDisplay">
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
</style>