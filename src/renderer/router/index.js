import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '/',
      name: 'home',
      component: require('@/pages/home').default,
      children: [
        {
          path: '/aspectRatio',
          name: 'aspectRatio',
          component: require('@/pages/aspectRatio').default
        },
        {
          path: '/changeColor',
          name: 'changeColor',
          component: require('@/pages/changeColor').default
        },
        {
          path: '/insFilters',
          name: 'insFilters',
          component: require('@/pages/insFilters').default
        },
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
