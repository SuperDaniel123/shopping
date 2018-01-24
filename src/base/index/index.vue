<template>
  <div> 
        <keep-alive>
            <main-index v-if="index==0"></main-index>
        </keep-alive>
        <keep-alive>
            <brand-list v-if="index==1"></brand-list>
        </keep-alive>

        <keep-alive>
            <member v-if="index==3"></member>
        </keep-alive>
        <i-footer @indexNode="showChildNode"></i-footer>
  </div>
</template>

<script>
    
    import mainIndex from '@/base/index/main-index'
    import brandList from '@/base/brandList/brandList'
    import iFooter from '@/components/footer/i-footer'
    import member from '@/base/member/member'
    
    export default{
        components:{
            iFooter,
            mainIndex,
            brandList,
            member
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
