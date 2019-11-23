<template>
 <div>
  111
  <div class="title">
     <van-swipe :autoplay="3000" indicator-color="white">
     <van-swipe-item v-for="(item,i) of list" :key="i">
      <img class="lunbo" :src="item.pic" alt="" >
     </van-swipe-item>
     </van-swipe>
   </div>
 </div>
</template>

<script>
export default {
 data() {
  return {
      list:[
       {pic:require('@/assets/images/0d4fd1721b5f450d90171c24a465ee55.jpeg')},
       {pic:require('@/assets/images/f37297b8e0b343fc94138737b94464fc.png')},
       {pic:require('@/assets/images/291b76bb97ee4c62839077a5e49c85ff.jpg')},
      ]
  }
 },
}
</script>

<style scoped>
 .lunbo{
  width:100%;
  height:250px;
  z-index: 0;
 }
</style>
