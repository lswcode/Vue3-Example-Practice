import { createStore } from "vuex";

export default createStore({
  state: {
    vuexData: "这是vuex的数据",
    list: [1, 2, 3, 4, 5, 6],
  },
  getters: {
    // 用来对数据进行筛选，获取想要的数据
    getList(state) {
      // 参数必须写state
      return state.list.slice(1, 4); // 这样调用这个函数就可以获取返回的数据
    },
  },
  mutations: {
    changeVuexData(state) {
      state.vuexData = "修改了vuex中的数据";
    },
  },
  actions: {},
});
