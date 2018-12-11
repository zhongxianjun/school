<template>
  <div class="search">
    <div class="header">
      <h1 class="logo">你想看</h1>
      <div class="bg"></div>
    </div>
    <div class="main">
      <div class="title">海王 <span class="EnglishName">Aquaman</span> <span class="time">(2018)</span></div>
      <div class="info">
        <img src="../assets/images/image_1.jpg">
        <div class="text">
          <p><span>导演:</span> 温子仁</p>
          <p><span>编剧:</span> 大卫·莱斯利·约翰逊-麦戈德里克 / 威尔·比尔 / 乔夫·琼斯 / 温子仁 / 莫尔特·魏辛格 / 保罗·诺里斯</p>
          <p><span>主演:</span> 杰森·莫玛 / 艾梅柏·希尔德 / 威廉·达福 / 帕特里克·威尔森 / 妮可·基德曼 / 更多...</p>
          <p><span>类型:</span> 动作 / 奇幻 / 冒险</p>
          <p><span>官方网站:</span> www.aquamanmovie.com</p>
          <p><span>制片国家/地区:</span> 美国 / 澳大利亚</p>
          <p><span>语言:</span> 英语</p>
          <p><span>上映日期:</span> 2018-12-07(中国大陆) / 2018-12-21(美国)</p>
          <p><span>片长:</span> 143分钟</p>
          <p><span>又名:</span> 水行侠(港/台) / 潜水侠 / 水人 / 人鱼哥(豆友译名)</p>
          <p><span>IMDb链接:</span> tt1477834</p>
        </div>
      </div>
      <div class="synopsis">
        <h3>剧情简介</h3>
        <p>华纳兄弟影片公司与导演温子仁联手为您呈现波澜壮阔的动作冒险电影——《海王》！横跨七大洋的广阔海底世界徐徐展开，给观众带来震撼十足的视觉奇观。本片由杰森·莫玛领衔主演，讲述半人半亚特兰蒂斯血统的亚瑟·库瑞踏上永生难忘的征途——他不但需要直面自己的特殊身世，更不得不面对生而为王的考验：自己究竟能否配得上“海王”之名。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.search{
  width: 100%;
  min-height: 100vh;
  background: #fff;
}
.search .header .logo{
  text-align: left;
  padding: 8px 10px;
  background: #f0f3f5;
}
.search .header .bg{
  width: 100%;
  height: 30px;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius:  50%;
  background: #f0f3f5;
}
.search .main{
  margin-top: 30px;
  padding: 0 20px;
}
.search .main .title{
  font-size: 24px;
  text-align: left;
}
.search .main .info{
  width: 100%;
  text-align: left;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.search .main .info img{
  width: 100px;
  height: 140px;
}
.search .main .info .text{
  width: 220px;
  text-align: left;
}
.search .main .info .text p{
  margin: 5px 0;
  color: #aaa;
}
.search .main .info .text p span{
  color: #000;
}

.search .main .synopsis{
  text-align: left;
  margin: 30px 0;
}
.search .main .synopsis h3{
  color: #000;
}
.search .main .synopsis p{
   text-indent:2em;
}
</style>
