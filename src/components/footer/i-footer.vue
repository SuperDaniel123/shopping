<template>
  <div class="ifooter">
    <div class="child" @click="switchTabItem(0)"><i class="fa fa-home fa-lg"></i><span>Home</span></div>
    <div class="child" @click="switchTabItem(1)"><i class="fa fa-list-ul fa-lg"></i><span>Category</span></div>
    <div class="child" @click="switchTabItem(2)"><i class="fa fa-shopping-cart fa-lg"></i><span>Cart</span></div>
    <div class="child" @click="switchTabItem(3)"><i class="fa fa-user fa-lg"></i><span>Me</span></div>
  </div>
</template>

<script>
    export default{
      data(){
        return{

        }
      },
      methods:{
        switchTabItem(e){
          this.$emit('indexNode',e)
        }
      }
    }
</script>

<style lang="less" scoped>
  .ifooter{
    height: 3.5rem;
    width:100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    background: #fff;
    border:1px solid #eee;
      .child{
        flex:1;
        i{
          padding:0.8rem 0 0.2rem;
        }
        
        text-align: center;
        span{
          display: block;
        }
      }
    
  }
</style>
