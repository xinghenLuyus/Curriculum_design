<template>
  <div id="app">
    <HomePage />
    <router-view />
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  }
}
</script>

<style>
@import './assets/css/home-body.css';
</style>