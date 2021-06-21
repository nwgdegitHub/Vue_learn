import {ref, reactive} from 'vue';
function useAddStu(){
  let state2 = reactive({ //reactive（）参数必须传对象json/arr, 不然界面不会更新
    stu:{
      id:'',
      name:'',
      age:''
    }
  });
  function addStu(e){
    e.preventDefault()
    const stu = Object.assign({},state2.stu)
    state.stus.push(stu)
    state2.stu.id = ''
    state2.stu.name = ''
    state2.stu.age = ''

  }
  return {state2, addStu}
}

export default useAddStu;