<template>
  <main>
    <Newsfeed/>
    <Weather/>
  </main>
</template>

    <script>
import Newsfeed from "@/components/Newsfeed.vue";
import Weather from "@/components/Weather.vue";

export default {
  name: "overview",
  components: {
    Newsfeed,
    Weather
  }
};
</script>

<style scoped>
main {
}
</style>