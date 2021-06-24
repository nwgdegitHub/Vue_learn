<template>
  <ul>
    <li v-for="(item,index) in state"  :key="index">{{item.name}}</li>
  </ul>
</template>

<script>


//customRef
// 返回一个ref对象 可以显式地控制依赖追踪和触发响应

import {reactive,ref,customRef} from 'vue'

function myRef(value){

  return customRef((track, trigger)=>{

    //为什么要在这里请求 不能在get中调？ 防止死循环
    fetch(value)
        .then((res)=>{
          console.log(res);
          return res.json() })
        .then((data)=>{
          console.log(data);
          value = data;
          trigger();
         })
        .catch((err)=>{
          console.log(err);
        })

    return {
      get(){
        track(); //告诉Vue这个数据是需要追踪变化的
        return value;
      },
      set(newValue){
        value = newValue;
        trigger(); //告诉Vue触发界面刷新
      }
    }
  })
}

export default {
  name: 'App',
  setup(){ //setup() 是一个同步函数

    // let state = ref([])
    // fetch('../../public/data.json')
    //     .then((res)=>{
    //       console.log(res);
    //       return res.json() })
    //     .then((data)=>{
    //       console.log(data);
    //       state.value = data
    //      })
    //     .catch((err)=>{
    //       console.log(err);
    //     })
    // 不希望使用很多异步的回调...->

    let state = myRef('../../public/data.json')
    return {state}
  }
}
</script>
