import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: [],
    todos: []
  },
  mutations: {
    setPhotos(state, photos) {
      state.photos = [...state.photos, photos];
    },
    addTodo(state, todo) {
      state.todos = [...state.todos, todo];
    }
  },
  actions: {
    setPhotos(context, photos) {
      context.commit('setPhotos', photos);
    },
    addTodo(context, todo) {
      context.commit('addTodo', todo);
    }
  }
});
