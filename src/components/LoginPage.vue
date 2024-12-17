<template>
    <div>
      <!-- 导航条stare -->
      <div id="navbar">
        <img src="@/assets/picture/logo.png" alt="Logo" id="logo">
        <nav>
          <router-link to="/">首页</router-link>
          <router-link to="/recommend">推荐</router-link>
          <router-link to="/category">分类</router-link>
          <router-link to="/dynamic">动态</router-link>
          <router-link to="/user-center">用户中心</router-link>
        </nav>
      </div>
      <!-- 导航条end -->
  
      <!-- 主要内容stare -->
      <div id="main">
        <img src="@/assets/picture/登录界面/登录艺术字.png" alt="" id="ysz">
        <form class="container">
          <div class="input-group">
            <label for="username">用户名</label>
            <input type="text" id="username" placeholder="ID / 手机号 / 邮箱">
          </div>
          <div class="input-group">
            <label for="password">密码</label>
            <input type="password" id="password" placeholder="请输入您的密码">
          </div>
          <label for="" style="font-size: 10px;color: grey;float: left;">*若无账号点击“注册” 默认注册一个账号</label>
          <div class="mima">
            <div style="display: flex; justify-content: flex-end;">
              <input type="checkbox" class="miam-lable">记住密码
            </div>
          </div>
          <div class="buttons">
            <input type="button" value="注册">
            <input type="submit" value="登录">
          </div>
          <div class="login">
            <router-link to="/phone-login">手机号登录</router-link>
            <router-link to="/forgot-password">忘记密码</router-link>
          </div>
          <div class="last">
            <input type="checkbox" checked>
            <label for="xieyi" style="font-size: 10px;">同意并遵守服务协议和服务隐私</label>
          </div>
        </form>
      </div>
      <!-- 主要内容end -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage'
  }
  </script>
  
  <style scoped src="@/assets/css/login.css"></style>