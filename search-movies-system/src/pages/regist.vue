<template>
    <div class="regist" @keyup.enter="regist">
    <div class="container">
        <div class="title">注册</div>
        <div class="form">
            <div><span class="prompt">账号：</span><input type="text" name="username" placeholder="请输入注册账号" v-model="user"></div>
            <div><span class="prompt">密码：</span><input type="password" name="password" placeholder="请输入登录密码" v-model="psd"></div>
            <div><span class="prompt">确认密码：</span><input type="password" name="password" placeholder="请确认密码" v-model="truePsd"></div>
        </div>
        
        <div class="btn">
            <span class="registBtn" @click="regist">注册</span>
            
            <router-link to="login">
              <span class="loginBtn">登录</span>
            </router-link>
        </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'regist',
  data () {
    return {
      user: '',
      psd: '',
      truePsd: ''
    }
  },
  methods: {
    regist: function(){
        if(this.user.trim() == "" || this.psd.trim() == "" || this.truePsd.trim() == ""){
            alert("用户名、密码、确认密码不能为空");
        }else{

            if(this.psd.trim() == this.truePsd.trim()){
                this.$router.push('administ');
                alert("注册成功");
            }else{
                alert("两次密码不一致");
                this.psd = "";
                this.truePsd = "";
            }
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.regist{

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
.form .prompt{
    display: inline-block;
    width: 80px;
    text-align: right;
}
.form input{
  width: 255px;
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
.btn .registBtn{
    width: 355px;
    height: 36px;
    line-height: 36px;
    background: #3b38bf;
    color: #fff;
    border-radius: 5px;
}
</style>
