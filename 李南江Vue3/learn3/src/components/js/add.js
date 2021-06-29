import {ref, reactive} from 'vue';


function useAddStu(state){
  // console.log(state);

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

    // const stu = Object.assign({},state2.stu)
    // state.stus.push(state2.stu) //为什么不是直接这样？

    state2.stu.id = ''
    state2.stu.name = ''
    state2.stu.age = ''

  }
  return {state2, addStu}
}

export default useAddStu;
