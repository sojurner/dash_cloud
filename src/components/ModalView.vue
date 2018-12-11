<template>
  <Modal v-if="showModal" :type="type"></Modal>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "modal-view",
  components: { Modal },
  data() {
    return {
      showModal: false,
      type: ""
    };
  },
  computed: {
    displayTodos() {}
  },
  mounted() {
    this.$root.$on("openTodoModal", str => {
      console.log(str);
      this.showModal = true;
      this.type = str;
    });

    this.$root.$on("closeModal", () => {
      this.showModal = false;
      this.todos = false;
      this.links = false;
    });

    console.log(this.$store.state.todos);
  }
};
</script>
