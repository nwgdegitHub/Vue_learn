<template>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">

  <h2>豆瓣Top250</h2>
  <!-- <button @click="fetchData">Success</button> -->

<!-- https://img2.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp -->
  <!-- <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171222%2F3b936ed58b6c4226b51355c3a6786553.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627458132&t=008d6885deec112c5f1186b94dc8b212
" alt="" class="fengmian"> -->
  <!-- <p>{{pages}}</p> -->
  <table class="table table-bordered table-hover">
      <thead>
          <tr>
              <th>编号</th>
              <th>链接</th>
              <th>封面</th>
              <th>中文名</th>
              <th>英文名</th>
              <th>评分</th>
              <th>点播量</th>
              <th>主旨</th>
              <th>简介</th>
              <th>收藏</th>
              <th>操作</th>
          </tr>
      </thead>
      <tbody>
          <tr
              v-for="(item, index) in movies.items"
              :key="item._id"

              @click="handleToggle(item._id)"
          >
              <td>{{item._id}}</td>
              <td>{{item.link}}</td>
              <td>
                  <img :src="getImages(item.imgSrc)" alt="" class="fengmian">
              </td>
              <td>{{item.titles_z}}</td>
              <td>{{item.titles_e}}</td>
              <td>{{item.rating}}</td>
              <td>{{item.judgeNum}}</td>
              <td>{{item.inq}}</td>
              <td>{{item.bd}}</td>
              <td>
                  <img
                      @click="handleCollect(item._id)"
                      :src=" item.collect ? '../../public/collection.png': '../../public/un_collection.png' "
                      alt=""
                      class="collect"
                  >
              </td>
              <td>
                  <button @click="handleDelete(item._id)">删除</button>
              </td>
          </tr>
      </tbody>
  </table>
  <nav aria-label="Page navigation" class="page-control">
      <ul class="pagination pagination-lg">
        <li>
          <a href="javascript:void(0)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="item of pages">
            <a
              href="javascript:void(0)"
              @click="doPage(item)"
              >{{item}}</a>
        </li>

        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
</template>

<script>

import {reactive, ref, onMounted, computed} from 'vue'
import $ from "jquery"

export default {
  name: 'App',
  setup(){
    let movies = reactive({items:[]});
    let movie = reactive({ //reactive（）参数必须传对象json/arr, 不然界面不会更新
      stu:{
        id:'',
        name:'',
        age:''
      }
    });
    let total = ref(0)
    // let pages = reactive({items:[]})


    onMounted(()=>{
      $.ajax({
          url:"http://localhost:8082/top250",
          success: res=>{
              console.log(res);
              movies.items = res.res
              total.value = res.total
              // console.log(total);


              // var arr = [];
              // for(var i = 0; i < res.total; i+=5){
              //     arr.push(i)
              // }
              // var res = arr.map(item=>{
              //     return (item+5)/5
              // })
              // console.log(res);
              // pages.items = res

          }
      });
    });

    //计算型属性 也要在return中返回 这里因为要使用API返回数据 不能写在同步程序中
    let pages = computed(()=> {

      console.log("被跟踪的变量total没变所以不会再走这里, 只要变了，不管是在同步还是异步程序，都会走这里",total.value);

      var num = total.value

      var arr = [];
      for(var i = 0; i < num; i+=5){
          arr.push(i)
      }
      var res = arr.map(item=>{
          return (item+5)/5
      })
      console.log(res);

      return res
    } );
    
    function fetchData(){

    }

    function handleToggle(){}

    function handleCollect(){}

    function handleDelete(){}

    //下一页
    function doPage(item){
      // console.log(item);//1,2,3 ..
      var start = (item-1)*5;
      $.ajax({
        url: `http://localhost:8082/top250?start=${start}`,
        success: res=>{
            console.log(res);
            movies.items = res.res
            // this.total = res.total
        }
    })
    }

    // 解决403图片缓存问题(参考自https://blog.csdn.net/weixin_39782183/article/details/104767440)
    function getImages(_url){
      console.log(_url);
      if(_url.indexOf("doubanio.com") == -1){
        return _url
      }

        if( _url !== undefined ){
            let _u = _url.substring( 7 );
            _u = _u.replace("img2","img3"); //这里是发现有一张图片加载不了 改一下就行了
            return 'https://images.weserv.nl/?url=' + _u;
        }
    }


    return {movies, handleToggle, handleCollect, handleDelete, fetchData, getImages, pages, doPage, total};

  }
}
</script>

<style>
  .fengmian{
    width: 200px;
    height: 300px;
  }
  .collect{
    width: 50px;
    height: 50px;
  }
</style>
