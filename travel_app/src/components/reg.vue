<template>
  <div>
    <div class="beiJing">
      <div class="bJMask"></div>
    </div>
    <div class="ctn">
      <img @click="fanHui" src="@/assets/images/youJianTou.png" alt />
      <h2>请注册</h2>
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
      <button @click="reg">注册</button>
      <div class="yueDu">
          <input
            type="checkbox"
            v-model="yueDu"
            name="btn"
            id="btn1"
          />阅读并同意
          <a>《用户使用协议》</a>
          及
          <a>《隐私保护政策》</a>
        </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import { Toast } from "vant";
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      yueDu: false
    };
  },
  methods: {
    fanHui() {
      this.$router.push("/my");
    },
    reg() {
      var ureg = new RegExp(/^[a-z][a-zA-Z0-9_]{4,15}$/);
      var preg = new RegExp(/^[a-zA-Z]\w{5,17}$/);
      var u = this.uname;
      var p = this.upwd;
      if (!ureg.test(u)) {
        Toast.fail("用户名格式不正确");
        return;
      }
      if (!preg.test(p)) {
        Toast.fail("密码格式不正确");
        return;
      }
      if (this.yueDu == false) {
        Toast("请阅读并同意用户协议及隐私保护");
        return;
      }
      //发送ajax请求
      var url = "user/reg";
      this.axios
        .post(
          url,
          qs.stringify({
            uname: u,
            upwd: p
          })
        )
        .then(res => {
          Toast.success("注册成功");
          this.$router.push("/login");
          return
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.ctn > input {
  font-size: 0.9rem;
  color: #fff;
}
/* .ctn > .yueDu > a {
  color: #00dbc1;
}
.ctn > .yueDu > input {
  margin-right: 4px;
  color: #00dbc1;
  border: none;
}
.ctn > .yueDu {
  position: absolute;
  top: 400px;
  left: 50px;
  color: #fff;
  font-size: 0.7rem;
  display: flex;
  justify-items: center;
  height: 10px;
  line-height: 10px;
} */
.yueDu > a {
  color: #00dbc1;
}
.yueDu > div > div > input {
  margin-right: 4px;
  color: #00dbc1;
  border: none;
}
.yueDu {
  position: absolute;
  top: 400px;
  left: 50px;
  color: #fff;
  display: flex;
  justify-items: center;
  line-height: 10px;
  width: 100%;
  text-align: center;
}
.ctn > button {
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
.ctn > .yongHu {
  position: absolute;
  background: transparent;
  width: 70%;
  top: 225px;
  border-bottom: 1px solid #fff;
  padding: 10px;
  left: 50px;
}
.ctn > .miMa {
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
  background: url("../assets/images/291b76bb97ee4c62839077a5e49c85ff.jpg")
    no-repeat;
  background-size: 100% 100%;
}
.ctn {
  width: 90%;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0 auto;
}
</style>
