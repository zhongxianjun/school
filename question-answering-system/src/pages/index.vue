<template>
  <div class="main">
    <input type="text" />
    <textarea></textarea>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main{
  display: flex;
  flex-wrap: wrap;
  input{
    width: 200px;
    height: 24px;
    line-height: 24px;
    font-size: 16px;
    color: #000;
    margin: 0 auto;
    outline: none;
  }
  textarea{
    width: 200px;
    height: 300px;
    line-height: 24px;
    font-size: 16px;
    color: #000;
    margin: 0 auto;
    margin-top: 30px;
    outline: none;
  }
}
</style>
