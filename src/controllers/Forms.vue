<template>
  <form action>
    <input autofocus ref="title" type="text" name="title" @keyup="handleChange" class="title">
    <input type="text" name="body" @keyup="handleChange" class="link">
    <button @click="handleClick" class="save-btn" :class="{'save-btn-active': clicked}"></button>
  </form>
</template>

<script>
import * as moment from "moment";
import { setTimeout } from "timers";

export default {
  name: "forms",
  data() {
    return {
      showModal: false,
      title: "",
      body: "",
      category: "",
      importance: null,
      date: null,
      id: null,
      clicked: false
    };
  },
  methods: {
    handleChange(event) {
      const { value, name } = event.target;
      this[name] = value;
    },

    handleClick() {
      const { title, body, category, importance, id } = this.$data;
      if (title && body) {
        this.clicked = true;
        const todo = {
          title,
          body,
          category,
          id: Date.now(),
          importance
        };
        this.$store.dispatch("addTodo", todo);

        setTimeout(() => {
          this.$data.clicked = false;
        }, 3000);
      }
    }
  }
};
</script>

<style scoped>
input {
  height: 1.5rem;
  width: 20em;
  margin: 1rem;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: rgb(50, 68, 85);
  color: aliceblue;
}

input:focus {
  outline: 0;
}

.save-btn {
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color: antiquewhite;
  border-top: 6px solid rgb(173, 173, 173);
  border-bottom: 6px solid rgb(180, 180, 180);
  border-left: 1px solid rgb(129, 129, 129);
  border-right: 1px solid rgb(129, 129, 129);
  transition: 0.5s;
}

.save-btn-active {
  border-top: 12px solid rgb(129, 129, 129);
  border-bottom: 12px solid rgb(129, 129, 129);
  transition: 0.5s linear;
}
</style>