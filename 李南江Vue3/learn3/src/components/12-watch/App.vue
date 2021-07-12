<template>
  <input type="text" v-model="count">
  <input type="text" v-model="book.name">
  <button @click="myFn">点我</button>
</template>

<script>

import {reactive,ref,watch} from 'vue'

export default {
  name: 'App',
  setup(){
    //1,监听普通类型
    let count = ref(1);
     const changeCount = () => {
    	 count.value+=1
     };

    watch(count, (newValue, oldValue) => { //直接监听
    	console.log("count改变了---oldValue=",oldValue, "--newValue=",newValue);

    });
    //2,监听响应式对象
    let book = reactive({
         name: "js编程",
         price: 50,
     });
     const changeBookName = () => {
     	book.name = "c#";
     };
     watch(()=>book.name,()=>{//通过一个函数返回要监听的属性
     	console.log('书名改变了')
     })

     //vue2中只能又一个watch vue3可以有多个
     //

     watch([() => book.name, count], ([name, count], [preName, preCount]) => {
      	console.log("count或book.name改变了");
      });

    return {count, book}

  }
}
</script>
<style>

</style>
