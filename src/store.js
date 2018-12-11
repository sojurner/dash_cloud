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
  actions: {
    setPhotos(context, photos) {
      context.commit('setPhotos', photos);
    },
    addTodo(context, todo) {
      context.commit('addTodo', todo);
    }
  }
});
