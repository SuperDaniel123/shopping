<template>
  <div>
      <search-header></search-header>
      <div class="content" style="height:auto">
          <ul class="leftNavList">
            <li v-for ='(item,index) in menuList' @click="getOpt(index,item.menuId)" :class="{active:index==nowIndex}" :key="index">{{item.menuData[0].name_e}}</li>
          </ul>
          <!--分类明细-->
            <ul class="rightDetail">
              <li v-for="(items,index) in detailsList" :key="index" v-if="index==nowIndex">{{index}}</li>
            </ul>
          
      </div>
  </div>
</template>

<script>
import searchHeader from '@/components/header/search-header'
import {getObj,pageHeight} from '@/common/js/getObj.js'
export default {
  components: {
      searchHeader
  },
  created () {
    this.getLeftNav()
  },
  mounted() {
    pageHeight('.content')
  },
  data(){
    return{
      menuList:[],      //导航列表数据
      detailsList:[],   //右侧列表数据
      nowIndex:0
    }
  },
  methods: {
    //获取左栏数据
    getLeftNav(){
      this.$http.get('/api/search/menunew').then(res=>{
        if(res.status !=200){
          alert('error!')
        }
        this.menuList=res.data.datas.menuList
        getObj(this.menuList,'menuData')
        this.detailsList.length = this.menuList.length
        console.log(this.menuList)
      })
    },
    getOpt(index,id){
      this.nowIndex = index;
      this.getDetails(index)
    },
    getDetails(index){
      this.detailsList[index] = this.menuList[index].menuItemList
      console.log(this.detailsList)
    }
  }
}
</script>

<style lang='less' scoped>
.content{
    width:100%;
    padding:3rem 0 3.5rem 0;
    box-sizing: border-box;
    background: #eee;
    
}

.leftNavList{
  float: left;
  background: #eee;
  width:8rem;
  max-height:100%;
  overflow-x: hidden;
  overflow-y: auto;
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

.leftNavList::-webkit-scrollbar{
  display:none
}
  .rightDetail{
    width:100%;
    height:100%;
    box-sizing: border-box;
    padding-left: 8.5rem;
    li{
      height:100%;
    }
  }

</style>

