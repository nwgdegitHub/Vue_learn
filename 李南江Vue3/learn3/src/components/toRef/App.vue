<template>
  <p>{{state}}</p>
  <button @click="myFn">点我</button>
</template>

<script>
/**

1. ref: 复制，修改响应式数据不会影响以前的数据
2. ref: 数据变， UI自动刷新
3. toRef: 引用， 修改响应式数据会影响之前的数据
4. toRef: 数据变， UI不会自动刷新

所以当你想让响应式数据和以前的数据关联起来，并且更新响应式数据之后不刷新UI， 就可以用toRef
*/

import {reactive,ref,toRef} from 'vue'

export default {
  name: 'App',
  setup(){
    let obj = {name: 'lw', age: 18};
    let state = toRef(obj, 'name'); //将obj中的name变成响应式数据
    //...

    function myFn(){
      obj.name = 'zhangsan' //并不能触发UI刷新
      state.name = 'wangwu' //toRef() 也不能触发UI刷新
      console.log(obj); //{name: "zhangsan", age: 18}
      console.log(state); //

    }
    return {state, myFn}



  }
}
</script>
