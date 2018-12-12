<template>
  <div class="col-lg overlay" :class="{'col-lg overlay-active': menuDisplay}">
    <h1>Menu</h1>
    <nav>
      <ul>
        <li
          v-for="tab in tabs"
          @click="selectTab(tab.name)"
          :class="{'tab-active': tab.isActive}"
        >{{tab.name}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "home-nav",
  data() {
    return {
      tabs: [
        { name: "Overview", isActive: true },
        { name: "News", isActive: false },
        { name: "Weather", isActive: false },
        { name: "Videos", isActive: false },
        { name: "Map", isActive: false }
      ]
    };
  },
  props: {
    displayMenu: { require: true }
  },
  methods: {
    selectTab(name) {
      const activeTab = this.tabs.map(tab => {
        if (tab.isActive) {
          tab.isActive = false;
        }
        if (tab.name === name) {
          tab.isActive = true;
          this.$store.dispatch("toggleActiveTab", tab.name);
        }
        return tab;
      });
      this.$root.$emit("closeMenu");
      this.tabs = activeTab;
    }
  },
  computed: {
    menuDisplay() {
      return this.$props.displayMenu;
    }
  }
};
</script>

<style scoped>
.menu {
  color: white;
  transition: 0.4s;
}
.row,
.col-lg {
  margin: 0 !important;
  padding: 0 !important;
}

.col-lg {
  height: 100vh;
}

.col-lg.overlay {
  background: #262d3cd6;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0;
  animation: bounceOutUp 1s linear;
}

.col-lg.overlay-active {
  opacity: 1;
  animation: bounceInDown 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  z-index: 10;
}

.overlay h1 {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  font-family: Poppins;
  font-weight: 800;
  color: #d5d5d5;
}

ul {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  padding: 0.4rem;
  margin: 1rem 0;
  width: max-content;

  font-size: 30px;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  color: #a9a6a9;
  cursor: pointer;
}

li:hover {
  background: rgb(63, 69, 89);
}

.tab-active {
  background: rgb(53, 58, 75);
}

.tab-active:hover {
  background: rgb(63, 69, 89);
}

.overlay-active:before {
  content: "";
  height: 300%;
  /* left: 50%; */
  opacity: 0.48;
  position: fixed;
  top: -110%;
  /* width: 300%; */
}

@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceOutUp {
  0% {
    opacity: 1;
  }

  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
</style>