import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MRecommend from '../components/m-recommend'
import MHot from '../components/m-hot'
import MSearch from '../components/m-search'
import MDetail from '../components/m-detail'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/',
      name: 'MRecommend',
      component: MRecommend
    },
    {
      path: '/recommend',
      name: 'MRecommend',
      component: MRecommend
    }, {
      path: '/hot',
      name: 'MHot',
      component: MHot
    },
    {
      path: '/search',
      name: 'MSearch',
      component: MSearch
    },
    {
      /*params传参*/
      path: '/detail/:item',
      name: 'Detail',
      component: MDetail
    }
  ]
})
