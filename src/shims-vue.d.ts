/* eslint-disable */
declare module '*.vue' {  // TS无法理解.vue格式的文件，需要在这进行配置.vue格式的类型
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
