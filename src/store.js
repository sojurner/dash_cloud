import Vue from 'vue';
import Vuex from 'vuex';
import * as call from './utils/apiCalls';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: [],
    weather: null,
    news: null,
    todos: [],
    links: [],
    activeTab: 'Overview'
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
    },
    toggleActiveTab(state, tab) {
      state.activeTab = tab;
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
    addTodo({ commit }, todo) {
      commit('addTodo', todo);
    },
    sortDefault({ commit }, category) {
      commit('sortDefault', category);
    },
    sortOther({ commit }, category) {
      commit('sortOther', category);
    },
    addLink({ commit }, link) {
      commit('addLink', link);
    },
    removeLink({ commit }, id) {
      commit('removeLink', id);
    },
    toggleActiveTab({ commit }, tab) {
      commit('toggleActiveTab', tab);
    }
  }
});
