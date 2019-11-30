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
            <van-cell is-link @click="showPopup">
                <div style="font-size:16px">
                    <span style="margin-right:25px;">标</span>
                    <span>签</span>
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
            tab_list:[
                "全部","娱乐","休闲","探险"
            ],
            fileList: [ ],
            show: false,
            show1:false,
            value:[],
        }
    },
    methods:{
        quanbu(e){
            // this.value = this.tab_list[0]
            // this.value = this.tab_list[1]
            // this.value = this.tab_list[2]
            // this.value = this.tab_list[3]
            // console.log(e.target.innerText);
            if(this.value.length > 2){
                this.$toast("最多只能添加3个标签！");
                return;
            }
            if(!this.value.some((elem)=>{
                return elem == e.target.innerText;
            })){
                this.value.push(e.target.innerText);
            }
        },
        chacha(){
            this.show=false
        },
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