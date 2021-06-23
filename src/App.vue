<template>
  <!--Vue2的模版中必须要有一对根标签(div),Vue3组件的模版中可以没有根标签,直接写并列标签-->
  <!-- <div>你好</div>-->
  <router-view />
  <!-- 一级路由占位符，根路由占位符，路由规则匹配到的组件将显示在这 -->
  <!-- 如果其它组件想使用路由占位符来渲染组件(二级路由占位符)，那必须在路由文件中定义了路由子组件，也就是二级路由 -->
</template>
<script lang="ts">
  import {
    defineComponent
  } from 'vue'

  // 暴露出去一个定义好的组件
  export default defineComponent({ // defineComponent函数,目的是定义一个组件,内部可以传入一个配置对象
    name: 'App', // 当前组件的名字是App
    components: { // 注册组件

    },
  })
</script>