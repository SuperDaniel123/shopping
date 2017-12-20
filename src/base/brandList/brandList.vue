<template>
  <div>
      <search-header></search-header>
      <div class="content" style="height:auto">
          <ul class="leftNavList">
            <li v-for ='item in menuList' :key="item.index">{{item.menuId}}</li>

          </ul>
      </div>
  </div>
</template>

<script>
import searchHeader from '@/components/header/search-header'
export default {
  components: {
      searchHeader
  },
  created () {
    this.getLeftNav()
  },
  mounted() {
    this.pageHeight()
  },
  data(){
    return{
      menuList:[]
    }
  },
  methods: {
    pageHeight(){
      let inHeight = window.screen.height
      let content = document.querySelector('.content')
      content.style.height = inHeight + 'px'
    },
    getLeftNav(){
      this.$http.get('/api/search/menunew').then(res=>{
        if(res.status !=200){
          alert('error!')
        }
        this.menuList=res.data.datas.menuList
      })
    }
  }
}
</script>

<style lang='less' scoped>
.content{
    width:100%;
    padding:3rem 0 3.5rem 0;
    box-sizing: border-box;
    position: relative;
}

.leftNavList{
  background: #eee;
  width:8rem;
  height:100%;
  overflow-x: hidden;
  overflow-y: auto;
  li{
    padding:0 0.5rem;
    font-size:1rem;
    border-bottom: 1px solid #eee;
    color:#666;
    line-height:2.5rem;
    background: #fff;
  }
}

.leftNavList::-webkit-scrollbar{
  display:none
}
</style>

