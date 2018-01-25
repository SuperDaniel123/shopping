<template>
  <div class="store_info">
      <com-header :message="'Store Info'"></com-header>
       <div class="hTop">
           <img :src="this.info.storeAvatarUrl" class="storeLogo"/> 
           <div class="txTitle" v-text="this.info.sellerName"></div>
           <div class="like on">Like</div>
       </div>

       <ul class="storeList">
           <li><div class="lName">Item as Described:</div><div class="rInfo" v-text="this.info.storeDeliverycredit"></div></li>
           <li><div class="lName">Communication:</div><div class="rInfo" v-text="this.info.storeDesccredit"></div></li>
           <li><div class="lName">Shipping Speed:</div><div class="rInfo" v-text="this.info.storeServicecredit"></div></li>
           <li><div class="lName">company name:</div><div class="rInfo f-ccc" v-text="this.info.companyName"></div></li>
           <li><div class="lName">location:</div><div class="rInfo f-ccc" v-text="this.info.storeAddress"></div></li>
           <li><div class="lName">Shop time:</div><div class="rInfo f-ccc" v-text="this.info.storeCreateTime"></div></li>
           <li><div class="lName">Contact number:</div><div class="rInfo f-ccc" v-text="this.info.storePhone"></div></li>
           <li><div class="lName">Operating hous:</div><div class="rInfo f-ccc"></div></li>
       </ul>
  </div>
</template>
 <script>
 import comHeader from "@/components/header/com-header"
 import {mapGetters} from 'vuex'
 export default {
   components:{
       comHeader
   },
   computed:{
       ...mapGetters([
               'storeInfo'
           ])
   },
   mounted(){
       this.setInfo ();
   },
   data(){
       return{
           info:{}
       }
   },
   methods: {
        setInfo (){
            if(JSON.stringify(this.storeInfo) == '{}'){
                window.history.back();
                return;
            }
            this.info = this.storeInfo;
            let grade = {
                storeDeliverycredit:this.info.storeDeliverycredit,
                storeDesccredit:this.info.storeDesccredit,
                storeServicecredit:this.info.storeServicecredit
            }
            this.point(grade)
        },
        //浮点数
        point(obj){
            for(let prop in obj){
                if(obj[prop].toString().indexOf('.') <= -1){
                    obj[prop] = obj[prop] + '.0'
                    this.info[prop] = obj[prop];
                }else{
                    return;
                }
            }
        }
   }
 }
 </script>
 
<style lang="less" scoped>
    @import "../../common/css/store.less";   
</style>
