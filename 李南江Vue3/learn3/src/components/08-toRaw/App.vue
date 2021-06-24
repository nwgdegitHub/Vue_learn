<template>
  <h1>{{ state.name }}</h1>
  <button @click="myFn">点我</button>
</template>

<script>

// toRaw: 从ref/ reactive包装的Proxy对象拿到原始数据
// 之所以要拿到原始数据 ， 是因为每次修改数据会被追踪， 来更新界面， 但不是所有的数据修改都是要触发UI刷新的， 所以为了性能消耗减小
import {reactive, ref, toRaw} from 'vue'

export default {
  name: 'App',
  setup(){
    let obj = {name: 'lw', age: 18}; //
    let state = reactive(obj); //Proxy对象
    console.log(obj === state); // false
    let obj2 = toRaw(state)
    console.log(obj2 === state);
    console.log(obj2 === obj);

    let stateRef = ref(obj)
    console.log(toRaw(stateRef.value)); //注意从 ref 拿原始数据，要加value


    function myFn(){
      obj.name = 'zhangsan' //并不能触发UI刷新, 因为obj不是响应式数据
      state.name = 'wangwu' //能触发UI刷新
      console.log(obj); //{name: "wangwu", age: 18}
      console.log(state); //Proxy {name: "wangwu", age: 18}

    }
    return {state, myFn}
  }
}
</script>
