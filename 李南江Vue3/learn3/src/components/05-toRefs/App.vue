<template>
  <!-- <p>{{state}}</p> -->
  <button @click="myFn">点我</button>
</template>

<script>

import {reactive,ref,toRefs} from 'vue'

// toRefs到底有什么用途我也没搞清楚
export default {
  name: 'App',
  setup(){
    //toRefs() expects a reactive object but received a plain one.
    let obj = {name: 'lw', age: 18};


    let state0 = reactive(obj)
    let state = toRefs(state0); //是一种新的数据类型了

    console.log(obj); //{name: "lw", age: 18}
    console.log(state); //{name: ObjectRefImpl, age: ObjectRefImpl}


    function myFn(){

      console.log(state);
      state.name.value = "zhangsan" //为什么不是state.value.name ?
      state.age.value = 999

      console.log(obj); //此时原始数据也跟着变了
      console.log(state);
    }

    return {state, myFn}

  }
}
</script>
