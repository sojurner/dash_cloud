<template>
  <div class="work">
    <main>
      <section>
        <header>
          <h2>Keylist commands</h2>
        </header>
        <p>
          Add a Todo:
          <span>
            <span>Ctrl</span> +
            <strong>T</strong>
          </span>
        </p>
        <p>
          Add a Link:
          <span>
            <span>Ctrl</span> +
            <strong>L</strong>
          </span>
        </p>
      </section>
      <section>
        <TodoList/>
        <LinkList/>
      </section>
    </main>
    <ModalView/>
  </div>
</template>

<script>
import ModalView from "@/components/ModalView.vue";
import TodoList from "@/components/TodoList.vue";
import LinkList from "@/components/LinkList.vue";

export default {
  name: "work",
  components: { ModalView, LinkList, TodoList },
  mounted() {
    window.addEventListener("keyup", event => {
      let str;
      if (event.ctrlKey) {
        if (event.keyCode === 84) {
          str = "fas fa-clipboard-list";

          this.$root.$emit("openTodoModal", str);
        }
        if (event.keyCode === 76) {
          str = "fas fa-link";
          this.$root.$emit("openTodoModal", str);
        }
      }
      if (event.keyCode === 27) {
        this.$root.$emit("closeModal");
      }
    });
  }
};
</script>

<style scoped>
.work {
  height: 100vh;
  width: 100vw;
  background-color: rgb(70, 89, 104);
}

.work main {
  display: grid;

  grid-template-columns: 15rem 30rem;
}

.work header {
  color: rgb(110, 130, 146);
}

.work p {
  color: rgb(176, 226, 241);
  text-align: left;
  margin-left: 2rem;
}

.work span {
  color: aliceblue;
}
</style>
