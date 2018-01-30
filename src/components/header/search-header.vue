<template>
  <div >
      <div class="header">
          <!-- <i class="fa fa-angle-left fa-2x black" @click="getBack"></i> -->
          <router-link type="text" class="search" to="/search" >search</router-link>
          <i class="fa fa-commenting-o"></i>
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
        background: #fff;
        color:#888;
        font-family: Arial, Helvetica, sans-serif;
        position: absolute;
        left: 2rem;
        top:0.4rem;
        border-radius: 2.2rem;
    }
    .fa-commenting-o{
        position: absolute;
        top:0;
        font-size:2rem;
        right:0;
        width:3rem;
        height: 3rem;
        color:#fff;
        line-height: 3rem;
        text-align: center;
    }
}
</style>