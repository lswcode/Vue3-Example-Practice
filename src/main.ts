import { createApp } from "vue"; // 引入vue文件，并导出createApp，创建对应的应用,产生应用的实例对象
import App from "./App.vue"; // 引入根组件(所有组件的父级组件)，你在页面上看到的内容基本都在这个组件里
import router from "./router";
import store from "./store/store";
import NProgress from "nprogress"; // 进度条
import "nprogress/nprogress.css"; //样式必须引入

import "./style/global.less";
// 加载全局样式（最好放到最后，方便去覆盖第三方样式）
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

const app = createApp(App); // 创建实例

app.use(router); // 注册需要全局使用的模块，组件等
app.use(store);

app.mount("#app"); //调用mount方法 把App组件挂载到#app节点上，在public目录下的index.html中
