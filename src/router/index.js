import Vue from 'vue'
import Router from 'vue-router'
import rootLayer from '@/components/rootLayer'
import proview from '@/base/proview/por-view'
// import Commodity from '../components/productDetails/commodity/commodity'
// import proDetails from '../components/productDetails/pro-details/pro-details'
// import evaluate from '../components/productDetails/evaluate/evaluate'
import index from '@/base/index/index'
import afterSale from '@/base/afterSale/afterSale'
import login from '@/base/login/login'
import store from '@/base/store/store'
import storeIndex from '@/base/store/storeIndex'
import info from '@/base/store/store_info'
import search from '@/base/search/search'

Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  routes: [
    {
      path:'/',
      name: 'rootLayer',
      component: rootLayer,
      children:[
        {
          path: '/',
          name: 'index',
          component: index
        },
        {
          path: '/afterSale',
          name: 'afterSale',
          component: afterSale
        },
        //产品详情
        {
          path: '/proview',
          name: 'proview',
          // redirect:'/proview/commodity',
          component: proview,
          // children:[
          //   {
          //     path:'commodity',
          //     component:Commodity
          //   },
          //   {
          //     path:'prodetails',
          //     component:proDetails
          //   },
          //   {
          //     path:'evaluate',
          //     component:evaluate
          //   }
          // ]
        },
        {
          path:'/login',
          name:'login',
          component:login
        },
        // {
        //   path:'/member',
        //   name:'member',
        //   component:member,
        //   children:[{
        //     path:'index',
        //     component:index
        //   }]
        // },
        {
          path:'/store/:storeId',
          redirect:'/store/:storeId',
          name:'store',
          component:store,
          children:[
            {
              path: '', 
              component:storeIndex 
            },
            {
              path:'info',
              component:info
            }        
          ]
        },
        {
          path:'/search',
          name:'search',
          component:search,
        }


      ]
    },
    
  ]
})
