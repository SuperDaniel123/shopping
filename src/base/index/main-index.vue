<template>
  <div>
      <i-header></i-header>
        <div class="content">
            <!--banner-->
            <swiper :show-dots="false" :aspect-ratio="138/320">
                <swiper-item class="swiper-demo-img" v-for="(item, index) in bannerImg.itemData" :key="index"><img :src="item.imageUrl"></swiper-item>
            </swiper>
            <!--column-->
            <div>
                <div class="column">
                    <img class="title" :src="columnTitle[0].itemData[0].imageUrl" />
                    <ul class="layout1 clearfix">
                        <li v-for="item in column1.itemData" :key="item.index">
                            <router-link to="/proview">
                                <img :src="item.imageUrl" />
                            </router-link>
                        </li>
                    </ul>
                    <ul class="layout2">
                        <li v-for="item in column2.itemData" :key="item.index">
                            <router-link to="/proview">
                                <img :src="item.imageUrl" />
                            </router-link>
                        </li>
                    </ul>
                    <ul class="layout0 clearfix">
                        <li v-for="item in column3.itemData" :key="item.index">
                            <router-link to="/proview">
                                <img :src="item.imageUrl" />
                            </router-link>
                        </li>
                    </ul>
                    <ul class="layout1 clearfix">
                        <li v-for="item in column5.itemData" :key="item.index">
                            <router-link to="/proview">
                                <img :src="item.imageUrl" />
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="column">
                    <img class="title" :src="columnTitle[1].itemData[0].imageUrl" />
                    <ul class="layout4">
                        <li v-for="item in column6.itemData" :key="item.index">
                            <router-link to="/proview">
                                <img :src="item.imageUrl" />
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="column" >
                    <img class="title" :src="columnTitle[2].itemData[0].imageUrl" />
                    <ul class="layout2">
                        <li v-for="item in column7.itemData" :key="item.index">
                            <router-link to="/proview">
                                <img :src="item.imageUrl" />
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="column">
                    <img class="title" :src="columnTitle[3].itemData[0].imageUrl" />
                    <ul class="layout5">
                        <li v-for="item in column8.itemData" :key="item.index">
                            <spinner type="bubbles" class="loadding"></spinner>
                            <x-img :src="item.imageUrl" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"/>
                            <p v-text="item.goodsName"></p>
                            <span><i class="fa fa-usd"></i>{{item.goodsPrice}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import iHeader from '@/components/header/i-header'
import { Swiper, SwiperItem, XImg, Spinner } from 'vux'
import {getObj} from '@/common/js/getObj.js'
    export default{
        components:{
            iHeader,
            Swiper, 
            SwiperItem,
            XImg,
            Spinner
        },
        data(){
            return{
                dataTeam:'',           //首页所有数据对象
                bannerImg:{},          //banner
                columnTitle:[           //分类标题
                    {
                        itemData:[
                            {imageUrl:''}
                        ]
                    },
                    {
                        itemData:[
                            {imageUrl:''}
                        ]
                    },
                    {
                        itemData:[
                            {imageUrl:''}
                        ]
                    },
                    {
                        itemData:[
                            {imageUrl:''}
                        ]
                    }
                ],
                column1:{},             //左一右二图片模块
                column2:{},             //四列单行小图模块
                column3:{},             //左一右二图片模块
                column4:{},             //三列单行图片模块
                column5:{},             //左一右二图片模块
                column6:{},              //三行单行图片
                column7:{},              //单列单张大图模块
                column8:{}              //双列多行商品模块


            }
        },
        created () {
            this.loading();
            
        },
        methods: {
            loading(){
                this.$ajax('/','get',{}).then(res=>{
                    if(res.status != 200){
                        console.log('error')
                    }
                    this.dataTeam = res.data.datas.itemList;
                    getObj(this.dataTeam,'itemData')
                    this.bannerImg = this.dataTeam[0];          //banner
                    let title = [];
                    title.push(this.dataTeam[1],this.dataTeam[6],this.dataTeam[8],this.dataTeam[10])
                    this.columnTitle = title
                    this.column1 = this.dataTeam[2]
                    this.column2 = this.dataTeam[3]
                    this.column3 = this.dataTeam[4]
                    this.column4 = this.dataTeam[6]
                    this.column5 = this.dataTeam[5]
                    this.column6 = this.dataTeam[7]
                    this.column7 = this.dataTeam[9]
                    this.column8 = this.dataTeam[11]
                    console.log(this.dataTeam)
                })
                .catch(error=>{
                    alert(error)
                }) 
            },
            success (src, ele) {
                const span = ele.parentNode.querySelector('.loadding')
                ele.parentNode.removeChild(span)
            },
            error (src, ele, msg) {
                const span = ele.parentNode.querySelector('.loadding')
                span.innerText = 'load error'
            },
            
        }
        
    }
</script>

<style lang="less" scoped>
.vux-spinner{
    position: absolute;
    top:50%;
    left: 50%;
    margin-left:-14px;
    margin-top:-2rem;

    
}
.content{
    width:100%;
    margin:3rem auto 3.5rem;
    .column{
        width:100%;
        .title{
            max-width:100%;
            vertical-align: middle;
            border-bottom: 1px solid #eee;
        }
        .focusPic{
            img{
                width:100%;
            }
        }
        .layout1{
            height:18.8rem;
            li{
                float: left;
                display: block;
                width:50%;
                height:50%;
                box-sizing: border-box;
                border-bottom: 1px solid #eee;
                img{
                    width:100%;
                    height:100%;
                    vertical-align: middle;
                    object-fit: cover;
                }
            }
            li:nth-of-type(1){
                height:100%;
                border-right: 1px solid #eee;
            }
    
        }
        .layout0{
            li{
                float: left;
                display: block;
                width:50%;
                height:50%;
                // padding:0.3rem;
                box-sizing: border-box;
                border-bottom: 1px solid #eee;
                img{
                    width:100%;
                    height:100%;
                    vertical-align: middle;
                    object-fit: cover;
                }
            }
    
        }
        .layout2{
            display: flex;
            border-bottom: 1px #eee solid;
            li{
                flex:1;
                border-right:1px #eee solid;
                img{
                    width:100%;
                    vertical-align: middle;
                    object-fit: cover;
                }
            }
        }
        .layout3{
            li{
                padding:1rem 0;
            }
            li:nth-last-child(1){
                border-right: none;
            }
        }
        .layout4{
            display: flex;
            flex-wrap:wrap;
            border-bottom: #eee 1px solid;
            li{
                flex:1;
                img{
                    width:100%;
                }
            }
        }
        .layout5{
            display:flex;
            flex-wrap:wrap;
            li{
                width:50%;
                box-sizing: border-box;
                overflow: hidden;
                position: relative;
                img{
                    width:100%;
                }
                p{
                    color:#999;
                    max-height:2.4rem;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
                span{
                    color:red
                }
            }
            li:nth-of-type(odd){
                padding:0.5rem 0.5rem 0.5rem 1rem;
            }
            li:nth-of-type(even){
                padding:0.5rem 1rem 0.5rem 0.5rem;
            }
        }
    }
}
.swiper-demo-img{
    img{
        width:100%;
    }
}
</style>

