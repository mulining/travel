<template>
  <div class="roadShare">
    <!-- 导航栏 -->
    <van-nav-bar
      v-show="hide"
      z-index="10"
      @click-left="backToRoad"
      fixed="true"
      title="游记详情"
      left-arrow
    >
    <van-icon name="star-o" color="#000" slot="right" />
    </van-nav-bar>
    <!-- 头部 -->
    <road-header></road-header>
    <!-- 一堆div -->
    <img src="../../static/images/jd.jpg" alt="">
    <!-- 标签 -->
    <div>
      <span>休闲</span>
      <span>娱乐</span>
    </div>
    <!-- 题目 -->
    <div>带你领略新西兰100%Pure Land七大房车营地</div>
    <!-- 头像 -->
    <div>
      <img src="" alt="">
      <!-- 发布者 -->
      <span>定智旅行+</span>
      <!-- 时间 -->
      <span>19-01-17 13:18</span>
    </div>
    <!-- 导语 -->
    <div>
      导
      <div>LEAD</div> 
      语
      <p>有长白云之乡（The land of the long white cloud）美誉的新西兰属于大洋洲，位于太平洋西南部，澳大利亚东南方约1600公里处，介于南极洲和赤道之间，西隔塔斯曼海与澳大利亚相望，北邻新喀里多尼亚、汤加、斐济。</p>
    </div>
    <div>
      <!-- 图片 -->
      <img src="../assets/images/0d4fd1721b5f450d90171c24a465ee55.jpeg" alt="">
      <!-- 文字 -->
      <p>新西兰国土面积为约27万平方公里（世界国家和地区第75名）。专属经济区120万平方公里，水域面积占2.1%，国土长1600公里，东西最宽处宽450公里，海岸线长6900公里。
      新西兰由北岛、南岛、斯图尔特岛及其附近一些小岛组成，新西兰素以“绿色”著称。虽然境内多山，山地和丘陵占其总面积75%以上。两座主要岛屿（南岛与北岛）面积约为266200km²。
      新西兰平原狭小。河流短而湍急，航运不便，但水利资源丰富。北岛多火山和温泉，南岛多冰河与湖泊。南岛的库克峰海拔3754米，为全国最高峰。海岸线长约1.5万公里。</p>
    </div>
    <!-- 分隔1 -->
    <div></div>
    <div>
      <!-- 图片 -->
      <img src="../assets/images/0e838b2501d04ba8a8dd21f211d432fd.jpg" alt="">
      <img src="../assets/images/291b76bb97ee4c62839077a5e49c85ff.jpg" alt="">
      <!-- 文字 -->
      <p>新西兰属温带海洋性气候，季节与北半球相反。四季温差不大，植物生长十分茂盛，森林覆盖率达29%，天然牧场或农场占国土面积的一半。广袤的森林和牧场使新西兰成为名副其实的绿色王国。新西兰水力资源丰富，全国80%的电力为水力发电。森林面积约占全国土地面积的29%，生态环境非常好。北岛多火山和温泉，南岛多冰河与湖泊。</p>
    </div>
    <!-- 分隔2 -->
    <div></div>
    <div>
      <!-- 文字 -->
      <p>新西兰的12月至次年2月为夏天，6月至8月为冬天。夏季平均气温20℃左右，冬季平均气温10℃左右，全年温差一般不超过15℃。全国各地年平均降雨量为600～1500毫米。</p>
      <!-- 图片 -->
      <img src="../assets/images/d6cf8fbfc53d4dbf93dee23a227c530c.jpg" alt="">
      <!-- 文字 -->
      <p>新西兰标准时间（NZST）。新西兰标准时间分冬令时制和夏令时制。冬令时制比格林威治国际标准时间早12小时（UTC+12）；夏时制为UTC+13（9月至次年4月）；而新西兰的查塔姆群岛比新西兰标准时间早45分钟。新西兰很接近国际日期变更线，是全世界最早进入新的一天的国家之一，查塔姆群岛和吉斯伯恩市是全世界最先迎接新一天到来的地方。</p>
    </div>
    <!-- 评论区 -->
    <div class="talks">
      <p>共3条评论</p>
      <!-- 评论列表 -->

    </div>
    <div style="height:40px"></div>
    <!-- 发表评论区 -->
    <div class="talk">
      <!-- 评论 -->
      <input type="text" placeholder="互动一下吧...">
      <!-- 点赞 -->
    </div>
  </div>
</template>

<script>
import roadHeader from './roadHeader.vue';

export default {
  components:{ roadHeader },
  data(){
    return{
      hide:false,
    }
  },
  methods: {
    backToRoad(){
      this.$router.push('./road');
    }
  },
  mounted() {
    window.onscroll=()=>{
      var scroll = document.body.scrollTop ||  document.documentElement.scrollTop;
      if(scroll>=350){
        this.hide=true;
      }else{
        this.hide=false;
      }
    };
  },
}
</script>

<style scoped>
  .roadShare{
    width:100%;
  }
  .roadShare img{
    width: 100%;
    overflow: hidden;
  }


  .roadShare .talks{
    margin-bottom: 20px;
  }
  .roadShare .talk{
    position: fixed;
    width: 100%;
    height: 35px;
    bottom: 0px;
    background-color: #fff;
  }
  .roadShare input{
    width: 80%;
    height: 60%;
    margin: 5px;
    padding: 2px 5px;
    background: #eee;
  }
</style>
