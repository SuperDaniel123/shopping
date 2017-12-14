<template>
  <div>
        <i-header></i-header>

        <router-link to="/proview">proview</router-link>
        <i-footer></i-footer>
  </div>
</template>

<script>
    import iHeader from '@/components/header/i-header'
    import iFooter from '@/components/footer/i-footer'
    export default{
        components:{
            iHeader,
            iFooter
        },
        created () {
            this.loading()
        },
        methods: {
            loading(){
                this.$http.get('/api').then((res)=>{
                    console.log(res)
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
