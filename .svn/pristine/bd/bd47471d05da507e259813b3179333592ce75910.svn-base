<template>
  <div> 
        <keep-alive>
            <main-index v-if="index==0"></main-index>
        </keep-alive>
        <keep-alive>
            <brand-list v-if="index==1"></brand-list>
        </keep-alive>
        <i-footer @indexNode="showChildNode"></i-footer>
  </div>
</template>

<script>
    
    import mainIndex from '@/base/index/main-index'
    import brandList from '@/base/brandList/brandList'
    import iFooter from '@/components/footer/i-footer'
    export default{
        components:{
            iFooter,
            mainIndex,
            brandList
        },
        data(){
            return{
                index:0
            }
            
        },
        methods: {
            showChildNode(data){
                this.index = data;
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
