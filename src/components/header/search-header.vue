<template>
  <div >
      <div class="header">
          <i class="fa fa-angle-left fa-2x black" @click="getBack"></i>
          <input type="text" class="search" placeholder="search" />
      </div>
      
  </div>
  
</template>

<script>


// const urlList = baseList.map((item, index) => ({
//   url: 'http://m.baidu.com',
//   img: item.img,
//   fallbackImg: item.fallbackImg,
//   title: `(可点击)${item.title}`
// }))
export default{
    
    methods:{
        getBack(){
            this.$router.goBack()
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    height:3rem;
    background: #ffe600;
    width:100%;
    position: fixed;
    top:0;
    z-index: 100;
    .search{
        text-align: center;
        width:80%;
        line-height: 2.2rem;
        height: 2.2rem;
        color:#888;
        font-family: Arial, Helvetica, sans-serif;
        position: absolute;
        left: 50%;
        margin-left:-40%;
        top:0.4rem;
        border-radius: 2.2rem;
    }
    .black{
        position: absolute;
        top:0;
        left:0;
        width:3rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
    }
}
</style>