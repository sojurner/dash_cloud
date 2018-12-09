<template>
  <div class="about">
    <TodoList/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
export default {
  components: { TodoList },
  mounted() {
    window.addEventListener("keyup", event => {
      if (event.ctrlKey) {
        if (event.keyCode === 84) {
          this.$root.$emit("openModal");
        }
      }
      if (event.keyCode === 27) {
        this.$root.$emit("closeModal");
      }
    });
  }
};
</script>
