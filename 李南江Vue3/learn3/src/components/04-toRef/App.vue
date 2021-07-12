<template>
  <p>{{state.name}}</p>
  <button @click="myFn">点我</button>
</template>

<script>
/**

1. ref: 复制，修改响应式数据不会影响以前的数据。数据变， UI自动刷新

2.toRef: 引用， 修改响应式数据会影响之前的数据。数据变， UI不会自动刷新


toRef是将变量与响应式对象建立引用关系，变量改变时可以改变源响应对象，并且更新响应式数据之后不刷新UI
*/

import {reactive,ref,toRef, toRaw} from 'vue'

export default {
  name: 'App',
  setup(){
    let obj = {name: 'lw', age: 18}
    let state = reactive(obj);


    let nameToRef = toRef(state, 'name');
    //...
    console.log(nameToRef);//ObjectRefImpl {_object: Proxy, _key: "name", __v_isRef: true}

    function myFn(){
      //obj.name = 'zhangsan' //并不能触发UI刷新, 因为obj不是响应式数据
      // state.name = 'wangwu' //能触发UI刷新
      nameToRef.value = "五虎上将关羽云长" //nameToRef.value改变， 那么原来的state也跟着改变， 但UI不刷新, 就这么回事


      console.log(obj); // {name: "zhangsan", age: 18}
      console.log(state);
      console.log(nameToRef);

    }
    return {state, myFn, nameToRef}



  }
}
</script>
