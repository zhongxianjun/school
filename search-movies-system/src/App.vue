<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: KaiTi;
}
*{ margin:0px; padding:0px;}
a { text-decoration:none; blr:expression(this.onFocus=this.blur()); outline:none;}
a:focus{ outline:none;}
img{ border:none;}
li{list-style:none;}
h1,h2,h3,h4,h5,h6{font-weight: normal;}
</style>
