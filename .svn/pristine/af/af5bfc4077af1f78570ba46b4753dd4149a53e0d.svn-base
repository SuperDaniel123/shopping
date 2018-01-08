<template>
  <div>
      <!-- <div class="pro-tab">
          <router-link tag="div" class="tab-item" to="/proview/commodity">
                <span class="tab-link">Item</span>
            </router-link>
            <router-link tag="div" class="tab-item" to="/proview/prodetails">
                <span class="tab-link">Detail</span>
            </router-link>
            <router-link tag="div" class="tab-item" to="/proview/evaluate">
                <span class="tab-link">Feedback</span>
            </router-link>
      </div> -->
      <div class="pro-tab">
        <tab :line-width="1" v-model="index" :custom-bar-width="getBarWidth">
            <tab-item selected @on-item-click="switchTabItem">Item</tab-item>
            <tab-item @on-item-click="switchTabItem">Detail</tab-item>
            <tab-item @on-item-click="switchTabItem">Feedback</tab-item>
        </tab>
      </div>
      <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux' 
export default{
    components:{
        Tab, 
        TabItem
    },
    data(){
        return{
            index:0,
            getBarWidth:(index)=>{
                return (index + 1) * 22 + 'px'
            }
        }
    },
    methods: {
        switchTabItem(index){
            this.$emit('tabChildNode',index)
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../../../common/css/pro-view.less';
    .pro-tab{
        width:60%;
        margin:0 auto;
        background: none;
        height:3rem;
        display: flex;
        line-height: 3rem;
        font-size:1rem;
        .vux-tab{
            width:100%;
            height:3rem;
            background: none;
            .vux-tab-item{
                font-size:1rem;
                line-height: 3rem;
                background: none;
            }
            .vux-tab-item.vux-tab-selected{
                color: #ED5564;
                border-bottom: 3px solid #ED5564
            }
        }   

    }

</style>

<style lang="less">
    .vux-tab-ink-bar{
        bottom:0.2rem !important;
        height:2px !important;  
        .vux-tab-bar-inner{
            background-color:#ED5564 !important;
        }
        
    }
</style>

