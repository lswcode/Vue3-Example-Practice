<template>
    <div>Page7</div>
    <div>{{name}}</div>
    <h1 @click="update">change</h1>
</template>

<script lang='ts'>
    import {
        defineComponent,
        reactive,
        toRef
    } from 'vue'

    export default defineComponent({
        name: 'Page7',
        setup() {
            const state = reactive({
                name: '小白',
                age: 24,
            })
            // 把响应式数据state对象中的name属性变成了ref对象
            const name = toRef(state, 'name') // 将对象中指定的一个属性变成响应式对象，第一个参数是对象，第二个参数是对象的属性
            const update = () => {
                state.name += '777' // 这是没有使用toRef的格式,必须使用对象.属性格式使用
                name.value += '-' // 使用toRef后，用name接收这个对象属性，属性自己也变成了响应式对象，可以直接使用
            }
            return {
                state,
                name,
                update
            }
        },
    })
</script>