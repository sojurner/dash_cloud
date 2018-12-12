<template>
  <div id="app">
    <div id="nav">
      <nav>
        <router-link to="/">Home</router-link>|
        <router-link to="/work">Work</router-link>
      </nav>
      <h1>Welcome</h1>
      <div class="time">
        <h3>{{date}}</h3>
        <h4>{{time}}</h4>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import * as moment from "moment";
import { setTimeout, setInterval } from "timers";

export default {
  data() {
    return {
      date: null,
      time: null
    };
  },
  mounted() {
    setInterval(() => {
      let timeDate = moment().format("MMM Do, h:mm:ss a");
      this.date = timeDate.slice(0, timeDate.indexOf(","));
      this.time = timeDate.slice(timeDate.indexOf(",") + 1);
    }, 1000);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.time {
  position: absolute;
  right: 1rem;
  top: 0rem;
}

h3,
h4 {
  color: white;
}

nav {
  align-self: center;
}

#nav {
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #aca9a9;
  text-decoration-line: none;
  font-size: 1.5rem;
  margin: 1rem;
}

#nav a:hover {
  color: #c1cadd;
  text-decoration-line: underline;
}

#nav a.router-link-exact-active {
  color: #c1cadd;
}

body {
  margin: 0;
  background-color: #2c3e50;
}
</style>
