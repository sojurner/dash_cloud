<template>
  <form @submit="handleSubmit">
    <h1 v-if="error">{{error}}</h1>
    <h6 v-if="clicked">Link Saved!</h6>
    <input
      placeholder="Enter Title"
      ref="title"
      type="text"
      name="title"
      @keyup="handleChange"
      class="title"
    >
    <input
      placeholder="Enter Link"
      ref="link"
      type="url"
      name="link"
      @keyup="handleChange"
      class="link"
    >
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
      title: "",
      Link: "",
      date: null,
      id: null,
      clicked: false,
      error: null
    };
  },
  methods: {
    handleChange(event) {
      console.log("asdf");
      const { value, name } = event.target;
      this[name] = value;
    },

    handleSubmit(event) {
      event.preventDefault();

      const { title, link, importance, id } = this;
      if ((title, link)) {
        this.clicked = true;
        const linkObj = {
          title,
          link,
          id: Date.now(),
          date: moment().format("MM/DD/YYYY @ h:mm a")
        };
        this.$store.dispatch("addLink", linkObj);
        setTimeout(() => {
          this.$data.clicked = false;
          this.$root.$emit("closeModal");
        }, 2000);
      } else {
        this.error = "Missing required Fields";
      }
    }
  }
};
</script>

<style scoped>
input {
  font-size: 1.3rem;
  padding-left: 1rem;
  letter-spacing: 2px;
  height: 2rem;
  width: 20rem;
  margin: 1rem;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  background-color: rgb(50, 68, 85);
  color: rgb(135, 167, 196);
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