<template>
  <div class="index">
    <h1 class="logo">欢迎进入"你想看"电影世界</h1>
    <hr>
    <div class="main">
      <div class="containe">
        <div class="header">
          <input type="text" name="search" v-model="val" placeholder="请输入电影相关信息进行搜索...">
            <i @click="search"></i>
        </div>
        <div class="history" v-if="hisState">
          <h2 class="title">历史记录</h2>
          <div class="list">
            <div class="li" v-for="(item, index) in history" @click="searchHistory(item.name)">
              {{item.name}}
            </div>
          </div>
        </div>

        <SearchList v-if="!hisState"></SearchList>
      </div>

      <div class="footer" v-if="btnState">
        <router-link to="login">
          <span class="login">登录</span>
        </router-link>
        
        <router-link to="regist">
          <span class="regist">注册</span>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import {addCookie, getCookie, delCookie} from '../gloab.js';
import SearchList from './../components/searchList.vue';
import Vue from 'vue';
// import VueJsonp from 'vue-jsonp';
// Vue.use(VueJsonp);

Vue.prototype.$cookieStore = {
  addCookie,
  getCookie,
  delCookie
}
export default {
  name: 'index',
  data () {
    return {
      val: "",
      btnState: true,
      hisState: true,
      history: [
        {name: "海王"},
        {name: "极限特工"},
        {name: "绝地求生"},
        {name: "黑客帝国"},
        {name: "三体1"},
        {name: "三体2"},
        {name: "三体3"},
        {name: "异形4"},
      ]
    }
  },
  created(){
    
    // this.history = this.$cookieStore.getCookie("history");
    // console.log( this.$cookieStore.getCookie("history"));
  },
  mounted(){
    this.btnState = true;
    this.hisState = true;
  },
  methods: {
    search(){
       let val = this.val.trim();
       let len = this.history.length;
       let count = 0;
       let _this = this;

       (function(){
          // if(len > 0){
            _this.history.map((item, index)=>{
            
              if(val == item.name){
                _this.history.splice(index,1);
                count++;
                _this.btnState = false;
                _this.hisState = false;

                // _this.$cookieStore.addCookie("history", _this.history);
              }else if(val == ""){
                _this.btnState = true;
                _this.hisState = true;
              }

              if( index > 10){
                _this.history.splice(11,1);
              }
            })
          // }
          // else if(len == 0 && val !== ""){
          //   _this.$cookieStore.addCookie("history", val);
          // }

          if(val !== "" && count == 1){

            _this.history.unshift({name: val});
            count = 0;
          }else if(count == 1){
            _this.history.unshift({name: val});
          }

       })();
    },

    searchHistory(item){
      this.val = item;
      this.search();
    }

    // send(){
    //   console.log(66);
    //   let url = "http://www.some-site.com/data";
    //   this.$jsonp(url, 
    //     { 
    //       name: 'MyName',
    //       age: 20 
    //     })
    //   .then(res => {
        
    //     console.log(res.data,'----------');
    //     // Success.
    //   }).catch(err => {
    //     // Failed.
    //     console.log(err.data,'+++++++++++');
    //   })
    // }
  },
  components: {
    SearchList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
/*lang="sass"*/
.index{
  min-height: 100vh;
}
.index .logo{
  font-size: 28px;
  font-weight: normal;
  background: #cffbd085;
  padding: 8px 0;
}
hr{
  background: #fff;
}
.index .main{
  width: 100%;
  min-height: calc(100vh - 58px);
  background: linear-gradient(to bottom, #cffbd085, #cffbd085);
  margin: 0 auto;
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  
}
.index .main .containe{
  max-width: 340px;
  margin: 0 auto;
}
.index .main .header{
  width: 340px;
  margin: 0 auto;
  display: flex;

}
.index .main .header input{
  width: 300px;
  height: 32px;
  line-height: 32px;
  padding: 0 8px;
  border: 1px solid #fff;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
}
.index .main .header i{
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 1px solid #fff;
  border-radius: 6px;
  text-align: center;
  background: url(./../assets/images/search.png) center center no-repeat;
  background-size: 24px;
  background-color: #fff;
}

.index .main .history{
  margin-top: 28px;
  text-align: left;
}
.index .main .history .title{
  color: #000;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 10px;
}
.index .main .history .list{
  display: flex;
  flex-wrap: wrap;
}
.index .main .history .list .li{
  font-size: 14px;
  color: #aaa85;
  width: 32%;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border-radius: 12px;
  background: #ddd;
  margin: 6px 2px;
}
.index .main .footer{
  width: 180px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-top: 300px;
}
.index .main .footer span{
  margin: 0 20px;
  color: rgba(111,111,111,85);
}
</style>
