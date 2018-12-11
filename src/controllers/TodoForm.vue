<template>
  <form @submit="handleSubmit">
    <h6 v-if="!title">{{error}}</h6>
    <input
      autofocus
      ref="content"
      placeholder="name"
      type="text"
      name="title"
      @keyup="handleChange"
      class="title"
    >
    <input
      ref="description"
      type="text"
      placeholder="description"
      name="description"
      @keyup="handleChange"
      class="description"
    >

    <form class="importance-radio" @change="handleChange" name="importance">
      <input type="radio" name="importance" id="high" value="high">
      <label for="high">High</label>
      <input type="radio" name="importance" id="moderate" value="moderate">
      <label for="moderate">Moderate</label>
      <input type="radio" name="importance" id="low" value="low">
      <label for="low">Low</label>
    </form>
    <select @change="handleChange" name="category" id>
      <option :value="null">Categories</option>
      <option value="chore">Chores</option>
      <option value="contact">Contact</option>
      <option value="personal">Personal</option>
      <option value="school">School</option>
      <option value="work">Work</option>
      <option value="other">Other</option>
    </select>
    <button class="save-btn" :class="{'save-btn-active': clicked}"></button>
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
      description: "",
      importance: null,
      category: null,
      date: null,
      id: null,
      clicked: false,
      error: ""
    };
  },
  methods: {
    handleChange(event) {
      const { value, name } = event.target;
      this[name] = value;
    },

    handleSubmit(event) {
      event.preventDefault();

      const { title, description, importance, category, id } = this.$data;
      if (!title) {
        this.error = "Missing Title";
      }

      if (!description) {
        this.error = "Missing Desciption";
      }

      if (!category) {
        this.error = "select a category";
      }

      if (!importance) {
        this.error = "select level of importance";
      }

      if (title && description && category && importance) {
        this.clicked = true;
        const todo = {
          title,
          description,
          category,
          importance,
          id: Date.now(),
          date: moment().format("MM/DD/YYYY @ h:mm a")
        };
        this.$store.dispatch("addTodo", todo);

        setTimeout(() => {
          this.$data.clicked = false;
          this.$root.$emit("closeModal");
        }, 1000);
      }
    }
  }
};
</script>

<style scoped>
input {
  height: 1.5rem;
  font-size: 1.3rem;
  width: 20rem;
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

.description {
  height: 3rem;
}

.importance-radio label {
  margin-left: 0.1rem;
  margin-right: 0.4rem;
}

.importance-radio input {
  width: max-content;
  margin: 0.2rem;
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