<template>
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
</template>

<style>
.amap-page-container {
  height: 665px;
}
</style>

<script>
module.exports = {
  data() {
    return {
      zoom: 12,
      // 经纬度
      center: [112.52642144177244, 37.86002466730839],
      markers: [
        {
          // 圆心经纬度
          center: [112.52642144177244, 37.86002466730839],
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
  }
};
</script>
