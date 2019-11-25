<template>
  <div>
    <van-nav-bar
      z-index="10"
      title="城市列表"
      left-text="返回"
      left-arrow
      fixed="true"
      @click-left="onClickLeft"
    />
    <van-index-bar style="margin-top:44px">
      <van-index-anchor index="A" />
      <van-cell title="阿坝藏族羌族自治州" />
      <van-index-anchor index="B" />
      <van-cell title="宝鸡市" />
      <van-cell title="保亭黎族苗族自治县" />
      <van-cell title="北京市" />
      <van-cell title="本溪市" />
      <van-index-anchor index="C" />
      <van-cell title="长沙市" />
      <van-cell title="成都市" />
      <van-index-anchor index="D" />
      <van-cell title="东营市" />
      <van-index-anchor index="F" />
      <van-cell title="佛山市" />
      <van-cell title="福州市" />
      <van-cell title="阜阳市" />
      <van-index-anchor index="G" />
      <van-cell title="甘孜藏族自治州" />
      <van-cell title="广元市" />
      <van-cell title="广州市" />
      <van-cell title="贵阳市" />
      <van-index-anchor index="H" />
      <van-cell title="杭州市" />
      <van-cell title="葫芦岛市" />
      <van-cell title="怀化市" />
      <van-cell title="黄山市" />
      <van-index-anchor index="J" />
      <van-cell title="济南市" />
      <van-cell title="济宁市" />
      <van-cell title="晋中市" />
      <van-index-anchor index="K" />
      <van-cell title="昆明市" />
      <van-index-anchor index="L" />
      <van-cell title="莱芜市" />
      <van-cell title="丽江市" />
      <van-cell title="临沂市" />
      <van-index-anchor index="N" />
      <van-cell title="南京市" />
      <van-cell title="南通市" />
      <van-cell title="宁波市" />
      <van-index-anchor index="Q" />
      <van-cell title="黔西南布依族苗族自治州" />
      <van-cell title="秦皇岛市" />
      <van-cell title="青岛市" />
      <van-index-anchor index="R" />
      <van-cell title="日照市" />
      <van-index-anchor index="S" />
      <van-cell title="上海市" />
      <van-cell title="石家庄市" />
      <van-cell title="苏州市" />
      <van-index-anchor index="W" />
      <van-cell title="威海市" />
      <van-cell title="潍坊市" />
      <van-cell title="芜湖市" />
      <van-index-anchor index="X" />
      <van-cell title="厦门市" />
      <van-cell title="湘潭市" />
      <van-cell title="湘西土家族苗族自治州" />
      <van-cell title="信阳市" />
      <van-cell title="徐州市" />
      <van-index-anchor index="Y" />
      <van-cell title="雅安市" />
      <van-cell title="烟台市" />
      <van-cell title="延边朝鲜族自治州" />
      <van-cell title="扬州市" />
      <van-cell title="伊春市" />
      <van-cell title="银川市" />
      <van-index-anchor index="Z" />
      <van-cell title="株洲市" />
      <van-cell title="镇江市" />
    </van-index-bar>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/more")
    }
  }
};
</script>

<style scoped>
</style>