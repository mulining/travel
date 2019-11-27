<template>
    <div>
        <div class="share_title">
            <router-link to="./road">
                <span><van-icon name="arrow-left" style="font-size:20px;color:#555;"/></span>
            </router-link>
            <p>发布游记</p>
            <span class="share_bar">发布</span>
        </div>
        <div class="share_pic">
           <van-uploader v-model="fileList" multiple preview-size="110px" :max-count="9"/>
        </div>
        <div>
            <van-cell-group>
                <van-field
                    v-model="message"
                    rows="6"
                    autosize
                    type="textarea"
                    placeholder="来一起唠嗑儿啊老弟"
                />
            </van-cell-group>
        </div>
        <div>
            <van-popup position="bottom" style="height:170px" v-model="show">
                <div  style="font-size:16px;padding-left:10px">
                <p>标&nbsp;&nbsp;&nbsp;签</p> 
                </div>
                <div ><p>请选择标签</p></div>
                <div ><p>全部</p></div>
                <div ><p>娱乐</p></div> 
                <div ><p>休闲</p></div>
                <div ><p>探险</p></div>
            </van-popup>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            fileList: [ ],
            show: false
        }
    },
    methods:{
        showPopup() {
      this.show = true;
    },
        afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
        }
    }
}
</script>
<style scoped>
    .share_title{
        display: flex;
        justify-content: space-between;
        line-height:20px;
        padding: 10px;
        font-size: 15px;
        align-items: center;
        border-bottom: 1px solid #9e9e9e78;
    }
     .share_bar{
        line-height: 25px;
        color: #fff;
        font-size: 14px;
        width: 45px;
        text-align: center;
        border-radius: 3px;
        background-color: #05c1bc;
    }
    .van-uploader{
     padding-top: 15px; 
     padding-left: 15px;
    }
</style>