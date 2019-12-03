<template>
  <div>
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="amap-page-container">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
        <el-amap-circle-marker
          v-for="(marker, i) in markers"
          :key="i"
          :center="center"
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
// module.exports = 
export default
{
  data() {
    return {
      zoom: 12,
      // 经纬度
      //此处只写[],会找不到坐标，需要给一个初始值
      center: [0,0],
      markers: [
        {
          // 圆心经纬度
          // center: [],
          radius: 20,
          fillOpacity: 1,
          fillColor: "rgba(0,0,255,1)",
          events: {
            click: () => {
              alert("click");
            }
          }
        }
      ],
      title:"",
    };
  },
  methods: {
    onClickLeft() {
      //保存当前页面上数据
      // sessionStorage.setItem('id',this.id);
      this.$router.push("/zhenxuan1/"+this.$route.params.id);
    }
  },
  created() {
    // var mid=this.$route.params.id;
    // console.log(mid);
    var url="details/camp/"+this.$route.params.id;
    this.axios
    .get(url)
    .then(res=>{
      var obj=res.data.data[0];
      console.log(obj);
      this.center=[obj.longitude,obj.latitude];
      this.title=obj.title;
    })
    .catch(err=>{
      console.log(err);
    })
  },
};
</script>
