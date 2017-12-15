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
                            <router-link to="/">
                                <img :src="item.imageUrl" />
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="column" >
                    <img class="title" :src="columnTitle[1].itemData[0].imageUrl" />
                </div>

                <div class="column">
                    <img class="title" :src="columnTitle[2].itemData[0].imageUrl" />
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
                column1:{}        

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
                    console.log(this.column1)
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
    }
}
.swiper-demo-img{
    img{
        width:100%;
    }
}
</style>
