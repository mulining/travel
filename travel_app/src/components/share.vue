<template>
    <div>
        <div class="share_title">
            <router-link to="./road">
                <span><van-icon name="arrow-left" style="font-size:20px;color:#555;"/></span>
            </router-link>
            <p>发布游记</p>
            <span class="share_bar" @click="share">发布</span>
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
            <van-cell is-link @click="showPopup">
                <div style="font-size:16px">
                    标签
                </div>
                <div class="show_value">
                    <p class="showzhi" v-for="(item,i) of value" :key="i" >{{item}}</p>
                </div>
            </van-cell>
            <van-popup class="tab_mod" v-model="show" position="bottom"  :style="{ height: '25%'}" >
                <div class="tab_info">
                    <span style="font-size:16px;color:#000;">请选择标签</span>
                        <span>
                            <van-icon @click="chacha" name="cross" size="20px"/>
                        </span>
                </div>
                <div class="select_tab" @click="quanbu" v-for="(item, i) of tab_list" :key="i">{{item}}</div>
            </van-popup>
            
            <router-link to="./myPlace">
                <van-cell is-link>
                        <div style="font-size:16px" >
                            <span style="margin-right:25px;">我的位置</span>
                        </div>
                </van-cell>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:"",//用户的文字信息
            tab_list:[
                "全部","娱乐","休闲","探险"
            ],
            fileList: [ ], //上传的照片路径
            show: false,
            show1:false,
            value:[], //接收用户选择的标签
        }
    },
    methods:{
        quanbu(e){ //标签添加限制方法
            if(this.value.length > 2){
                this.$toast("最多只能添加3个标签！");
                return;
            }
            if(!this.value.some((elem)=>{
                return elem == e.target.innerText;
            })){
                // 再次判断点击全部时，
                if(e.target.innerText != "全部"){
                    this.value.push(e.target.innerText);
                }else{
                    let all = ["娱乐","休闲","探险"]
                    this.value = all;
                    // 同时关闭弹框
                    this.show=false
                }
                
            }
        },
        chacha(){ //关闭页面
            this.show=false
        },
        showPopup() {
            this.show = true;
        },
        afterRead(file) { //这是什么方法？
            // 此时可以自行将文件上传至服务器
            console.log(file);
        },
        //提交发布
        share(){
            console.log(this.message);
            console.log(this.fileList);//参数：content:""  file:{name:"",size:"",type:""}
            console.log(this.value);
            // 收集用户数据
            let discuss = this.message;//评论
            let pic = this.fileList.content;//图片base64位
            let label = this.value; //标签
            // let  // 经度
            // let    // 纬度
            // 将数据添加到用户数据表中
            let url = "";
            // this.axios.post(url,qs.stringify({

            // }))
            // 更新列表，将最新数据显示在前面
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
    .tab_info{
        display: flex;
        justify-content: space-between;
        padding: 4px 10px;
        
        align-items: center;
        border-bottom: 1px solid#99999930;
    }
    .tab_mod{
        color:#555;
        font-size: 15px;
    }
    .select_tab{
            padding: 5px 15px;
    border-bottom: 1px solid #99999930;
    }
    .show_value{
        display: flex;
        justify-content: flex-end;
        width: 80%;  
    } 
    .van-cell__value{
        display: flex;
    }
    .showzhi{
        border-radius: 2px;
        font-size: 10px;
        height: 14px;
        margin-right: 5px;
        padding: 2px 3px;
        border: 1px solid #999;
        line-height: 14px;
    }
</style>