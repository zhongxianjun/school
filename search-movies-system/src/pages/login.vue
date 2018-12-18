<template>
  <div class="login" @keyup.enter="login">
    <div class="container">
        <div class="title">登　录</div>
        <div class="form">
            账号：<input type="text" name="username" placeholder="请输入账号" v-model="user">
            密码：<input type="password" name="password" placeholder="请输入密码" v-model="psd">
        </div>
        
        <div class="btn">
            <span class="loginBtn" @click="login">登录</span>
            
            <router-link to="regist">
              <span class="registBtn">注册</span>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: '',
      psd: ''
    }
  },
  methods: {
    login: function (){
        if(this.user.trim() == "" || this.psd.trim() == ""){
            alert("用户名、密码不能为空");
        }else{

            if(this.user.trim() == 'zxj' && this.psd.trim() == '123'){
                this.$router.push('administ');
            }else{
                alert("用户名或密码错误");
                this.psd = "";
            }
        }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.login{

    padding-top: 160px;
}
.container{
    min-height: 280px;
    background: #ddd;
    border-radius: 10px;
}
.title{
    font-size: 24px;
    margin-bottom: 30px;
    padding-top: 30px;
}
.form{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.form input{
  width: 280px;
  height: 32px;
  line-height: 32px;
  padding: 0 8px;
  border: 1px solid #fff;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  background-color: #fff;
  margin: 10px 0;
}
.btn{
    width: 360px;
    margin: 0 50px;
    display: flex;
    align-items: center;
}
span{
    display: inline-block;
    margin: 20px 10px;
    cursor: pointer;
}
.loginBtn{
    width: 240px;
    height: 28px;
    line-height: 28px;
    background: #3b38bf;
    color: #fff;
    border-radius: 5px;
}
</style>
