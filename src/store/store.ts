import { createStore } from "vuex";

export default createStore({
  state: {
    // state 类似 data
    //这里面写入数据
    vuexData: "这是vuex的数据",
    list: [1, 2, 3, 4, 5, 6],
  },
  getters: {
    // getters 类似 computed
    // 在这里面写方法，用来对数据进行筛选，获取想要的数据
    getList(state) {
      // 参数必须写state
      return state.list.slice(1, 4); // 这样调用这个函数就可以获取返回的数据
    },
  },
  mutations: {
    // mutations 类似methods
    // 写方法对数据做出更改(同步操作)
    changeVuexData(state) {
      state.vuexData = "修改了vuex中的数据";
    },
  },
  actions: {
    // actions 类似methods
    // 写方法对数据做出更改(异步操作)
  },
});
