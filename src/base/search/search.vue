<template>
  <div class="search">
      <div class="header">
        <i class="fa fa-angle-left fa-2x black" @click="getBack"></i>
        <input type="text" v-model="keyword" class="search_inp" placeholder="search keyword" />
        <span class="go" @click="goneList(keyword)">Enter</span>
      </div>
      <div class="center">
          <ul class="recList">
              <li v-for="(item,index) in recList.keywordList" :key="index" v-text="item"></li>
          </ul>
          <div class="history">
              <h3>Search history</h3>
              <ul class="hisList">
                  <li v-for="(item,index) in hisList" :key="index" >{{item}}<i class="fa fa-times" @click="removeItem(item)"></i></li>
              </ul>
              <div v-if="this.hisList.length == 0" class="clear" style="color:#666">no record</div>
              <div v-if="this.hisList.length != 0" @click="removeAll" class="clear">Clear Search History</div>
          </div>
      </div>
  </div>
</template>

<script>
import {pageHeight} from '@/common/js/getObj.js'
export default {
    mounted () {
        pageHeight('.search');
        this.recommend();
        this.getStorage();
    },
    data(){
        return{
            keyword:'',
            recList:[],
            //储存历史数组，缓存用
            // arr:[],
            //储存历史数组
            hisList:[]
        }
    },
    methods:{
        //返回上一页
        getBack(){
            this.$router.goBack()
        },
        //跳转到列表页
        goneList(key){
            var flag = true;
            for(let i = 0; i <this.hisList.length; i++){
                if(this.hisList[i] == key){
                    flag = false;
                    continue;
                }
            }
            if(flag){
                if(!this.keyword){
                    alert("Please enter keywords")
                    return;
                }
                this.hisList.push(this.keyword)
                localStorage.setItem('hisList',JSON.stringify(this.hisList))
                localStorage.setItem('keyword',this.keyword)
                this.$router.push({path:'/productList'})
            }
            
        },
        //推荐列表
        recommend(){
            this.$ajax('/search/default/keyword','get',{})
                .then(res=>{
                    // console.log(res)
                    if(res.status != 200){
                        console.log('error');
                        return;
                    };
                    this.recList = res.data.datas;
                    // console.log(this.recList)
                }).catch(err => {
                    console.log(err)
                })
        },
        //获取缓存
        getStorage(){
            if(localStorage.getItem('hisList') == null){
                return;
            }
            this.hisList = JSON.parse(localStorage.getItem('hisList'));
        },
        //删除
        removeItem(str){
            this.hisList.forEach((item,index)=>{
                if(item == str){
                    this.hisList.splice(index,1)
                    localStorage.setItem('hisList',JSON.stringify(this.hisList))
                    return;
                }
            })
        },
        removeAll(){
            this.hisList = [];
            localStorage.removeItem('hisList')
        }
        
    }
}
</script>

<style lang="less" scoped>
.search{
    background: #eee;
    .header{
        height:3rem;
        background: #ffe600;
        width:100%;
        text-align: center;
        position: fixed;
        top:0;
        z-index: 100;
        font-family: Arial, Helvetica, sans-serif;
        .search_inp{
            width:70%;
            height:2.2rem;
            border-radius: 1rem;
            position: absolute;
            top:50%; 
            left: 50%;
            margin:-1.1rem 0 0 -35%;
            text-indent: 1rem;
            font-family: Arial, Helvetica, sans-serif;
        }
        .black{
            position: absolute;
            top:0;
            left:0;
            width:3rem;
            height: 3rem;
            line-height: 3rem;
            text-align: center;
        }
        .go{
            display: inline-block;
            position: absolute;
            top:0;
            right:0;
            padding:0 1rem;
            height: 3rem;
            line-height: 3rem;
            text-align: center;

        }
    }
    .center{
        padding-top:3rem;
        .recList{
            width:100%;
            background: #fff;
            box-sizing: border-box;
            padding:1rem;
            li{
                padding:0 0.5rem;
                display: inline-block;
                border:1px #eee solid;
                margin:0.5rem 1rem 0.5rem 0;
                border-radius: 1rem
            }
        }
        .history{
            background: #fff;
            h3{
                line-height: 3rem;
                font-size:1.1rem;
                background: #eee;
                text-indent: 1rem;
            }
            li{
                line-height: 3rem;
                position: relative;
                font-size:1.1rem;
                box-sizing: border-box;
                padding:0 1rem;
                border-bottom: 1px #eee solid;
                i{
                    position: absolute;
                    right:1rem;
                    top:50%;
                    margin-top:-0.5rem;
                }
            }
            .clear{
                line-height: 3rem;
                color:red;
                font-size:1.2rem;
                text-align: center;
                border-bottom:1px #eee solid;
            }
        }
    }
}

</style>
