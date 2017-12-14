<template>
  <div>
      <com-header :message="hTitle"></com-header>
      <div class="loginFrom">
          <group label-width="6rem" label-margin-right="2rem" label-align="right">
            <x-input title="tel-phone" v-model="dataFrom.tel" placeholder="Enter phone number"></x-input>
            <x-input title="PIN" v-model="dataFrom.pin" placeholder="PIN code"></x-input>
          </group>
          <div class="accept">
              <checker v-model="dataFrom.acceptKey" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item value="1" ></checker-item>
              </checker>
              <span>accept</span>
              <router-link to="" >Account registration rules</router-link>
          </div>
          <input type="button" value="Get code" class="codeBtn" :disabled="dataFrom.disable" @click="getTo"/>
          <p class="subMsg">There's a chance to get a mobile account</p>
      </div>

      <div class="loginBottom"><p>Copyright © 2007-2017 Zegobird</p></div>
  </div>
</template>

<script>
import {Group,XInput,Checker,CheckerItem} from 'vux'
import comHeader from '../../components/header/com-header'
export default {
  components:{
      Group,
      XInput,
      comHeader,
      Checker,
      CheckerItem
  },
  data(){
      return{
          hTitle:"Login",
          dataFrom:{
            tel:'',
            pin:'',
            acceptKey:'',
            disable:true
          }
          

      }
  },
  watch:{
      dataFrom:{
          handler(curVal){
              if(curVal.tel && curVal.pin && curVal.acceptKey =='1'){
                curVal.disable = false
              }else{
                curVal.disable = true
              }
          },
          deep:true
      }
  },
  methods:{
      getTo(){
          console.log(this.dataFrom)
      }
  }
}
</script>

<style lang="less" scoped>
    
    .loginFrom{
        margin-top:3rem;
        
        .codeBtn{
            width:80%;
            line-height: 3rem;
            height: 3rem;
            color:#fff;
            background-color:#48CFAE;
            font-size:1.2rem;
            font-family: Arial, Helvetica, sans-serif;
            display: block;
            margin:2rem auto;

        }
        .codeBtn:disabled{
            background-color:#eee;
        }
        .subMsg{
            text-align: center;
            color:#999
        }
    }
    .accept{
        width:80%;
        text-align: center;
        margin:1rem auto;
        span{
            color:#999;
            padding-right: 0.5rem;
        }
        a{
            color:#4B89DC
        }
        .vux-checker-box{
            width:1.2rem;
            height: 1.2rem;
            display: inline-block;
            vertical-align: middle;
            margin-right: 0.5rem;
        }
        .demo1-item {
            border: 1px solid #ececec;
            border-radius: 50%;
            padding: 0.5rem;
        }
        .demo1-item-selected {
            background: #48CFAE;
            border: 1px solid #48CFAE;
        }
    }
    .loginBottom{
        width:100%;
        position: fixed;
        bottom:0;
        line-height: 2rem;
        font-size:1rem;
        color:#999;
        left: 0;
        text-align: center;
    }
    .weui-cells{
        font-size:1rem !important;
    }
    .weui-input{
        font-family: Arial, Helvetica, sans-serif
    }
</style>
