import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: [],
    weather: null,
    news: null,
    todos: [],
    links: []
  },
  getters: {
    newsStories: state => {
      return state.news;
    }
  },
  mutations: {
    setPhotos(state, photos) {
      state.photos = [...photos];
    },
    setWeather(state, weather) {
      state.weather = weather;
    },
    setNews(state, news) {
      state.news = news;
    },
    addTodo(state, todo) {
      state.todos = [...state.todos, todo];
    },
    sortDefault(state, category) {
      state.todos = state.todos.sort((a, b) => {
        if (a[category] > b[category]) {
          return 1;
        }
        if (a[category] < b[category]) {
          return -1;
        }
        return 0;
      });
    },
    sortOther(state, category) {
      state.todos = state.todos.sort((a, b) => {
        if (a[category] > b[category]) {
          return -1;
        }
        if (a[category] < b[category]) {
          return 1;
        }
        return 0;
      });
    },
    addLink(state, link) {
      state.links = [...state.links, link];
    },
    removeLink(state, id) {
      state.links = state.links.filter(link => link.id !== id);
    }
  },
  actions: {
    async setPhotos({ commit, state }) {
      if (!state.photos.length) {
        let photos = await call.fetchRandomPhotos();
        commit('setPhotos', photos);
      }
    },
    setWeather({ commit, state }) {
      if (!state.weather) {
        navigator.geolocation.getCurrentPosition(async location => {
          const { latitude, longitude } = location.coords;
          let weather = await call.fetchWeather(latitude, longitude);
          commit('setWeather', weather);
        });
      }
    },
    async setNews({ commit, state }) {
      if (!state.news) {
        let news = await call.fetchNews();
        commit('setNews', news);
      }
    },
    addTodo(context, todo) {
      context.commit('addTodo', todo);
    },
    sortDefault(context, category) {
      context.commit('sortDefault', category);
    },
    sortOther(context, category) {
      context.commit('sortOther', category);
    },
    addLink(context, link) {
      context.commit('addLink', link);
    },
    removeLink(context, id) {
      context.commit('removeLink', id);
    }
  }
});
