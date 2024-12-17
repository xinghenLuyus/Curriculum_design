<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import HoHome from './components/HoHome.vue';
// import Navbar from './components/Navbar.vue';

export default {
  name: 'App'
}
</script>

<style>
@import './assets/css/home.css';
@import './assets/css/login.css';
@import './assets/css/user.css';
</style>