<template>
  <div class="ifooter">
    <router-link to="/"><div class="child"><i class="fa fa-home fa-lg"></i><span>Home</span></div></router-link>
    <router-link to="/"><div class="child"><i class="fa fa-list-ul fa-lg"></i><span>Category</span></div></router-link>
    <router-link to="/"><div class="child"><i class="fa fa-shopping-cart fa-lg"></i><span>Cart</span></div></router-link>
    <router-link to="/"><div class="child"><i class="fa fa-user fa-lg"></i><span>Me</span></div></router-link>
  </div>
</template>

<script>
    export default{

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
    a{
      flex:1;
      .child{
        i{
          padding:0.8rem 0 0.2rem;
        }
        
        text-align: center;
        span{
          display: block;
        }
      }
    }
    
  }
</style>
