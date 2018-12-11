<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/work">Work</router-link>
      <div class="time">
        <h3>{{time.slice(0,time.indexOf(','))}}</h3>
        <h4>{{time.slice(time.indexOf(',') + 1)}}</h4>
    </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #aca9a9;
  text-decoration-line: none;
  font-size: 2rem;
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
