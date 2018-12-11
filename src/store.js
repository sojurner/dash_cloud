import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: [],
    todos: [],
    links: []
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
    setPhotos(context, photos) {
      context.commit('setPhotos', photos);
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
