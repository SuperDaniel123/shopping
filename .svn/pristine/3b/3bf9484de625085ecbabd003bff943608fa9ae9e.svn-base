<template>
  <div>
    <!--轮播图-->
    <div class="slideBox">
      <swiper :list="slideList" style="width:100%;margin:0 auto;" :aspect-ratio="800/800" dots-position="center"></swiper>
      <div class="share">
        <span><i class="fa fa-heart"></i></span>
        <router-link to="/login"><span><i class="fa fa-share-square-o"></i></span></router-link>
      </div>
    </div>

    <div class="describeBox">
      <div class="subLine">
        <h4>Black Hampton Comfortable</h4>
        <div class="price clearfix">
          <span><i class="fa fa-jpy"></i>19600</span>
          <div>Orders 0</div>
        </div>
      </div>

      <div class="lines"  @click="dataShow=true">
        <span>Please Selected color size</span>
      </div>
      <router-link to="/afterSale">
        <div class="lines">
          <span>Refund Information</span>
        </div>
      </router-link>


      <!--111111111111111111111111111111111111111111111111111111111111111111111-->
      <div class="lines">
          <small>Positive Feedback <b>Positive Feedback100%</b> (0Feedback)</small>
      </div>
    </div>



    <!-- <x-switch title="bottom" v-model="show11"></x-switch> -->



    <div class="recTeams">
      <div class="store-name"><i class="icon-store"></i><span>MuseCollection</span></div>
      <ul class="credit">
        <li><span>Description matches</span><b>5.0</b><i class="fa fa-line-chart"></i></li>
        <li><span>Service attitude</span><b>5.0</b><i class="fa fa-line-chart"></i></li>
        <li><span>Delivery speed</span><b>5.0</b><i class="fa fa-line-chart"></i></li>
      </ul>

      <div class="seller">
        <h3>Seller Recommendation</h3>
        <ul class="comTeams">
          <li><img /><span class="title">ယောက်ကျားလေးရှပ်အင်္ကျီတို</span><span class="pay"><small>&yen;</small>180000</span></li>
          <li><img /><span class="title">ယောက်ကျားလေးရှပ်အင်္ကျီတို</span><span class="pay"><small>&yen;</small>180000</span></li>
          <li><img /><span class="title">ယောက်က</span><span class="pay"><small>&yen;</small>180000</span></li>
          <li><img /><span class="title">ယောက်ကျားလေးရှပ်အင်္ကျီတို</span><span class="pay"><small>&yen;</small>180000</span></li>
          <li><img /><span class="title">ယောက်ကျာ</span><span class="pay"><small>&yen;</small>180000</span></li>
          <li><img /><span class="title">ယောက်ကျားလေးရှပ်အင်္ကျီတို</span><span class="pay"><small>&yen;</small>180000</span></li>
          <li><img /><span class="title">ယောက်ကျားလေးရှပ်အင်္ကျီတို</span><span class="pay"><small>&yen;</small>180000</span></li>
          <li><img /><span class="title">ယောက်ကျားလေးရှပ်အင်္ကျီတို</span><span class="pay"><small>&yen;</small>180000</span></li>
        </ul>
      </div>

        <popup v-model="dataShow" position="bottom" @on-show ='bodyHidden' @on-hide='bodyScroll'>
          <div class="position-vertical-demo">
            <div class="choice">
                <div class="pic"><img src="https://static.vux.li/demo/1.jpg" /></div>
                <div class="texts">
                  <h3><small>&yen;</small>6600</h3>
                  <ul class="astrict">
                    <li>Orders<span>3</span></li>
                    <li>Stock<span>14</span></li>
                  </ul>
                </div>
                <i class="fa fa-times close" @click="dataShow = false"></i>
            </div>

            <checker default-item-class="demo1-item" selected-item-class="demo1-item-selected">
              <div class="sel-title" v-text="choiceData.option1.title"></div>
              <checker-item :value="item" v-for="(item, index) in choiceData.option1.items" :key="index">{{item.value}}</checker-item>
            </checker>

            <checker default-item-class="demo1-item" selected-item-class="demo1-item-selected">
              <div class="sel-title" v-text="choiceData.option2.title"></div>
              <checker-item :value="item" v-for="(item, index) in choiceData.option2.items" :key="index">{{item.value}}</checker-item>
            </checker>


              <x-number title="Quantity" :min="1" :max="8" :value="1"></x-number>
            

            <div class="paybtn">
              <input type="button" value="Add to Cart" />
              <input type="button" value="BUY NOW" />
            </div>
          </div>
        </popup>

    </div>



  </div>
</template>

<script>
import { Swiper, Popup ,Checker, CheckerItem, XNumber } from 'vux'
const slideData = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
  }]
  // const handler = function (event) {
  //       event.preventDefault();
  //       event.stopPropagation();
  // };
export default{
  components: {
    Swiper,
    Popup,
    Checker, 
    CheckerItem,
    XNumber
  },
  data(){
    return{
      slideList:slideData,
      dataShow: false,
      choiceData:{
        option1:{
          title:'color :',
          items: [
            {
              key: '1',
              value: 'blue'
            }]
        },
        // -------------------------------------------
        option2:{
          title:'size :',
          items: [
            {
              key: '1',
              value: '29'
            },
            {
              key: '2',
              value: '30'
            },
            {
              key: '3',
              value: '31'
            },
            {
              key: '4',
              value: '32'
            },
            {
              key: '5',
              value: '33'
            }]
            //----------------------------------------
        }
      },
      
      option1:null

    }
  },
  methods:{
    bodyHidden(){
      document.body.style.overflowY='hidden';
    },
    bodyScroll(){
      document.body.style.overflowY='auto';
    }
  }
}
</script>

<style lang="less" scoped>
.slideBox{
  position: relative;
  .share{
    position:absolute;
    bottom: 2rem;
    right:1rem;
    span{
      text-align: center;
      float: right;
      margin-left: 1rem;
      border-radius: 50%;
      display: block;
      width:2rem;
      height: 2rem;
      line-height: 2rem;
      background: rgba(255,255,255,0.5);
      i{
        font-size:1.4rem;
        vertical-align: middle;
        color:#ED5564;
      }
    }
  }
}

.describeBox{
  background: #eee;
  padding-bottom:0.01rem;
  .subLine{
    padding:0 0.4rem;
    background: #fff;
    h4{
      line-height:3rem;
      font-size:1.3rem;
    }
    .price{
      padding-bottom: 0.5rem;
      border-bottom:1px solid #eee;
      span{
        color:#ED5564;
        font-size:2rem;
        i{
          font-size:1rem;
        }
      }
      div{
        margin-top:0.5rem;
        float:right;
        color:#888;
      }
    }
  }
}

.lines{
  padding:0 0.5rem;
  background:url("../../../common/image/arrow_right_b.png") no-repeat 97% center #fff;
  background-size:1rem;
  line-height: 3rem;
  margin-bottom:1rem;
  span{
    font-size:1.1rem;
    color:#888;
  }
  small{
    color:#888;
    b{
      color:#ED5564
    }
  }
}

.recTeams{
  width:100%;
  background: #fff;
  .store-name{
    padding:0 0.5rem;
    line-height: 3rem;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    .icon-store{
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      vertical-align: sub;
      margin-right: 0.5rem;
      background-image: url("../../../common/image/store_b.png");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 100%;
      opacity: 0.75;
    }
    span{
      font-size:1.5rem;
    }
  }
  .credit{
    display: flex;
    li{
      flex:1;
      text-align: center;
      padding:0.2rem 0;
      span{
        text-align: left;
        display:block;
        padding:0.5rem 0.5rem 0 0.5rem;
        font-size:1rem;
        line-height: 1.2rem;
        height: 2.4rem;
      }
      b{
        font-size:1rem;
        color:#ED5564;
        padding-right: 0.5rem;
      }

      i{
        font-size:1rem;
        color:#ED5564;
      }
    }
  }
}

.seller{
  margin-top: 1rem;
  width: 100%;
  h3{
    text-indent: 0.5rem;
    font-size:1.2rem;
  }
  .comTeams{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    li{
        box-sizing: border-box;
        padding:0.5rem;
        background-color: white;
        flex: 0 0 25%;
        // border: 1px solid red;
        img{
          height:8rem;
          width:100%;
          object-fit: cover;
        }
        span.title{ 
          width:100%;
          line-height: 1.2rem;
          max-height: 2.4rem;
          display: -webkit-box;  
          display: -moz-box;  
          overflow: hidden;  
          text-overflow: ellipsis;  
          word-break: break-all;  
          -webkit-box-orient: vertical;  
          -webkit-line-clamp:2;  
        }
        span.pay{
          color:#ED5564;
          font-size:1.2rem;
        }
    }
  }
}
.vux-popup-dialog{

  max-height: 80% !important;
  overflow-x: hidden;
}
.position-vertical-demo {
  background-color: #fff;
  min-height: 100%;
  box-sizing: border-box;
  padding: 1rem 1rem 3rem 1rem;
  position: relative;
  .choice{
    position: relative;
    height:6rem;
    .pic{
      position: absolute;
      // border: 1px solid #ED5564;
      width:6rem;
      height: 6rem;
      overflow: hidden;
      top:0;
      left: 0;
      img{
        width:100%;
        height: 100%;
        vertical-align: middle;
        object-fit: cover;
      }
    }


    .texts{
      padding-left:7rem;
      h3{
        color:#ED5564;
        font-size:1.3rem;
        line-height: 2.4rem;
      }
      .astrict{
        display: flex;
        margin-top: 0.5rem;
        width: 100%;
        li{
          flex:1;
          line-height: 2rem;
          font-size:1.1rem;
        }
      }
    }

    i.close{
      display: block;
      width:1.2rem;
      height:1.2rem;
      position: absolute;
      top:0;
      right: 0;
      text-align: center;
      vertical-align: middle;
    }
  }
  .paybtn{
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width:100%;
    input{
      flex:1;
      line-height: 2.5rem;
      color:#fff;
      font-family: Arial, Helvetica, sans-serif;
    }
    :nth-of-type(1){
      background: #ED5564
    }
    :nth-of-type(2){
      background: red
    }
  }
}
.vux-checker-box{
  margin:1rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
  .sel-title{
    padding-bottom: 0.8rem;
    font-size:1.5rem;
    color:#999;
  }
  .demo1-item {
    margin:0 0.5rem;
    background: #eee;
    line-height: 2rem;
    padding:0 1rem;
    border-radius: 1rem;
  }
  .demo1-item-selected {
    background: #ED5564;
    line-height: 2rem;
    color:#fff;
    padding:0 1rem;
    border-radius: 1rem;
  }
}

.weui-cell{
  padding:0 !important;
  font-size:1.2rem;
  .vux-number-selector{
    border:none;
    padding:0.5rem 0.5rem;
      svg{
        width:1rem;
        height: 1rem;
        fill:#888 !important;
      }
  }
  .vux-number-disabled{
      svg{
        width:1rem;
        height: 1rem;
        fill:#888 !important;
      }
    }
  .vux-number-input{
    border-top:none;
    border-bottom: none;
    border-color:#eee;
    font-size:1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    padding:0.5rem 0;
    width:3rem !important;
  }
}

.weui-cell::before{
    border:0 !important;
  }

</style>
