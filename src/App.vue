<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="Page2,Page3,Page5">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <!--component标签vue特有的动态组件，is属性指向谁，就显示哪个组件-->
  <!--这里is中的Component表示的是路由对应的组件，也就是此时路由跳转到哪个组件，这个Component就表示哪个组件-->
  <!-- include中可以写多个组件，写组件名称-->

  <!-- 一级路由占位符，根路由占位符，所有一级路由规则匹配到的组件将显示在这 -->
  <!-- 如果其它组件想使用路由占位符来渲染组件(二级路由占位符)，那必须在路由文件中定义了子路由，也就是二级路由 -->
  <!-- 即只有根组件和拥有子组件路由的组件才能写路由占位符 -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
// 暴露出去一个定义好的组件，export default暴露出去的组件，导入时可以自定义名字
export default defineComponent({
  // defineComponent函数,目的是定义一个组件,内部可以传入一个配置对象
  name: "App", // 当前组件的名字是App
  components: {
    // 注册组件
  },
});
</script>