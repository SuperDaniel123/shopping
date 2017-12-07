<template>
  <div>
    <div class="slideBox">
      <swiper :list="slideList" style="width:100%;margin:0 auto;" :aspect-ratio="800/800" dots-position="center"></swiper>
      <div class="share">
        <span><i class="fa fa-heart"></i></span>
        <span><i class="fa fa-share-square-o"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
const slideData = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg',
    title: '送你一次旅行',
    fallbackImg: 'https://static.vux.li/demo/3.jpg'
  }]

export default{
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider
  },
  data(){
    return{
      slideList:slideData,
    }
  }
}
</script>

<style lang="less" scoped>
.slideBox{
  position: relative;
  .share{
    position:absolute;
    bottom: 2rem;
    right:1rem;
    span{
      text-align: center;
      float: right;
      margin-left: 1rem;
      border-radius: 50%;
      display: block;
      width:2rem;
      height: 2rem;
      line-height: 2rem;
      background: rgba(255,255,255,0.5);
      i{
        font-size:1.3rem;
      }
    }
  }
}
</style>
