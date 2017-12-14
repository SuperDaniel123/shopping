<template>
  <div >
      <div class="header">
        <i class="fa fa-angle-left fa-2x black" @click="getBack"></i>
        <span class="h-title">{{message}}</span>
        <span></span>
      </div>
      
  </div>
</template>

<script>
export default{
    props:{
        message:String
    },
    methods:{
        //返回上一页
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
    text-align: center;
    position: fixed;
    top:0;
    z-index: 100;
    .black{
        position: absolute;
        top:0;
        left:0;
        width:3rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
    }
    .h-title{
        display: inline-block;
        line-height: 3rem;
        font-size:1.2rem;
        color:#000;
    }
}
</style>