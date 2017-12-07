import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import proview from '../components/productDetails/por-view'
import Commodity from '../components/productDetails/commodity/commodity'
import proDetails from '../components/productDetails/pro-details/pro-details'
import evaluate from '../components/productDetails/evaluate/evaluate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/proview',
      name: 'proview/',
      redirect:'/proview/commodity',
      component: proview,
      children:[
        {
          path:'commodity',
          component:Commodity
        },
        {
          path:'prodetails',
          component:proDetails
        },
        {
          path:'evaluate',
          component:evaluate
        }
      ]
    }
  ]
})
