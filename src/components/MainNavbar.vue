<template>
    <div id="MainNavbar">
      <img src="../assets/picture/logo.png" alt="Logo" id="logo">
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/recommend">推荐</router-link>
        <router-link to="/category">分类</router-link>
        <router-link to="/dynamic">动态</router-link>
        <router-link to="/user-center">用户中心</router-link>
      </nav>
      <router-link to="/login" id="login">登录</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainNavbar'
  }
  </script>
  
  <style scoped>
  @import '../assets/css/home.css';
  </style>