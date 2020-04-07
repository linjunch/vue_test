export default {
  namespaced: true,
  state: {
    num: 0,
    value: '',
    name: '',
    str: ''
  },
  getters: {
    computeStr: state => '“' + state.str + '”',
    computeName: state => val => (state.name ? val + state.name : state.name),
    computeValue: state =>
      state.value
        .split('')
        .reverse()
        .join('')
  },
  mutations: {
    addNum(state, value) {
      state.num += value;
    },
    setStr(state, str) {
      state.str = str;
    },
    setValue(state, value) {
      state.value = value;
    },
    setName(state, payload) {
      state.name = payload.name;
    }
  },
  actions: {}
};
