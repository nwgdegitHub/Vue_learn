<template>
 <div id="app">
   <p>{{state.a}}</p>
   <p>{{state.gf.b}}</p>
   <p>{{state.gf.f.c}}</p>
   <p>{{state.gf.f.s.d}}</p>
   <button @click="myFn">点我</button>

   <p>{{state2.a}}</p>
   <p>{{state2.gf.b}}</p>
   <p>{{state2.gf.f.c}}</p>
   <p>{{state2.gf.f.s.d}}</p>
   <button @click="myFn2">点我2</button>


 </div>



</template>

<script>

/**
* 1.默认情况，ref/reactive都是递归监听
* 2.数据量比较大时，递归监听耗性能
* 3.非递归监听
*
*/
import {ref, reactive} from 'vue'


export default {
 name: 'App1',
 setup(){

   let state = reactive({
     a: 'a',
     gf: {
       b: 'b',
       f: {
         c: 'c',
         s: {
           d: 'd'
         }
       }
     }
   })

   function myFn(){
     //区别就是看不改变第一层 还会不会继续往下递归
     // state.a = '1';
     state.gf.b = '2';
     state.gf.f.c = '3';
     state.gf.f.s.d = '4';

   }

   let state2 = ref({
     a: 'a',
     gf: {
       b: 'b',
       f: {
         c: 'c',
         s: {
           d: 'd'
         }
       }
     }
   })

   function myFn2(){
     state2.value = { //带了.value 有效
       a: '1',
       gf: {
         b: '2',
         f: {
           c: '3',
           s: {
             d: '4'
           }
         }
       }
     }

     // state2.value.a = 111; //带了.value 有效

     // console.log(state2.value);

   }

   return {state, myFn, state2, myFn2}

 }
}
</script>
