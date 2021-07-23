<template>
  <div>c1组件</div>
  <hr />
  <h1 @click="go1">路由跳转1单纯路径</h1>
  <h1 @click="go2">路由跳转2params</h1>
  <h1 @click="go3">路由跳转3query</h1>
  <h2>{{ gainVuex }}</h2>
  <h2>{{ gainVuexGet }}</h2>
  <h1 @click="changeVuex">点击改变</h1>
  <hr />
  <h1>{{ dataTest }}</h1>
  <h1 @click="changeData">点击改变</h1>
</template>

<script lang='ts'>
import { computed, defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  name: "C1",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    console.log("子路由", route.meta.keepAlive);
    let dataTest = ref("你好");
    const changeData = () => {
      dataTest.value = "世界";
    };
    // -------------------------------------------------------------
    const gainVuex = computed(() => {
      return store.state.vuexData; // 建议在computed中获取vuex数据
    });
    const gainVuexGet = computed(() => {
      return store.getters.getList; // 建议在computed中获取vuex数据
    });

    const changeVuex = () => {
      store.commit("changeVuexData");
      // 使用commit调用store中的函数，第一个参数为函数名，第二个参数可以作为store函数的参数传入
    };

    // ----------------------------------------------------------------------------
    const go1 = () => {
      router.push("/p2");
    };
    const go2 = () => {
      router.push({
        name: "Page2", // 只能使用name
        params: {
          //这个是路由跳转时携带的参数，可以在跳转后的页面中使用 route.params 获取
          id: 100,
        },
      });
    };
    const go3 = () => {
      router.replace({
        path: "/p2", // 使用name也可以
        query: {
          // 使用route.query获取
          id: 100,
        },
      });
    };

    return {
      go1,
      go2,
      go3,
      gainVuex,
      gainVuexGet,
      changeVuex,
      dataTest,
      changeData,
    };
  },
});
</script>

<style lang='less'>
</style>