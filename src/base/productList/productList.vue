<template>
  <div class="productList">
      <search-header-pro></search-header-pro>
      <div class="screenTeam">
            <!--如果需要值改变同时显示，加v-model="value"-->
            <popup-picker :title="BestTit" class="ddd" :data="BestList" @on-show="onShow" @on-change="onChange" ></popup-picker>
            <span>Other</span>
            <span>Filter</span>
            <div class="style" @click="getStyle(style)">
                <i v-if="style==0" class="fa fa-list-ul"></i>
                <i v-if="style==1" class="fa fa-th-large"></i>
            </div>
        </div>
      <div class="content" >
            <div v-if="noMore == 0" class="noMore">
                <i class="fa fa-search "></i>
                <span>No more data</span>
            </div>
            <ul v-if="noMore == 1" :class="style == 0 ? 'cosList' : 'rowList'" >
                <li v-for="(item,index) in this.goodsList" :key="index">
                    <loader class="pic" :src="item.imageSrc" ></loader>
                    <!-- <img class="pic" :src="item.imageSrc" /> -->
                    <div class="text">
                        <p v-text="item.goodsName"></p>
                        <h1><img src="../../common/image/mian_o.png" />{{item.appPrice0}}</h1>
                        <span>Orders:0</span>
                    </div>
                </li>
            </ul>
          
          
      </div>
  </div>
</template>

<script>
import searchHeaderPro from '@/components/header/search-header-pro'
import {pageHeight} from "@/common/js/getObj.js"
import {PopupPicker} from 'vux'
import loader from "@/components/imgLoad/loader"
export default {
  components: {
      searchHeaderPro,
      PopupPicker,
      pageHeight,
      loader
  },
  mounted () {
      this.textStyle(),
      this.getAjax(),
      pageHeight('.content')
  },
  data(){
      return {
          fromData:{
              keyword:localStorage.getItem('keyword'),
              client:'wap',
              page:'1',
              sort:''
          },
          //key值
          key:localStorage.getItem('keyword'),
          goodsList:[],
          BestTit:'Best Match ▼',
          BestList: [['Best Match','Price : High to Low','Price : Low to High','Seller\'s Ratings']],
          //切换列表样式
          style:1,
          //没有产品
          noMore:1,
          
          
      }
  },

  methods: {
    //下拉菜单逻辑
    onShow () {
        this.textStyle()
    },
    // onHide (type) {
    //   console.log('on hide', type)
    // },
    onChange (val) {
        let d = val[0];
        switch(d){
            case 'Best Match' : {
                this.fromData.sort = '';
                this.getAjax()
                break;
            }
            case 'Price : High to Low' : {
                this.fromData.sort = 'price_desc';
                this.getAjax()
                break;
            }
            case 'Price : Low to High' : {
                this.fromData.sort = 'price_asc';
                this.getAjax()
                break;
            }
            case 'Seller\'s Ratings' : {
                this.fromData.sort = 'comment_desc';
                this.getAjax()
                break;
            }
        }
    },
    //下拉菜单逻辑结束

    //请求列表
    getAjax(){
        this.$ajax('/search','get',this.fromData).then(res =>{
            if(res.status != 200){
                console.log('error')
                return;
            }else if(res.data.datas.goodsList.length == 0){
                this.noMore = 0;
                return;
            }
            this.noMore = 1;
            this.goodsList = res.data.datas.goodsList;
            // console.log(this.goodsList)
        }).catch(err =>{
            console.log(err)
        })
    },


    //修改弹窗按钮样式
    textStyle(){
        let cancel = document.querySelector('.vux-popup-header-left')
        let Done = document.querySelector('.vux-popup-header-right')
        cancel.innerHTML = 'Cancel';
        Done.innerHTML = 'Done';
        Done.style.color = 'red'
    },
    //改变样式
    getStyle(o){
        if(!o){
            this.style = 1;
        }else if(o){
            this.style = 0;
        }
    }
    
  },
}
</script>

<style lang="less" scoped>
    @import '../../common/css/proList.less';
    .cosList{
        animation: opa .3s linear;
    }
    .rowList{
        animation: opa1 .3s linear;
    }
    @keyframes opa {
        0% {
            opacity:0
        }
        100% {
            opacity:1
        }
    }
    @keyframes opa1 {
        0% {
            opacity:0
        }
        100% {
            opacity:1
        }
    }
</style>
