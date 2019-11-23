<template>
  <div>
    <!-- Grid宫格 -->
    <van-grid class="grid" :column-num="2" :gutter="10" square>
      <!-- 切换列表 -->
      <van-grid-item v-for="(item,i) in grids[grid]" v-lazy="item.img" :key="i">
        <van-image :src="item.img" @click="pick(i)"/>
        <p>{{item.text}}</p>
        <img v-show="isShow[i]" src="../assets/pick.png" alt="">
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  props:[
    "grid",
  ],
  data(){
    return{
      isShow:[],
      grids:[
        [{img:"./static/images/dbai.jpg",text:"迪拜"},{img:"./static/images/lswjs.jpg",text:"拉斯维加斯"},{img:"./static/images/xa.jpg",text:"西安市"},{img:"./static/images/xg.jpg",text:"香港"},{img:"./static/images/tw.jpg",text:"台湾"},{img:"./static/images/jd.jpg",text:"京都"}],
        [{img:"./static/images/bj.jpg",text:"北京市"},{img:"./static/imgs/278660070981014132.jpg",text:"上海市"},{img:"./static/images/xa.jpg",text:"香港"},{img:"./static/imgs/3868824295069646760.jpg",text:"成都市"},{img:"./static/images/sy.jpg",text:"三亚市"},{img:"./static/imgs/3971655992166004676.jpg",text:"台北市"},{img:"./static/imgs/2809664543543009291.jpg",text:"哈尔滨市"},{img:"./static/imgs/0586421334080117600.jpg",text:"海口市"}],
        [{img:"./static/images/dbai.jpg",text:"迪拜"},{img:"./static/images/medf.jpg",text:"马尔代夫"},{img:"./static/images/ctd.jpg",text:"长滩岛"},{img:"./static/images/bld.jpg",text:"巴厘岛"},{img:"./static/images/mg.jpg",text:"曼谷"},{img:"./static/images/xjp.jpg",text:"新加坡"},{img:"./static/images/bhd.jpg",text:"北海道"},{img:"./static/images/mgw.jpg",text:"名古屋"},{img:"./static/images/nl.jpg",text:"奈良"},{img:"./static/images/jd.jpg",text:"京都"},{img:"./static/images/dban.jpg",text:"大阪"},{img:"./static/images/bty.jpg",text:"芭提雅"},{img:"./static/images/qm.jpg",text:"清迈"},{img:"./static/images/ylsl.jpg",text:"耶路撒冷"}],
        [{img:"./static/images/ctd.jpg",text:"长滩岛"},{img:"./static/images/mlqs.jpg",text:"毛里求斯"},{img:"./static/images/fj.jpg",text:"斐济"},{img:"./static/images/medf.jpg",text:"马尔代夫"},{img:"./static/images/xxld.jpg",text:"西西里岛"},{img:"./static/images/bld.jpg",text:"巴厘岛"}],
        [{img:"./static/images/bj.jpg",text:"北京市"}],
        [{img:"./static/images/ld.jpg",text:"伦敦"},{img:"./static/images/ytlk.jpg",text:"因特拉肯"},{img:"./static/images/bl.jpg",text:"巴黎"},{img:"./static/images/ns.jpg",text:"尼斯"},{img:"./static/images/lnw.jpg",text:"留尼旺"},{img:"./static/images/yd.jpg",text:"雅典"},{img:"./static/images/msk.jpg",text:"莫斯科"},{img:"./static/images/ml.jpg",text:"米兰"},{img:"./static/images/xxld.jpg",text:"西西里岛"}],
        [{img:"./static/images/xg.jpg",text:"香港"},{img:"./static/images/sdyg.jpg",text:"圣地亚哥"},{img:"./static/images/mg.jpg",text:"曼谷"},{img:"./static/images/lj.jpg",text:"丽江市"},{img:"./static/images/jd.jpg",text:"京都"},{img:"./static/images/bhd.jpg",text:"北海道"},{img:"./static/images/msk.jpg",text:"莫斯科"}],
        [{img:"./static/imgs/278660070981014132.jpg",text:"上海市"}],
        [{img:"./static/images/mlqs.jpg",text:"毛里求斯"},{img:"./static/images/asw.jpg",text:"阿斯旺省"},{img:"./static/images/dlbl.jpg",text:"的黎波里"},{img:"./static/images/tns.jpg",text:"突尼斯市"},{img:"./static/imgs/269446560370519451.jpg",text:"班加西"},{img:"./static/imgs/330316305195467557.jpg",text:"亚历山大省"},{img:"./static/imgs/296206474426173407.jpg",text:"开普敦"}],
        [{img:"./static/images/hhz.jpg",text:"皇后镇"},{img:"./static/images/pl.jpg",text:"帕劳全境"},{img:"./static/images/lnw.jpg",text:"留尼旺"},{img:"./static/images/kes.jpg",text:"凯恩斯市"},{img:"./static/images/sdyg.jpg",text:"圣地亚哥"},{img:"./static/images/ytlk.jpg",text:"因特拉肯"}],
        [{img:"./static/imgs/2502111287285243706.jpg",text:"台南市"},{img:"./static/imgs/3868824295069646760.jpg",text:"台中市"},{img:"./static/imgs/1999181034564276540.jpg",text:"新北市"},{img:"./static/imgs/0586421334080117600.jpg",text:"桃园市"},{img:"./static/imgs/5463456662534195278.jpg",text:"高雄市"},{img:"./static/imgs/0430201023916284143.jpg",text:"台北市"}],
        [{img:"./static/images/sdyg.jpg",text:"圣地亚哥"},{img:"./static/imgs/1152342764181140.jpg",text:"华盛顿"},{img:"./static/imgs/4108303248689745.jpg",text:"多伦多"},{img:"./static/imgs/10315126052099722.jpg",text:"渥太华"},{img:"./static/imgs/146762909668142235.jpg",text:"纽约"},{img:"./static/images/lswjs.jpg",text:"拉斯维加斯"}],
        [{img:"./static/images/sy.jpg",text:"三亚市"},{img:"./static/images/nl.jpg",text:"奈良"},{img:"./static/images/qm.jpg",text:"清迈"},{img:"./static/images/bty.jpg",text:"芭提雅"},{img:"./static/images/ld.jpg",text:"伦敦"},{img:"./static/images/xjp.jpg",text:"新加坡"}],
        [],
        [{img:"./static/imgs/167380009716277962.jpg",text:"苏克雷"},{img:"./static/imgs/190650498358987562.jpg",text:"巴西利亚"},{img:"./static/imgs/212223963141011371.jpg",text:"圣地亚哥"}],
        [{img:"./static/images/ns.jpg",text:"尼斯"},{img:"./static/images/mgw.jpg",text:"名古屋"},{img:"./static/images/yd.jpg",text:"雅典"},{img:"./static/images/bl.jpg",text:"巴黎"},{img:"./static/images/ml.jpg",text:"米兰"},{img:"./static/images/ylsl.jpg",text:"耶路撒冷"}],
        [],
        [{img:"./static/imgs/231404942662952035.jpg",text:"惠灵顿"},{img:"./static/images/fj.jpg",text:"斐济"},{img:"./static/images/pl.jpg",text:"帕劳全境"},{img:"./static/images/hhz.jpg",text:"皇后镇"},{img:"./static/images/kes.jpg",text:"凯恩斯市"},{img:"./static/imgs/252962346591486751.jpg",text:"悉尼"}]
      ]
    }
  },
  methods:{
    pick(i){
      if(this.isShow[i] == false){
        this.isShow.splice(i,1,true);
      }else{
        this.isShow.splice(i,1,false);
      }
    }
  },
  created() {
    for(var i = 0 ; i < this.grids[this.grid].length; i++){
      this.isShow[i] = false;
    }
  },
}
</script>

<style scoped>
  .grid .van-image{
    overflow: hidden;
    border-radius: 10%;
  }
  .grid .van-image__img{
    width: 107px;
  }
  .grid .van-grid-item__content {
    padding: 8px;
  }
  .grid [class*=van-hairline]::after{
    border: none;
  }
  .grid p{
    margin: -30px 0px 0px 0px;
    color: #fff;
    background-color:rgba(136, 135, 143, 0.25); 
    border-radius: 40%;
    font-weight: 600;
    z-index: 1;
    font-size: 15px;
    position: absolute;
  }
  .grid img{
    position: absolute;
    z-index: 1;
    margin: 25px 0px 0px 30px;
  }
  .grid .img{
    display: none;
  }
</style>
