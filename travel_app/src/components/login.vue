<template>
  <div>
    <div class="beiJing">
      <div class="bJMask"></div>
    </div>
    <div class="ctn">
      <img @click="fanHui" src="@/assets/images/youJianTou.png" alt />
      <router-link tag="p" to="/reg">账号密码注册</router-link>
      <h2>欢迎您，请登录</h2>
      <div class="ipt">
        <input
          class="yongHu"
          type="text"
          placeholder="请输入用户名"
          v-model="uname"
        />
        <input
          class="miMa"
          type="password"
          placeholder="请输入密码"
          v-model="upwd"
        />
        <button @click="login">立即登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import { mapMutations } from "vuex";
import { Toast } from "vant";
export default {
  data() {
    return {
      uname: "",
      upwd: "",
    };
  },
  methods: {
    ...mapMutations(["nickName"]),
    fanHui() {
      this.$router.push("/my");
    },
    login() {
      var ureg = new RegExp(/^[a-z][a-zA-Z0-9_]{4,15}$/);
      var preg = new RegExp(/^[a-zA-Z]\w{5,17}$/);
      var u = this.uname;
      var p = this.upwd;
      if (!ureg.test(u)) {
        Toast("用户名格式为开头小写字母，4-15位");
        return;
      }
      if (!preg.test(p)) {
        Toast("密码格式为字母开头，5-17位");
        return;
      }
      //发送ajax请求
      var url = "user/login";
      this.axios
        .post(
          url,
          qs.stringify({
            uname: u,
            upwd: p
          })
        )
        .then(res => {
          // console.log(res);//res.data.uid-->用户id
          if (res.data.code == 1) {
            Toast.success("登陆成功");
            // 根据用户id查询用户信息
            this.axios.get("user/personal").then(res=>{
              // 将用户信息，保存到vuex
              console.log(res);
              // <<<<<<<<<<<<<<<<<<<<<< 未完待续!!!!!
              this.$store.commit("fixUserInfo",res.data.data);
              this.$router.push("/my");
              this.$store.commit("userLogin",true);
              // >>>>>>>>>>>>>>>>>>>>>>>
            });
          } else {
            Toast("用户名不存在");
            this.uname="";
            this.upwd="";
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.ctn > p {
  position: absolute;
  top: 15px;
  right: -20px;
  color: #fff;
}
.ipt {
  display: flex;
  justify-content: space-around;
}
.ipt > input {
  font-size: 0.9rem;
  color: #fff;
}
.ctn > div > button {
  position: absolute;
  top: 340px;
  left: 51px;
  width: 75%;
  padding: 8px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #63e6dc, #00dbc1);
  border: none;
}
.ctn > h2 {
  font-weight: 600;
  font-size: 1.5rem;
  color: #fff;
  position: absolute;
  top: 70px;
  left: 25px;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: rgb(201, 201, 201) !important;
  font-size: 0.8rem;
}
.yongHu {
  position: absolute;
  background: transparent;
  width: 70%;
  top: 225px;
  border-bottom: 1px solid #fff;
  padding: 10px;
  left: 50px;
}
.miMa {
  position: absolute;
  width: 70%;
  border-bottom: 1px solid #fff;
  background: transparent;
  padding: 10px;
  top: 270px;
  left: 50px;
}
.ctn > img {
  position: absolute;
  left: 10px;
  top: 10px;
}
.beiJing > .bJMask {
  width: 100%;
  height: 100%;
  background: rgba(21, 21, 21, 0.4);
}
.beiJing {
  width: 100%;
  position: relative;
  height: 667px;
  background: url("../assets/images/d6cf8fbfc53d4dbf93dee23a227c530c.jpg")
    no-repeat;
  background-size: 100% 100%;
}
.ctn {
  width: 86%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
