<template>
  <h1>计算属性：{{ fullName }}</h1>
  <hr />
  <h1 @click="change">改变name</h1>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  computed,

  // watchEffect,
} from "vue";

export default defineComponent({
  name: "",
  setup() {
    const state = reactive({
      firstName: "你好",
      lastName: "世界",
    });
    const fullName = computed(() => {
      return state.firstName + "77777" + state.lastName;
    });
    const change = () => {
      state.firstName = state.firstName + "改变";
    };

    return {
      fullName,
      change,
    };
  },
});
</script>