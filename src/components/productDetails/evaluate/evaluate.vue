<template>
  <div>
    <tab v-model="index" prevent-default @on-before-index-change="switchTabItem" :custom-bar-width="getBarWidth">
      <tab-item selected>All</tab-item>
      <tab-item>Positive</tab-item>
      <tab-item>Neutral</tab-item>
      <tab-item>Negative</tab-item>
    </tab>
    <div v-if="index===0">All</div>
    <div v-if="index===1">Positive</div>
    <div v-if="index===2">Neutral</div>
    <div v-if="index===3">Negative</div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'

export default{
    components: {
        Tab,
        TabItem,
        Swiper,
        SwiperItem
    },
    data(){
        return{
            index: 0,
            getBarWidth: function (index) {
                return (index + 1) * 22 + 'px'
            },
        }
        
    },
    methods:{
        switchTabItem (index) {
            // console.log(this.$vux)
            this.$vux.loading.show({
                text: 'loading'
            })
            setTimeout(() => {
                this.$vux.loading.hide()
                this.index = index
            }, 500)
        },
        
    }
}
</script>

<style lang="less" >
.vux-tab{
    .vux-tab-item.vux-tab-selected {
        color: #ED5564 !important;
        border-bottom: 3px solid #ED5564
    }
    .vux-tab-bar-inner{
        background-color:#ED5564 ;
    }
}



</style>
