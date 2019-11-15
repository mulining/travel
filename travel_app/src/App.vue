<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* 清除 默认样式 */
/* @charset "utf-8"; */
/* @charset "utf-8"; */

/* 禁用iPhone中Safari的字号自动调整 */
html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  /* 解决IOS默认滑动很卡的情况 */
  -webkit-overflow-scrolling: touch;
}

/* 禁止缩放表单 */
input[type="submit"],
input[type="reset"],
input[type="button"],
input {
  resize: none;
  border: none;
}

/* 取消链接高亮  */
body,
div,
ul,
li,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
input,
textarea,
select,
p,
dl,
dt,
dd,
a,
img,
button,
form,
table,
th,
tr,
td,
tbody,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* 设置HTML5元素为块 */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

/* 初始化 */
body,
div,
ul,
li,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
input,
textarea,
select,
p,
dl,
dt,
dd,
a,
img,
button,
form,
table,
th,
tr,
td,
tbody,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  margin: 0;
  padding: 0;
}
em,
i {
  font-style: normal;
}
ul,
li {
  list-style-type: none;
}
strong {
  font-weight: normal;
}

a {
  text-decoration: none;
  font-family: "Microsoft YaHei", Tahoma, Arial, sans-serif;
  color: #000;
}

ul,
ol {
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-family: "Microsoft YaHei";
}

input {
  font-family: "Microsoft YaHei";
}
/*单行溢出*/
.one-txt-cut {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/*多行溢出 手机端使用*/
.txt-cut {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* -webkit-line-clamp: 2; */
  -webkit-box-orient: vertical;
}
/* 移动端点击a链接出现蓝色背景问题解决 */
a:link,
a:active,
a:visited,
a:hover {
  background: none;
}
</style>
