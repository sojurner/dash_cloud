<template>
  <div class="todo-list">
    <h1>
      <i class="fas fa-clipboard-list"></i>
      2dos
    </h1>
    <table>
      <tbody v-if="todoList.length">
        <tr class="todo-card">
          <th @click="sortList(k)" v-for="k in keys">{{k}}</th>
        </tr>
        <tr v-for="todo in todoList">
          <td>{{todo.title}}</td>
          <td>{{todo.description}}</td>
          <td>{{todo.importance}}</td>
          <td>{{todo.category}}</td>
          <td>{{todo.date}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "todolist",
  data() {
    return {
      keys: ["title", "description", "importance", "category", "date"],
      sortedKey: ""
    };
  },
  methods: {
    sortList(key) {
      if (this.sortedKey !== key) {
        this.$store.dispatch("sortDefault", key);
        this.sortedKey = key;
      } else {
        this.$store.dispatch("sortOther", key);
        this.sortedKey = "";
      }
    }
  },
  computed: {
    todoList() {
      return this.$store.state.todos;
  }
  }
};
</script>

<style scoped>
</style>