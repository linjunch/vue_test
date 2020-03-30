import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 0,
    value: "",
    name: "",
    str: ""
  },
  getters: {
    computeStr: state => "“" + state.str + "”",
    computeName: state => val => (state.name ? val + state.name : state.name),
    computeValue: state =>
      state.value
        .split("")
        .reverse()
        .join("")
  },
  mutations: {
    addNum(state, value) {
      state.num += value;
    },
    setStr(state, str) {
      state.str = str;
    },
    setValue(state, value) {
      // 传多个值，第二个参数设置为一个对象
      state.value = value;
    },
    setName(state, payload) {
      state.name = payload.name;
      // console.log(state);
      // console.log(payload);
    }
  },
  actions: {},
  modules: {}
});
