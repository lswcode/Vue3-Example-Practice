<template>
    <div>x:{{x}}</div>
    <div>y:{{y}}</div>
</template>

<script lang='ts'>
    import {
        defineComponent,

    } from 'vue'
    import useMousePosition from './hooks/useMousePosition' // 先导入

    export default defineComponent({
        name: 'Page5',
        setup() {
            console.log(useMousePosition()); // 这个函数返回的值是一个对象
            const {
                x,
                y
            } = useMousePosition() // 使用解构赋值直接获取 x,y 值

            return {
                x,
                y
            }
        },
    })
</script>