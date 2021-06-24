<template>
  <ul>
    <li
    v-for="(stu, index) in stus"
    :key="stu.id"
    @click="delStu(index)"

    >{{stu.id}} -- {{stu.name}} -- {{stu.age}}</li>
  </ul>
  <form class="" action="index.html" method="post">
    <input type="text" v-model="stu.id">
    <input type="text" v-model="stu.name">
    <input type="text" v-model="stu.age">
    <input type="submit" value="add" @click="addStu">
  </form>


</template>

<script>

export default {
  name: 'App2',
  data: function(){
    return {
      stus: [
        {id:1, name:'占三', age:11},
        {id:2, name:'占三', age:12},
        {id:3, name:'占三', age:13},
        {id:4, name:'占三', age:14},
        {id:5, name:'占三', age:15}

      ],
      stu:{
        id:'',
        name:'',
        age:''
      }
    }
  },
  methods:{
    delStu(index){
      // alert(index)
      this.stus = this.stus.filter((stu,idx) => {
        return idx !== index
      })
    },
    addStu(e){
      e.preventDefault()
      const stu = Object.assign({},this.stu)
      this.stus.push(stu)
      this.stu.id = ''
      this.stu.name = ''
      this.stu.age = ''

    }
  }
}
</script>
