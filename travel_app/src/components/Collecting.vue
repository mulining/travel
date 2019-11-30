<template>
  <div>
    <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" />
    <ul>
      <li>
        <img
          src="@/assets/images/283f55f175924b99bfa35431a9f7c5b9.jpg"
          alt=""
        />
        <div>
          <h4>苏州太湖一号房车营地</h4>
          <p>湖泊型</p>
        </div>
      </li>
      <li>
        <img
          src="@/assets/images/283f55f175924b99bfa35431a9f7c5b9.jpg"
          alt=""
        />
        <div>
          <h4>苏州太湖一号房车营地</h4>
          <p>湖泊型</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    }
  }
};
</script>

<style scoped>
ul > li > div > p {
  border: 1px solid #eee;
  display: inline-block;
  padding: 1px 3px;
  margin-top: 4px;
  color: #999;
}
ul > li > div > h4 {
  font-size: 0.96rem;
}
ul > li > div {
  margin-left: 10px;
  margin-top: 5px;
}
ul {
  width: 95%;
  margin: 10px auto 0;
}
ul > li {
  display: flex;
  background: #fff;

  margin: 10px 0;
}
ul > li > img {
  width: 30%;
  height: 80px;
}
</style>
