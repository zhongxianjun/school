<template>
  <div class="login" @keyup.enter="login">
    <div class="container">
        <div class="title">登　录</div>
        <div class="form">
            <span class="prompt">账号：</span><input type="text" name="username" placeholder="请输入账号" v-model="user">
            <span class="prompt">密码：</span><input type="password" name="password" placeholder="请输入密码" v-model="psd">
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
    padding-bottom: 30px;
    padding-top: 30px;
}
.form{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.form .prompt{
    display: inline-block;
    width: 50px;
    text-align: left;
}
.form input{
  width: 285px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.btn span{
    width: 60px;
    height: 28px;
    line-height: 28px;
    display: inline-block;
    margin: 10px 0;
    cursor: pointer;
}
.btn .loginBtn{
    width: 355px;
    height: 36px;
    line-height: 36px;
    background: #3b38bf;
    color: #fff;
    border-radius: 5px;
}
</style>
