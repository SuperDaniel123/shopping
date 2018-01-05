<template>
  <div>
      <search-header></search-header>
      <div class="content" style="height:auto">
        <div class="centBox">

          <ul class="leftNavList">
            <li v-for ='(item,index) in menuList' @click="getOpt(index,item.menuId)" :class="{active:index==nowIndex}" :key="index">{{item.menuData[0].name_e}}</li>
          </ul>
          <!--分类明细-->
            <ul class="rightDetail">
              <li v-for="(items,index) in detailsList" :key="index" v-if="index==nowIndex">
                <div v-for="classify in items" :key="classify.index" class="childList">
                  <span v-text="classify.itemData.name_e"></span>
                  <ul>
                    <li v-for="single in classify.subitemData" :key="single.index" @click="goShop(single.type,single.data)">
                      <img :src="single.imgsrc+'@300w_300h'" />
                      <span v-text="single.name_e"></span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

        </div>
          
          
      </div>
  </div>
</template>

<script>
import searchHeader from '@/components/header/search-header'
import {getObj} from '@/common/js/getObj.js'
import {mapMutations} from 'vuex'
export default {
  components: {
      searchHeader
  },
  created () {
    this.getLeftNav()
    

  },
  mounted() {
    this.pageHeight('.content')
    
  },
  data(){
    return{
      menuList:[],      //导航列表数据
      detailsList:[],   //右侧列表数据
      nowIndex:0
    }
  },
  methods: {
    pageHeight(dom){
        let inHeight = window.screen.height
        let content = document.querySelector(dom)
        content.style.height = inHeight + 'px'
    },

    //判断跳转
    goShop(type,parameter){
      // console.log(type+'          '+parameter)
      switch(type){
        //店铺
        case "store" : 
          this.setStore(parameter)
          this.$router.push({path:'/store'})
          break;
        //分类搜索
        case "category" :
          alert(parameter);
          break;
        //商品详情
        case "goods":
          alert(parameter);
          break;
        //关键词搜索
        case "keyword":
          alert(parameter);
          break;
        //链接搜索
        case "url":
          alert(parameter);
          break;
      }
    },
    //获取左栏数据
    getLeftNav(){
      // return new Promise((resolve, reject)=>{
        
      // })
      this.$http.get('/api/search/menunew').then(res=>{
        if(res.status !=200){
          alert('error!')
        }
        this.menuList=res.data.datas.menuList
        getObj(this.menuList,'menuData')
        this.detailsList.length = this.menuList.length
        this.getOpt(0)
      })
    },
    getOpt(index,id){
      this.nowIndex = index;
      this.getDetails(index)
    },
    getDetails(index){
      if(this.detailsList[index]){
        return;
      }
      this.detailsList[index] = this.menuList[index].menuItemList
      for(let i =0 ; i <this.detailsList[index].length; i++){
        let count = this.detailsList[index][i];
        let pase = JSON.parse(count.subitemData)
        let lineName = JSON.parse(count.itemData);
        count.subitemData = pase;
        count.itemData = lineName;
      }
    },
    ...mapMutations({
      setStore: 'SET_STORE'
    })
  },

}
</script>

<style lang='less' scoped>
.content{
    width:100%;
    padding:3rem 0 3.5rem 0;
    box-sizing: border-box;
    background: #eee;
    .centBox{
      position: relative;
      height:100%;
    }
}

.leftNavList{
  position: absolute;
  background: #eee;
  width:8rem;
  max-height:100%;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 99;
  li{
    padding:1rem 0.5rem;
    font-size:1rem;
    border-bottom: 1px solid #eee;
    color:#666;
    line-height:1.2rem;
    background: #fff;
    text-align: center;
  }
  li.active{
    background: #eee;
  }
}


.rightDetail{
  width:100%;
  height:100%;
  position: absolute;
  overflow-y: auto;
  box-sizing: border-box;
  padding-left: 8.5rem;
  li{
    height:100%;
    .childList{
      span{
        display: inline-block;
        line-height: 2rem;
        font-size:1rem;
      }
      ul{
        display: flex;
        flex-wrap:wrap;
        li{
          width:33.333333333%;
          text-align: center;
          background: #fff;
          padding:0.5rem;
          box-sizing: border-box;
          border-right:1px solid #eee;
          border-bottom:1px solid #eee;
          img{
            width:5rem;
            height:5rem;
            object-fit: cover;
          }
          span{
            display: inline-block;
            width:100%;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
  
}
.leftNavList::-webkit-scrollbar,.rightDetail::-webkit-scrollbar {
    display: none;
}

</style>

