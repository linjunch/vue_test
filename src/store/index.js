import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import am from "./modules/am";
import vm from "./modules/vm";

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    am,
    vm
  }
});
