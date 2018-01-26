<template>
  <div>
      <div class="header">
        <i class="fa fa-angle-left fa-2x black" @click="getBack"></i>
        <input type="text" v-model="keyword" class="search_inp" placeholder="search keyword" />
        <span class="go" @click="goneList" >Enter</span>
      </div>
      <div class="center">
          
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            keyword:''
        }
    },
    methods:{
        //返回上一页
        getBack(){
            this.$router.goBack()
        },
        //跳转到列表页
        goneList(){

        },
        //推荐列表
        recommend(){
            
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
    font-family: Arial, Helvetica, sans-serif;
    .search_inp{
        width:70%;
        height:2.2rem;
        border-radius: 1rem;
        position: absolute;
        top:50%; 
        left: 50%;
        margin:-1.1rem 0 0 -35%;
        text-indent: 1rem;
        font-family: Arial, Helvetica, sans-serif;
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
    .go{
        display: inline-block;
        position: absolute;
        top:0;
        right:0;
        padding:0 1rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;

    }
}
.center{
    padding-top:3rem;
}
</style>
