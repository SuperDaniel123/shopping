
<template>
    <div>
        <div class="pro_header">
            <i class="fa fa-angle-left fa-2x black" @click="getBack"></i>
            <!--头部选项组件-->
            <pro-tab @tabChildNode="showNode"></pro-tab>

            <i class="fa fa-ellipsis-v fa-lg more" @click="getShow"></i>
            <ul class="moreList" v-if="more">
                <li><i class="fa fa-home fa-lg"></i><span>Home</span></li>
                <li><i class="fa fa-search fa-lg"></i><span>Search</span></li>
                <li><i class="fa ffa-shopping-cart fa-lg"></i><span>Cart</span></li>
                <li><i class="fa fa-user fa-lg"></i><span>My account</span></li>
                <li><i class="fa fa-commenting fa-lg"></i><span>Message</span></li>
            </ul>
            
        </div>
        <!--页面切换组件-->
        <div class="por-slider">
            <keep-alive v-if="showChild === 0">
                <commodity></commodity>
            </keep-alive>

            <keep-alive v-if="showChild === 1">
                <pro-details></pro-details>
            </keep-alive>

            <keep-alive v-if="showChild === 2">
                <evaluate></evaluate>
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
import proTab from "@/components/productDetails/pro-tab/pro-tab"
import Commodity from '@/components/productDetails/commodity/commodity'
import ProDetails from '@/components/productDetails/pro-details/pro-details'
import Evaluate from '@/components/productDetails/evaluate/evaluate'
export default {
    
    components: {
        proTab,
        Commodity,
        ProDetails,
        Evaluate
    },
    // created(){

    // },
    data(){
        return{
            more:false,   //右侧开关
            showChild:0
        }
        
    },
    methods:{
        //返回上一页
        getBack(){
            this.$router.goBack()
        },
        getShow(){
            if(!this.more){
                this.more = true
            }else{
                this.more = false
            }
        },
        showNode(data){
            this.showChild = data;
        }
    }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
@import '../../common/css/pro-view.less';

.por-slider{
    margin:3rem 0 3.5rem 0;
}

</style>




