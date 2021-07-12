<template>
  <div class="main">
    <p>我是子组件</p>
    <p>user: {{user}}</p>
    <p>school: {{school}}</p>
    <!-- <button @click="myFn">点我</button> -->
  </div>

</template>

<script>

import {reactive,ref,toRefs} from 'vue'



export default {
  name: 'App',
  props:{
    user:{type:String},
    school:{type:Object}
  },

  setup(props){
    //使用es6解构会消除prop的响应性，所以使用toRefs来简化写法

    const {user, school} = toRefs(props); //直接从toRefs(props)中拿出响应式数据

    return {user, school}
  }
}
</script>
<style>
  .main{
    width: 200px;
    height: 300px;
    border: 1px solid red;
  }
</style>
