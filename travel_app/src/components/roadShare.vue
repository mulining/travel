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
      style="border-bottom:0.5px solid #eee"
    >
    <van-icon name="star-o" color="#000" slot="right" />
    </van-nav-bar>
    <!-- 头部 -->
    <road-header></road-header>
    <!-- 一堆div -->
    <img src="../../static/images/jd.jpg" alt="">
    <!-- 标签 -->
    <div class="tips">
      <h6>休闲</h6>
      <h6>娱乐</h6>
    </div>
    <!-- 题目 -->
    <div class="title">
      <h2>带你领略新西兰100%Pure Land七大房车营地</h2>  
    </div>
    <!-- 头像 -->
    <div class="author">
      <img src="../assets/imgs/travel.png" alt="">
      <div>
        <!-- 发布者 -->
        <span>定智旅行+</span>
        <!-- 时间 -->
        <span class="time">19-01-17 13:18</span>
      </div>
    </div>
    <!-- 导语 -->
    <div class="lead">
      <div class="head">
        <div class="f">导</div> 
        <div class="s">LEAD</div> 
        <div class="t">语</div> 
      </div>
      <p>有长白云之乡（The land of the long white cloud）美誉的<b>新西兰</b>属于大洋洲，位于太平洋西南部，澳大利亚东南方约<b>1600公里</b>处，介于南极洲和赤道之间，西隔塔斯曼海与澳大利亚相望，北邻新喀里多尼亚、汤加、斐济。</p>
    </div>
    <div class="content">
      <div>
        <!-- 分隔1 -->
        <div class="line">——————&nbsp; 1 &nbsp;——————</div>
        <!-- 图片 -->
        <img src="../assets/images/0d4fd1721b5f450d90171c24a465ee55.jpeg" alt="">
        <!-- 文字 -->
        <p>新西兰国土面积为约27万平方公里（世界国家和地区第75名）。专属经济区120万平方公里，水域面积占2.1%，国土长1600公里，东西最宽处宽450公里，海岸线长6900公里。
        <b>新西兰</b>由北岛、南岛、斯图尔特岛及其附近一些小岛组成，新西兰素以<b>“绿色”</b>著称。虽然境内多山，山地和丘陵占其总面积75%以上。两座主要岛屿（南岛与北岛）面积约为<b>266200km²</b>。</p>
        <p>新西兰平原狭小。河流短而湍急，航运不便，但水利资源丰富。北岛多火山和温泉，南岛多冰河与湖泊。南岛的库克峰海拔3754米，为全国<b>最高峰</b>。海岸线长约1.5万公里。</p>
      </div>
      <!-- 分隔2 -->
      <div class="line">——————&nbsp; 2 &nbsp;——————</div>
      <div>
        <!-- 图片 -->
        <img src="../assets/images/0e838b2501d04ba8a8dd21f211d432fd.jpg" alt="">
        <img src="../assets/images/291b76bb97ee4c62839077a5e49c85ff.jpg" alt="">
        <!-- 文字 -->
        <p>新西兰属温带海洋性气候，季节与北半球相反。四季温差不大，<b>植物</b>生长十分茂盛，<b>森林覆盖率达29%</b>，天然牧场或农场占国土面积的一半。广袤的森林和牧场使新西兰成为名副其实的绿色王国。<b>新西兰</b>水力资源丰富，全国80%的电力为水力发电。森林面积约占全国土地面积的29%，生态环境非常好。北岛多<b>火山</b>和<b>温泉</b>，南岛多<b>冰河</b>与<b>湖泊</b>。</p>
      </div>
      <!-- 分隔3 -->
      <div class="line">——————&nbsp; 3 &nbsp;——————</div>
      <div>
        <!-- 文字 -->
        <p style="padding:10px; border:3px solid #ddd; margin: 10px 5px;">新西兰的12月至次年2月为夏天，6月至8月为冬天。夏季平均<b>气温20℃</b>左右，冬季平均<b>气温10℃</b>左右，全年温差一般不超过15℃。全国各地年平均<b>降雨量</b>为600～1500毫米。</p>
        <!-- 图片 -->
        <img src="../assets/images/d6cf8fbfc53d4dbf93dee23a227c530c.jpg" alt="">
        <!-- 文字 -->
        <p style="text-align:center; font-size:16px; padding:5px 0;">新西兰标准时间（NZST）</p>
        <p>新西兰标准时间分冬令时制和夏令时制。冬令时制比<b>格林威治</b>国际标准时间早<b>12小时</b>（UTC+12）；夏时制为UTC+13（9月至次年4月）；而新西兰的<b>查塔姆群岛</b>比新西兰标准时间早<b>45分钟</b>。新西兰很接近国际日期变更线，是全世界最早进入新的一天的国家之一，<b>查塔姆群岛</b>和<b>吉斯伯恩市</b>是全世界最先迎接新一天到来的地方。</p>
        <br>
      </div>
    </div>
    <div style="background:#eee; height:10px"></div>
    <!-- 评论区 -->
    <div class="talks">
      <p>共3条评论</p>
      <!-- 评论列表 -->
      <div>
        <div class="talker">
          <img src="../assets/imgs/girl.png" alt="">
          <div>
            <!-- 发布者 -->
            <span>1851****3782</span>
            <!-- 时间 -->
            <span class="time">19-06-17 14:01</span>
          </div>
        </div>
        <p style="margin-left:55px">评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
      </div>
      <div>
        <div class="talker">
          <img src="../assets/imgs/boy.png" alt="">
          <div>
            <!-- 发布者 -->
            <span>1851****3782</span>
            <!-- 时间 -->
            <span class="time">19-06-17 14:01</span>
          </div>
        </div>
        <p style="margin-left:55px">评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
      </div>
      <div>
        <div class="talker">
          <img src="../assets/imgs/person.png" alt="">
          <div>
            <!-- 发布者 -->
            <span>1851****3782</span>
            <!-- 时间 -->
            <span class="time">19-06-17 14:01</span>
          </div>
        </div>
        <p style="margin-left:55px">评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
      </div>
    </div>
    <!---------------------------------------------->
    <div style="height:80px; background:#eee;"></div>
    <!-- 发表评论区 -->
    <div class="talk">
      <!-- 评论 -->
      <!-- <textarea type="text"> -->
      <textarea name="" id="" cols="30" rows="10" placeholder="互动一下吧..."></textarea>
      <!-- 点赞 -->
      <div class="like">
        <img src="../assets/imgs/like.png" alt="">
      </div>
      <span>3</span>
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
    background: #fff;
  }
  .roadShare img{
    width: 100%;
    overflow: hidden;
  }
  .roadShare .tips{
    display: flex;
  }
  .roadShare .tips h6{
    /* width: 100%; */
    background: #e4eff6;
    border-radius: 5px;
    padding: 0 5px;
    margin: 10px 0px 10px 10px;
    color: #0073bc;
  }
  .roadShare .title{
    padding: 0px 10px 10px;
    font-size: 20px;
  }
  .roadShare .author{
    padding: 10px;
    display: flex;
  }
  .roadShare .author img{
    width: 45px;
    margin-right: 10px;
  }
  .roadShare .author span,.roadShare .talker span{
    display: block;
    margin-top: 2px;
  }
  .roadShare .talker{
    padding: 10px 10px 0;
    display: flex;
  }
  .roadShare .talker img{
    width: 40px;
    margin-right: 10px;
  }
  .roadShare .author .time, .roadShare .talker .time{
    color: #999;
  }
  .roadShare .lead .head{
    height: 80px;
    font-size: 20px;
    text-align: center;
    position: relative;
  }
  .roadShare .lead .head .s{
    margin: 0 auto;
    width: 60px;
    height: 60px;
    line-height: 75px;
    border-radius: 50%;
    border: 1px solid #333;
  }
  .roadShare .lead .head .f{
    width: 100%;
    position: absolute;
    margin: 0 auto;
  }
  .roadShare .lead .head .t{
    width: 100%;
    position: absolute;
    top: 45px;
  }
  .roadShare .lead p{
    padding: 10px 30px;
    font-size: 15px;
  }
  .roadShare .content{
    margin: 10px;
    font-size: 14px;
  }
  .content img{
    margin-bottom: 5px;
  }
  .content p{
    text-indent: 20px;
  }
  .content .line{
    text-align: center;
    padding: 10px 0;
    font-size: 16px;
    color: #666;
  }
  .roadShare .talks p{
    padding: 10px;
    border-bottom: 1px solid #eee;
    font-size: 13px;
  }
  .roadShare .talk{
    position: fixed;
    display: flex;
    width: 100%;
    height: 40px;
    bottom: 0px;
    background-color: #fff;
  }
  .roadShare textarea{
    width: 80%;
    height: 60%;
    margin: 5px 8px;
    padding: 2px 5px;
    background: #eee;
    border: none;
  }
  .roadShare .talk img{
    width: 30px;
    margin: 4px 0;
  }
  .roadShare .talk span{
    font-size: 15px;
    color: #666;
    line-height: 40px;
  }
</style>
