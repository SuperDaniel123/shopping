<template>
  <div>
      <search-header-pro></search-header-pro>
      <!--content-->
      <div class="storeContent">
          <div class="shop_info">
              <img class="banner" :src="this.info.storeBannerUrl" />
              <div class="head_portrait">
                  <img :src="this.info.storeLogoUrl + '@150w_150h'" />
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
export default {
    components:{
        pageHeight,
        searchHeaderPro
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
            info:{}
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
                console.log(data)
            }).catch(error=>{
                console.log(error)
            })
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
        overflow-x: hidden;
        position:relative;
        .banner{
            width:100%;
            vertical-align: middle;
        }
        .head_portrait{
            position: absolute;
            bottom:0.5rem;
            left:0.5rem;
            img{
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
}
</style>
