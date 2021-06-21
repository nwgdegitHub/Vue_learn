import {ref, reactive} from 'vue';
//把删除功能的代码抽取出来
function useRemoveStu(){
  let state = reactive({
    stus: [
      {id:1, name:'占三', age:11},
      {id:2, name:'占三', age:12},
      {id:3, name:'占三', age:13},
      {id:4, name:'占三', age:14},
      {id:5, name:'占三', age:15}
    ]
  });
  function delStu(index){
    // alert(index)
    state.stus = state.stus.filter((stu,idx) => {
      return idx !== index
    })
  }
  return {state, delStu}
}

export default useRemoveStu;