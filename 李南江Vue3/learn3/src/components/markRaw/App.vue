<template>
  <h1>{{ state.name }}</h1>
  <button @click="myFn">点我</button>
</template>

<script>

// toRaw: 从ref/ reactive包装的Proxy对象拿到原始数据
// 之所以要拿到原始数据 ， 是因为每次修改数据会被追踪， 来更新界面， 但不是所有的数据修改都是要触发UI刷新的， 所以为了性能消耗减小
import {reactive, ref, markRaw} from 'vue'

export default {
  name: 'App',
  setup(){
    let obj = {name: 'lw', age: 18}; //
    obj = markRaw(obj)  //禁止追踪obj的变化
    let state = reactive(obj); //Proxy对象


    function myFn(){
      obj.name = 'zhangsan' //并不能触发UI刷新
      state.name = 'wangwu' //能触发UI刷新
      console.log(obj);
      console.log(state);

    }
    return {state, myFn}
  }
}
</script>
