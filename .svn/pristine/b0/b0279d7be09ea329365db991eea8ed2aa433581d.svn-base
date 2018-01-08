<template>
  <div>
      <com-header :message="hTitle"></com-header>
      <div class="af-text">
          <p>ဤကုန်ပစ္စည်း သည် နိုင်ငံခြားစက်ရုံနှင့် ဆိုင်များမှ တိုက်ရိုက်ရောင်းချပေးခြင်းဖြစ်၍ ကျွန်တော်များ Company မှလဲ ပြန်လည်ပေးအမ်းခြင်း လုပ်၍မရသောကြောင့် ကုန်ပစ္စည်းနှင့် ငွေ ပြန်ပေး ၊ ပြန်အမ်းခြင်း မရကြောင်း အထူးအသိပေးအပ်ပါသည်။ . ထို့ကြောင့် ကုန်ပစ္စည်း၊ ဆိုဒ်နှင့် အရောင်များကို သေချာစွာ ရွေးချယ်ပြီးမှ အော်ဒါတင်ပေးပါရန် အထူးမေတ္တာရပ်ခံအပ်ပါသည်။</p>
      </div>
  </div>
</template>

<script>
import comHeader from '@/components/header/com-header'
export default{
    components:{
        comHeader
    },
    data(){
        return{
            hTitle:'Refund Information'
        }
    },
    methods:{
        //返回上一页
        getBack(){
            this.$router.goBack()
        }
    }
}
</script>

<style lang="less" scoped>
.af-text{
    padding:3rem 0.5rem 0 0.5rem;
    p{
        line-height: 1.8rem;
        color:#000;
        text-indent: 2rem;
    }
}
</style>
