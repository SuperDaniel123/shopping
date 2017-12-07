<template>
  <div>
      <div class="pro-tab">
          <router-link tag="div" class="tab-item" to="/proview/commodity">
                <span class="tab-link">Item</span>
            </router-link>
            <router-link tag="div" class="tab-item" to="/proview/prodetails">
                <span class="tab-link">Detail</span>
            </router-link>
            <router-link tag="div" class="tab-item" to="/proview/evaluate">
                <span class="tab-link">Feedback</span>
            </router-link>
      </div>
      <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default{

}
</script>

<style lang="less" scoped>
    // @import '../../../common/css/pro-view.less';
    .pro-tab{
        width:60%;
        margin:0 auto;
        background: none;
        height:3rem;
        display: flex;
        line-height: 3rem;
        font-size:1rem;
        .tab-item{
            flex: 1;
            text-align: center;
            .tab-link{
                padding-bottom: 5px;
                color: #333;
            }
            
        }
        .router-link-active{
            .tab-link{
                border-bottom: 2px solid #ED5564;
                color: #ED5564;
            }
        }
    }


</style>
