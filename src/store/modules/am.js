import { getList, addItem, deleteItem } from "@/services";
export default {
  namespaced: true,
  state: {
    info: "",
    list: []
  },
  getters: {},
  mutations: {
    setInfo(state, info = "") {
      state.info = info;
    },
    setList(state, newList) {
      state.list = newList;
    }
  },
  actions: {
    add({ dispatch, commit }, name) {
      addItem(name).then(res => {
        if (res.status === 200) {
          dispatch("getAll");
          commit("setInfo");
        }
      });
    },
    del({ dispatch }, id) {
      deleteItem(id).then(res => {
        if (res.status === 200) {
          dispatch("getAll");
        }
      });
    },
    getAll({ commit }) {
      getList().then(res => {
        if (res.status === 200) {
          commit("setList", res.data.message);
        }
      });
    }
  }
};
