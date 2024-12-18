<template>
  <div id="app">
    <HomePage />
    <router-view />
  </div>
</template>

<script>
import ClassifyPage from './components/ClassifyPage.vue';
import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
@import './assets/css/home.css';
@import './assets/css/login.css';
@import './assets/css/user.css';
@import './assets/css/classify.css';
@import './assets/css/creative-center.css';
@import './assets/css/dynamic.css';
@import './assets/css/entrust.css';
@import './assets/css/recommend.css';
@import './assets/css/share.css';
</style>