<template>
  <div>
      <search-header-pro></search-header-pro>
      <!--content-->
      <div class="storeContent">
          <div class="shop_info">
              <img class="banner" :src="this.info.storeBannerUrl" />
              <div class="head_portrait" >
                  <img class="errImg" src="../../common/image/err-img.png" />
                  <x-img :src="this.info.storeLogoUrl + '@150w_150h'"  @on-success="head_success" @on-error="head_error" class="dh" error-class="ximg-error" container="#vux_view_box_body"></x-img>
                  <span v-text="this.info.storeName"></span>
              </div>
              <ul class="collect">
                  <div class="ect">Like</div>
                  <div class="fans">
                      <span v-text="this.info.storeCollect"></span>
                      <span>Fans</span>
                  </div>
              </ul>
          </div>
          <!--推荐-->
          <div class="rec_box">
                <h1>Top Of Store</h1>
                <tab :line-width="1"  active-color='#fc378c' custom-bar-width="6rem" v-model="index">
                    <tab-item selected>Top Liked</tab-item>
                    <tab-item>Top selling</tab-item>
                </tab>
                <swiper v-model="index" height="100px" :show-dots="false">
                    <swiper-item>
                        <div class="tab-swiper vux-center">1</div>
                    </swiper-item>
                    <swiper-item>
                        <div class="tab-swiper vux-center">2</div>
                    </swiper-item>
                </swiper>
          </div>
          <div class="storeFooter">
              <div class="menu">Store Categories</div>
              <div class="menu">All The Goods</div>
              <div class="menu">Contact</div>
          </div>
      </div>
  </div>
</template>

<script>
import searchHeaderPro from "@/components/header/search-header-pro"
import {pageHeight} from "@/common/js/getObj.js"
// import {mapGetters} from 'vuex'
import { Tab,TabItem,Swiper,SwiperItem,XImg } from 'vux'
export default {
    components:{
        pageHeight,
        searchHeaderPro,
        Tab,
        TabItem,
        Swiper,
        SwiperItem,
        XImg
    },
    computed: {
        // ...mapGetters([
        //     'setStore'
        // ])
    },
    created () {
      this.getStore()
      
    },
    mounted () {
        pageHeight('.storeContent')
    },
    data(){
        return{
            // data:{},
            //参数值
            storeInt:{
                storeId:+this.$route.params.storeId,
                token:''
            },
            //基本信息
            info:{},
            //推荐
            index:0
        }
    },
    methods:{
        getStore(){
            // console.log(typeof this.storeInt)
            this.$ajax('/store/index','post',this.storeInt).then(res=>{
                if(res.status != 200){
                    alert('error!')
                    return;
                }
                let data = res.data.datas;
                this.info = data.storeInfo
                // console.log(data)
            }).catch(error=>{
                console.log(error)
            })
        },
        head_success (src, ele) {
        const span = ele.parentNode.querySelector('.errImg')
        ele.parentNode.removeChild(span)
        },
        head_error (src, ele, msg) {
        const span = ele.parentNode.querySelector('.errImg')
        span.innerText = 'load error'
        }
    }
}
</script>

<style lang='less' scoped>
.storeContent{
    padding: 3rem 0;
    width:100%;
    box-sizing: border-box;
    .storeFooter{
        position: fixed;
        border-top:1px #eee solid;
        width:100%;
        bottom:0;
        left: 0;
        height: 3rem;
        box-sizing: border-box;
        background: #fff;
        display: flex;
        .menu{
            flex:1;
            text-align:center;
            line-height: 3rem;
            box-sizing: border-box;
            border-right:1px solid #eee;
        }
        .menu:last-child{
            border:none;
        }
    }
    
    .shop_info{
        width:100%;
        min-height: 10rem;
        // overflow-x: hidden;
        position:relative;
        .banner{
            width:100%;
            vertical-align: middle;
        }
        .head_portrait{
            position: absolute;
            bottom:0.5rem;
            left:0.5rem;
            .errImg,.dh{
                width:5rem;
                height:5rem;
                border-radius: 0.5rem;
                margin-right:1rem;
            }
            span{
                font-size:1.2rem;
                color:#fff;
                text-shadow:1px 1px 1px #000;
            }

        }
        .collect{
            display: flex;
            width:8rem;
            height:3.5rem;
            position: absolute;
            bottom: 1rem;
            right:0rem;
            div{
                flex:1;
                text-align: center;
                color:#fff;
            }
            div:first-child{
                line-height: 3.5rem;
                background: #ed5564;
            }
            div:last-child{
                background: #DB4453;
                box-sizing: border-box;
                height:100%;
                padding:0.5rem 0;
                span{
                    display: inline-block;
                    width:100%;
                }
            }
            
        }
    }
    .rec_box{
        h1{
            line-height: 3rem;
            font-size:1.2rem;
            text-indent: 1rem;
            border-bottom: 1px solid #eee;
        }
        
    }
}
</style>
