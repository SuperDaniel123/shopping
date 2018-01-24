<template>
  <div class="store_info">
      <com-header :message="'Store Info'"></com-header>
       <div class="hTop">
           <img src="" class="storeLogo"/> 
           <div class="txTitle" @click="setInfo">EAGLES</div>
           <div class="like on">Like</div>
       </div>

       <ul class="storeList">
           <li><div class="lName">Item as Described:</div><div class="rInfo">5.0</div></li>
           <li><div class="lName">Communication:</div><div class="rInfo">5.0</div></li>
           <li><div class="lName">Shipping Speed:</div><div class="rInfo">5.0</div></li>
           <li><div class="lName">company name:</div><div class="rInfo f-ccc">EAGLES</div></li>
           <li><div class="lName">location:</div><div class="rInfo f-ccc">NO.4 asdasdasdasd</div></li>
           <li><div class="lName">Shop time:</div><div class="rInfo f-ccc">2017-10-06 18:20:00</div></li>
           <li><div class="lName">Contact number:</div><div class="rInfo f-ccc">12121212</div></li>
           <li><div class="lName">Operating hous:</div><div class="rInfo f-ccc"></div></li>
       </ul>
  </div>
</template>
 <script>
 import comHeader from "@/components/header/com-header"
 export default {
   components:{
       comHeader
   },
   mounted(){
       this.setInfo();
    //    console.log(this.info)
   },
   data(){
       return{
           info:{}
       }
   },
   methods: {
       setInfo(){

       }
   }
 }
 </script>
 
<style lang="less" scoped>
    @import "../../common/css/store.less";   
</style>
