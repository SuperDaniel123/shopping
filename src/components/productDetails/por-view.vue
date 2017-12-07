
<template>
    <div>
        <div class="pro_header">
            <i class="fa fa-angle-left fa-2x black" @click="getBack"></i>
            <!--头部选项组件-->
            <pro-tab></pro-tab>

            <i class="fa fa-ellipsis-v fa-lg more" @click="getShow"></i>
            <ul class="moreList" v-if="more">
                <li><i class="fa fa-home fa-lg"></i><span>Home</span></li>
                <li><i class="fa fa-search fa-lg"></i><span>Search</span></li>
                <li><i class="fa fa-cart-arrow-down fa-lg"></i><span>Cart</span></li>
                <li><i class="fa fa-user fa-lg"></i><span>My account</span></li>
                <li><i class="fa fa-commenting fa-lg"></i><span>Message</span></li>
            </ul>
            
        </div>
        <!--页面切换组件-->
        <div class="por-slider">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

        <div class="pro_footer">
            <ul>
                <li><i class="fa fa-whatsapp"></i><span>Chat</span></li>
                <li class="cart"><i class="fa fa-shopping-cart"></i><span>Cart</span><small>12</small></li>
                <li class="btn"><input type="button" value="BUY NOW"></li>
                <li class="btn"><input type="button" value="Add to Cart"></li>
            </ul>
        </div>
    </div>
</template>

<script>
// import { Tab, TabItem,Swiper, SwiperItem } from 'vux';
import proTab from "./pro-tab/pro-tab"
export default {
    components: {
        proTab
    },
    data(){
        return{
            more:false,   //右侧开关
        }
        
    },
    methods:{
        //返回上一页
        getBack(){
            window.history.go(-1);
        },
        getShow(){
            if(!this.more){
                this.more = true
            }else{
                this.more = false
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
@import '../../common/css/pro-view.less';

.por-slider{
    margin-top:3rem
}

</style>




