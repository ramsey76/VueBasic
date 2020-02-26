import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import {toDoStore} from "./ToDoStore" ;

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({storage: window.sessionStorage});

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    toDoStore
  },
  plugins: [vuexLocal.plugin]
});
