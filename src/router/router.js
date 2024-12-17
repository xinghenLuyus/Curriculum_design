// import Vue from 'vue'
// import Router from 'vue-router'
import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/LoginPage.vue'
import UserPage from '@/components/UserPage.vue'

// Vue.use(Router)
const routerHistory = createWebHistory()


const router = createRouter({
  history: routerHistory,
   /*
    *   在这里和vue2一样写路由配置
   */
   routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/user-center',
      name: 'UserPage',
      component: UserPage
    }
  ]
})

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HomePage',
//       component: HomePage
//     },
//     {
//       path: '/login',
//       name: 'LoginPage',
//       component: LoginPage
//     },
//     {
//       path: '/user-center',
//       name: 'UserPage',
//       component: UserPage
//     }
//   ]
// })