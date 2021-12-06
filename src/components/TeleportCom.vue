<template>
  <teleport to="#toast">
    <div class="center">
      Toast
    </div>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "",
  setup() {
    return {};
  },
});
</script>

<style lang='less' scoped>
.center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>