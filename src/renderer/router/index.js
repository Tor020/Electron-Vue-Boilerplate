import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/LandingPage'


// component: require('@/components/LandingPage').default
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: Landing
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
