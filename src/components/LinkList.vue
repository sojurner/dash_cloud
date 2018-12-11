<template>
  <div class="link-list">
    <h1>
      <i class="fas fa-link"></i>
      Links
    </h1>

    <section v-for="link in linkList">
      <div v-if="linkList.length" class="link-card">
        <h3 contenteditable="true">{{link.title}}</h3>
        <span>{{link.date}}</span>
        <p @click="openLink(link.link)">{{link.link}}</p>
        <i class="fas fa-times" @click="removeLink(link.id)"></i>
      </div>
    </section>
    <h2 v-if="!linkList.length">No Links</h2>
  </div>
</template>

<script>
export default {
  name: "linklist",
  methods: {
    openLink(link) {
      const newTab = window.open(link, "_blank");
      newTab.focus();
    },
    removeLink(id) {
      this.$store.dispatch("removeLink", id);
    }
  },
  computed: {
    linkList() {
      return this.$store.state.links;
    }
  }
};
</script>

<style scoped>
.link-list {
  border: 2px solid black;
  border-radius: 0.5rem;
  background-color: rgb(58, 85, 107);
  padding: 1rem;
}

.link-list section:hover {
  background-color: rgb(50, 75, 97);
}

.link-list section {
  color: rgb(151, 189, 189);
  border-radius: 0.5rem;
  margin: 1rem;
  background-color: rgb(53, 80, 102);
  border: dashed 1px rgb(18, 127, 190);
  height: 9rem;
}

.link-card {
  position: relative;
}

.link-list h1 {
  color: rgb(159, 180, 194);
}

.link-list section h3 {
  color: rgb(196, 217, 235);
  position: absolute;
  font-size: 1.5rem;
  left: 1rem;
  top: 0.5rem;
}

.link-list section p {
  position: absolute;
  text-decoration: underline;
  left: 0;
  right: 0;
  font-size: 1.5rem;
  top: 3rem;
  cursor: pointer;
}

.link-list section p:hover {
  color: rgb(82, 184, 150);
}

.link-card section span {
  position: absolute;
  left: 0;
  top: 0;
}

.link-list section h2 {
  color: rgb(170, 114, 114);
  font-size: 1.2rem;
  font-weight: lighter;
}

.link-list section i {
  color: rgba(78, 109, 150, 0.87);
  position: absolute;
  right: 0;
  margin-top: 0.2rem;
  margin-right: 0.5rem;
  cursor: pointer;
}

.link-list section i:hover {
  color: rgb(95, 130, 177);
}
</style>