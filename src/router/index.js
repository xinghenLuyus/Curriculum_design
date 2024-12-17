import Vue from 'vue';
import Router from 'vue-router';
import HoHome from '../components/HoHome.vue';
// import Login from '../components/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HoHome',
      component: HoHome
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // }
  ]
});