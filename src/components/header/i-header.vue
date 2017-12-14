<template>
  <div >
      <div class="header">
          <input type="text" class="search" placeholder="search" />
          <div class="icon">
            <i class="fa fa-commenting-o"></i>
            <i class="fa fa-globe"></i>
          </div>
      </div>
      <swiper loop auto :list="demo06_list"></swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]

// const urlList = baseList.map((item, index) => ({
//   url: 'http://m.baidu.com',
//   img: item.img,
//   fallbackImg: item.fallbackImg,
//   title: `(可点击)${item.title}`
// }))
export default{
    components:{
        Swiper, 
        SwiperItem
    },
    data(){
        return{
            demo06_list: baseList
        }
    },
    methods:{
        demo06_onIndexChange(){
            
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
        width:70%;
        line-height: 2.2rem;
        height: 2.2rem;
        color:#888;
        font-family: Arial, Helvetica, sans-serif;
        position: absolute;
        left: 1rem;
        top:0.4rem;
        border-radius: 2.2rem;
    }
    .icon{
        display: flex;
        position: absolute;
        top:0.4rem;
        right:0.5rem;
        height: 2.2rem;
        width:4.5rem;
        text-align: center;
        i{
            flex:1;
            color:#fff;
            font-size:1.8rem;
            line-height: 2.2rem;
            vertical-align: middle;
        }
    }
}
</style>