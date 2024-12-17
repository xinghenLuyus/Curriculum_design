<template>
  <div id="app">
    <HoHome />
    <router-view />
  </div>
</template>

<script>
import HoHome from './components/HoHome.vue';
// import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    HoHome
  }
}
</script>



<style>
@import './assets/css/home.css';
</style>