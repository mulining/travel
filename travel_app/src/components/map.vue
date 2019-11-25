<template>
  <div>
    <van-nav-bar
      title="苏州太湖一号房车营地"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="amap-page-container">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
        <el-amap-circle-marker
          v-for="(marker, i) in markers"
          :key="i"
          :center="marker.center"
          :radius="10"
          :fill-color="marker.fillColor"
          :fill-opacity="marker.fillOpacity"
          :events="marker.events"
        ></el-amap-circle-marker>
      </el-amap>
    </div>
  </div>
</template>

<style>
.amap-page-container {
  height: 621px;
}
</style>

<script>
module.exports = {
  data() {
    return {
      zoom: 12,
      // 经纬度
      center: [120.42474699050904, 31.215710946646606],
      markers: [
        {
          // 圆心经纬度
          center: [120.42474699050904, 31.215710946646606],
          radius: 20,
          fillOpacity: 1,
          fillColor: "rgba(0,0,255,1)",
          events: {
            click: () => {
              alert("click");
            }
          }
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/zhenxuan1");
    }
  }
};
</script>
