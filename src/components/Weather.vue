<template>
  <div class="weather-container">
    <div v-if="weatherInfo" :class="`div-${key}`" v-for="key in Object.keys(weatherInfo)">
      <span :class="key">{{weatherInfo[key]}}</span>
    </div>
    <img
      class="sun-icon sunset-icon"
      src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-09-512.png"
      alt="sunset icon"
      height="50"
    >
    <img
      class="sun-icon sunrise-icon"
      src="https://image.flaticon.com/icons/png/512/136/136741.png"
      alt="sunset icon"
      height="30"
    >
  </div>
</template>


<script>
export default {
  name: "weather",
  computed: {
    weatherInfo() {
      const weather = this.$store.state.weather;
      return weather;
    }
  }
};
</script>

<style scoped>
/* wrapper */
.weather-container {
  position: fixed;
  z-index: 1000;
  right: 2rem;
  top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 12rem;
}

span {
  color: white;
}

/* div-wrapper */
.div-location {
  grid-row: 1 / 2;
  grid-column: 1 /3;
}

.div-temperature {
  grid-row: 2 /3;
  grid-column: 1/3;
}

.div-high {
  justify-self: end;
  margin-right: 0.5rem;
  grid-row: 3 / 4;
  grid-column: 1 /2;
}

.div-low {
  justify-self: start;
  margin-left: 0.5rem;
  grid-row: 3 / 4;
  grid-column: 2 /3;
}

.div-sunset,
.div-sunrise {
  grid-row: 4 / 5;
  justify-self: end;
  align-self: center;
}

.div-sunset {
  grid-column: 2 /3;
}

.div-sunrise {
  grid-column: 1 /2;
}

/* span elements */
.location {
  font-size: 1.5rem;
  color: rgb(191, 188, 185);
}

.temperature {
  color: rgb(211, 211, 211);
  font-size: 2rem;
}

.high,
.low {
  font-size: 1.2rem;
}

.high {
  color: rgb(185, 87, 87);
}

.low {
  color: rgb(127, 162, 192);
}

/* icons elements */
.sun-icon {
  grid-row: 4 / 5;
  justify-self: start;
  z-index: -1;
  align-self: center;
}

.sunrise-icon {
  grid-column: 1 /2;
}

.sunset-icon {
  grid-column: 2 /3;
}
</style>