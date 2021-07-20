import { createApp } from "vue"; // 引入vue文件，并导出createApp，创建对应的应用,产生应用的实例对象
import App from "./App.vue"; // 引入根组件(所有组件的父级组件)，你在页面上看到的内容基本都在这个组件里
import router from "./router";
import store from "./store/store";

const app = createApp(App); // 创建实例

app.use(router); // 注册需要全局使用的模块，组件等
app.use(store);

app.mount("#app"); //调用mount方法 把App组件挂载到#app节点上，在public目录下的index.html中
