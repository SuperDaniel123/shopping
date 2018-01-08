<template>
  <div>
      <search-header-pro></search-header-pro>
      <div class="storeContent">

      </div>
  </div>
</template>

<script>
import searchHeaderPro from "@/components/header/search-header-pro"
import {pageHeight} from "@/common/js/getObj.js"
// import {mapGetters} from 'vuex'
export default {
    components:{
        pageHeight,
        searchHeaderPro
    },
    computed: {
        // ...mapGetters([
        //     'setStore'
        // ])
    },
    created () {
      this.getStore()
      
    },
    mounted () {
        pageHeight('.storeContent')
    },
    data(){
        return{
            data:{

            },
            storeInt:{
                storeId:+this.$route.params.storeId,
                token:''
            }
        }
    },
    methods:{
        getStore(){
            // console.log(typeof this.storeInt)
            this.$ajax('/store/index','post',this.storeInt).then(res=>{
                if(res.status != 200){
                    alert('error!')
                    return;
                }
                this.data = res.data;
                console.log(this.data.datas)
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>

<style lang='less' scoped>
.storeContent{
    padding: 3rem 0;
    width:100%;
    box-sizing: border-box;
    
}
</style>
