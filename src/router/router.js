import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import UserPage from '@/components/UserPage.vue'
import ClassifyPage from '@/components/ClassifyPage.vue'
import EntrustPage from '@/components/EntrustPage.vue'
import RecomPage from '@/components/RecomPage.vue'
import CreativePage from '@/components/CreativePage.vue'
import DynamicPage from '@/components/DynamicPage.vue'
import SharePage from '@/components/SharePage.vue'
import LoginPage from '@/components/LoginPage.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/classify',
      name: 'ClassifyPage',
      component: ClassifyPage
    },
    {
      path: '/create-center',
      name: 'CreativePage',
      component: CreativePage
    },
    {
      path: '/dynamic',
      name: 'DynamicPage',
      component: DynamicPage
    },
    {
      path: '/entrust',
      name: 'EntrustPage',
      component: EntrustPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/recommend',
      name: 'RecomPage',
      component: RecomPage
    },
    {
      path: '/share',
      name: 'SharePage',
      component: SharePage
    },
    {
      path: '/user-center',
      name: 'UserPage',
      component: UserPage
    },
  ]
})

export default router