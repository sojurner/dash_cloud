<template>
  <div class="news-container">
    <h2 class="news-header">News Feed</h2>
    <section class="news-card" v-for="news in newsFeed">
      <img class="news-img" :src="news.urlToImage" alt>
      <div class="news-content">
        <a class="news-title" :href="news.url">{{news.title}}</a>
        <p class="news-src">{{news.src}}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "newsfeed",
  computed: {
    //Accessing Getters
    newsFeed() {
      return this.$store.getters.newsStories;
    }
  }
};
</script>

<style scoped>
.news-container {
  position: fixed;
  top: 7rem;
  left: 1.5rem;
  width: 32rem;
  overflow-y: scroll;
  height: 40rem;
  border: 6px solid rgb(89, 112, 120);
  background-color: rgb(37, 53, 58);
  border-radius: 0.5rem;
  z-index: 1;
  opacity: 0.8;
}

.news-card {
  display: flex;
  margin-bottom: 1rem;
}

.news-content {
  text-align: start;
  margin-left: 1rem;
  align-self: center;
  padding-right: 1rem;
}

.news-header {
  color: rgb(89, 112, 120);
  font-size: 2rem;
}

.news-title {
  color: aliceblue;
  font-size: 1.1rem;
  text-decoration-line: none;
}

.news-src {
  color: rgb(158, 173, 186);
}

.news-title:hover {
  color: azure;
  text-decoration-line: underline;
}

.news-img {
  padding-left: 1rem;
  height: 8rem;
  width: 11rem;
}
</style>
