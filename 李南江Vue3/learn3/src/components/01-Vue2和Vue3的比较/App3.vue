<template>
  <p>{{count}}</p>
  <button @click="myFunc">点我</button>

  <ul>
    <li
    v-for="(stu, index) in state.stus"
    :key="stu.id"
    @click="delStu(index)"

    >{{stu.id}} -- {{stu.name}} -- {{stu.age}}</li>
  </ul>

  <form class="" action="index.html" method="post">
    <input type="text" v-model="state2.stu.id">
    <input type="text" v-model="state2.stu.name">
    <input type="text" v-model="state2.stu.age">
    <input type="submit" value="add" @click="addStu">
  </form>

</template>

<script>
import {ref} from 'vue';
import useRemoveStu from '../js/remove'
import useAddStu from '../js/add'

export default {
  name: 'App3',
  setup(props, context){//组合API的入口函数
    console.log(props, context);//Proxy {}[[Handler]]: Object[[Target]]: Proxy[[IsRevoked]]: false {expose: ƒ}
    // let count = 1;

    let count = ref(0);
    //这样定义的变量才会被监听到
    //另外注意ref只能监听简单变量，像数组/对象都不行
    //需要借助reactive

    function myFunc(){

      count.value++;
    }

    let {state, delStu} = useRemoveStu()
    let {state2, addStu} = useAddStu(state)


    return {count, myFunc, state, delStu, addStu, state2} //定义的变量/方法 都要暴露出去
  }


}




</script>
