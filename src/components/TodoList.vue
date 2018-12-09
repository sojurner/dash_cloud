<template>
  <Modal v-if="showModal"/>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "todolist",
  components: { Modal },
  data() {
    return {
      showModal: false
    };
  },
  mounted() {
    this.$root.$on("openModal", () => {
      this.showModal = true;
    });

    this.$root.$on("closeModal", () => {
      this.showModal = false;
    });
  }
};
</script>

<style scoped>
</style>