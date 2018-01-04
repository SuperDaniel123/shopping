<template>
  <div >
      <div class="header">
          <i class="fa fa-angle-left fa-2x black" @click="getBack"></i>
          <input type="text" class="search" placeholder="search" />
          <i class="fa fa-ellipsis-h" @click="getShow"></i>
          <ul class="moreList" v-if="more">
                <li><i class="fa fa-home fa-lg"></i><span>Home</span></li>
                <li><i class="fa fa-search fa-lg"></i><span>Search</span></li>
                <li><i class="fa ffa-shopping-cart fa-lg"></i><span>Cart</span></li>
                <li><i class="fa fa-user fa-lg"></i><span>My account</span></li>
                <li><i class="fa fa-commenting fa-lg"></i><span>Message</span></li>
            </ul>
      </div>
      
  </div>
  
</template>

<script>


export default{
    data(){
        return{
            more:false
        }
         
    },
    methods:{
        getShow(){
            if(!this.more){
                this.more = true
            }else{
                this.more = false
            }
        },
        getBack(){
            window.history.go(-1)
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
    .black{
     display: block;
     position: absolute;
     width:2rem;
     height:3rem;
     line-height: 3rem;
     text-align: center;
     left:0;
        
    }
    .search{
        text-align: center;
        width:80%;
        line-height: 2.2rem;
        height: 2.2rem;
        color:#888;
        font-family: Arial, Helvetica, sans-serif;
        position: absolute;
        left: 2rem;
        top:0.4rem;
        border-radius: 2.2rem;
    }
    .fa-ellipsis-h{
        position: absolute;
        top:0;
        font-size:2rem;
        right:0;
        width:3rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
    }
}
.moreList{
        position:absolute;
        top:3rem;
        right: 0;
        background: rgba(0,0,0,0.6);
        i{
            color:#fff;
            display: inline-block;
            width:2rem;
            height:2rem;
            line-height: 2rem;
            text-align: center;
            vertical-align: middle;
            font-size:1rem;
        }
        span{
            display:inline-block;
            line-height: 2rem;
            min-width:7rem;
            text-align: center;
            max-width:10rem;
            color:#fff;
            font-size:1rem;
        }
    }
</style>