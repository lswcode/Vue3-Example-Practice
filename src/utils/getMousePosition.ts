import { reactive, toRefs, onMounted, onUnmounted } from "vue";
export const getMousePositionFun = () => {
  // 该函数被调用后，onMounted中的监听器会被启动
  const state = reactive({
    x: 0,
    y: 0,
  });

  const updatePosition = (event: MouseEvent) => {
    state.x = event.clientX; // clientX/Y 是鼠标点击事件的属性，返回鼠标指针相对于浏览器页面的坐标
    state.y = event.clientY;
    console.log(state.x);
  };
  onMounted(() => {
    // 添加点击事件监听器

    document.addEventListener("click", updatePosition);
  });
  onUnmounted(() => {
    document.removeEventListener("click", updatePosition);
  });

  return { ...toRefs(state) }; // 因为state是响应式的对象，只要x，y发生变化，return都会更新值，返回最新的数据
  // 注意这里不能直接使用 x:state.x y:state.y 的格式，因为这个格式return的x和y不是响应式的！
};
