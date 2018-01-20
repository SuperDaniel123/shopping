<template>
  <div class="loader">
      <spinner type="bubbles" class="loadding"></spinner>
      <x-img :src="this.src"  @on-success="success" @on-error="error" class="ximg" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
  </div>
</template>

<script>
import {XImg,Spinner} from 'vux'
export default {
    components:{
        XImg,
        Spinner
    },
    props:{
        src:String
    },
    data(){
        return{

        }
    },
    methods:{
        success (src, ele) {
            const span = ele.parentNode.querySelector('.loadding')
            ele.parentNode.removeChild(span)
        },
        error (src, ele, msg) {
            const span = ele.parentNode.querySelector('.loadding')
            span.innerText = 'load error'
        },
    }
}
</script>

<style lang="less" scoped>
    .loader{
        position: relative;
        width:100%;
        max-width:100%;
        max-height: 15rem;
        img{
            display: inline-block;
            object-fit: cover;
            width:100%;
            height: 100%;
        }
        .loadding{
            position: absolute;
            top:50%;
            left: 50%;
            margin:-14px 0 0 -14px;
            
        }
    }
</style>
