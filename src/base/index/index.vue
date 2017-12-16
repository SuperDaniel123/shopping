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
                    <ul class="layout1 clearfix">
                        <li v-for="item in column3.itemData" :key="item.index">
                            <router-link to="/proview">
                                <img :src="item.imageUrl" />
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="column" >
                    <img class="title" :src="columnTitle[1].itemData[0].imageUrl" />
                    <ul class="layout2 layout3">
                        <li v-for="item in column4.itemData" :key="item.index">
                            <router-link to="/proview">
                                <img :src="item.imageUrl" />
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="column">
                    <img class="title" :src="columnTitle[2].itemData[0].imageUrl" />
                    <div class="focusPic"><img :src="this.column5.itemData[0].imageUrl" /></div>
                    <ul class="layout4">
                        
                    </ul>
                </div>
            </div>
        </div>
        <router-link to="/proview">proview</router-link>
        <i-footer></i-footer>
  </div>
</template>

<script>
    import iHeader from '@/components/header/i-header'
    import iFooter from '@/components/footer/i-footer'
    import { Swiper, SwiperItem } from 'vux'
    export default{
        components:{
            iHeader,
            iFooter,
            Swiper, 
            SwiperItem
        },
        data(){
            return{
                dataTeam:{},           //首页所有数据对象
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
                    }
                ],
                column1:{},             //左一右二图片模块
                column2:{},             //四列单行小图模块
                column3:{},             //左一右二图片模块
                column4:{},             //三列单行图片模块
                column5:{
                    itemData:[
                        {
                            imageUrl:''
                        }
                    ]
                }              //单列单张大图模块

            }
        },
        created () {
            this.loading()
        },
        methods: {
            loading(){
                this.$http.get('/api').then(res=>{
                    if(res.status != 200){
                        console.log('error')
                    }
                    this.dataTeam = res.data.datas.itemList;
                    this.getObj()
                    this.bannerImg = this.dataTeam[0];          //banner
                    let title = [];
                    title.push(this.dataTeam[1],this.dataTeam[5],this.dataTeam[7])
                    this.columnTitle = title
                    this.column1 = this.dataTeam[2]
                    this.column2 = this.dataTeam[3]
                    this.column3 = this.dataTeam[4]
                    this.column4 = this.dataTeam[6]
                    this.column5 = this.dataTeam[8]
                    console.log(this.dataTeam)
                })
                .catch(error=>{
                    alert(error)
                }) 
            },
            //把itemData字符串转换成obj
            getObj(){
                let arr = this.dataTeam;
                for(let i = 0; i <arr.length; i++){
                    let str = arr[i].itemData;
                    let pase = JSON.parse(str);
                    arr[i].itemData = pase;
                }
            }
        }
    }
</script>

<style lang="less" scoped>
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
                padding:0.3rem;
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
            
        }
    }
}
.swiper-demo-img{
    img{
        width:100%;
    }
}
</style>
