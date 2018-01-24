<template>
  <div>
      <search-header-pro></search-header-pro>
      <!--content-->
      <div class="storeContent">
          <div class="shop_info">
              <img class="banner" :src="this.info.storeBannerUrl" />
              <div class="head_portrait" >

                  <router-link :to='"/store/"+ this.$route.params.storeId + "/info"' >
                  <img class="errImg" src="../../common/image/err-img.png" />
                  <!--头像-->
                  <x-img :src="this.info.storeLogoUrl + '@150w_150h'"  @on-success="head_success" @on-error="head_error" class="dh" error-class="ximg-error" container="#vux_view_box_body"></x-img>
                  </router-link>
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
                <swiper v-model="index" height="15rem" :show-dots="false">
                    <swiper-item>
                        <ul class="top-list">
                            <li v-for="(item,index) in this.liked" :key="index">
                                <a @click="goLink()">
                                    <img :src="item.imageSrc" alt="" />
                                    <div class="text">
                                        <span class="ids">Orders:<em v-text="item.goodsSaleNum"></em></span>
                                        <span class="pay">{{item.appPrice0}}</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </swiper-item>
                    <swiper-item>
                        <ul class="top-list">
                            <li v-for="(item,index) in this.selling" :key="index">
                                <a @click="goLink()">
                                    <img :src="item.imageSrc" alt="" />
                                    <div class="text">
                                        <span class="ids">Orders:<em v-text="item.goodsSaleNum"></em></span>
                                        <span class="pay">{{item.appPrice0}}</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </swiper-item>
                </swiper>
                <!--商品列表-->
                <div class="goodslist">
                    <h3>Seller Recommendation</h3>
                    <ul class="goodsteam">
                        <li v-for="(item,index) in this.goodsList" :key="index">
                            <loader :src = "item.imageSrc + '@180w_180h'"></loader>
                            <p v-text="item.goodsName"></p>
                            <span v-text="item.appPrice0"></span>
                        </li>
                    </ul>
                </div>
          </div>
          <div class="storeFooter">
              <div class="menu">Store Categories</div>
              <div class="menu">All The Goods</div>
              <div class="menu">Contact</div>
          </div>
      </div>
      <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import searchHeaderPro from "@/components/header/search-header-pro"
import {pageHeight} from "@/common/js/getObj.js"
// import {mapGetters} from 'vuex'
import { Tab,TabItem,Swiper,SwiperItem,XImg,Spinner } from 'vux'
import loader from "@/components/imgLoad/loader"

export default {
    components:{
        pageHeight,
        searchHeaderPro,
        Tab,
        TabItem,
        Swiper,
        SwiperItem,
        XImg,
        Spinner,
        loader
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
            index:0,
            //top liked
            liked:[],
            //top selling
            selling:[],
            //商品列表
            goodsList:[]
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
                this.liked = data.storeRankList.collectdesc;
                this.selling = data.storeRankList.salenumdesc;
                this.goodsList = data.recGoodsList;
                console.log(data)
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
        },
        goLink(){
            this.$router.push({
                path:'/proview'
            })
        }
        
    }
}
</script>

<style lang='less' scoped>
    @import '../../common/css/store.less' ;
</style>
