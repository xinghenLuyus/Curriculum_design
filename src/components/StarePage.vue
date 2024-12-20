<template>
  <div id="stare-page">
    <header>
      <nav>
        <router-link to="/" class="nav-items">首页</router-link>
        <router-link to="/recommend" class="nav-items">推荐</router-link>
        <router-link to="/category" class="nav-items">分类</router-link>
        <router-link to="/dynamic" class="nav-items">动态</router-link>
        <router-link to="/user-center" class="nav-items">用户中心</router-link>
      </nav>
    </header>

    <div class="content">
      <img src="@/assets/picture/stare/bac 3.png" alt="background" class="back-3">

      <div class="title">
        <h3>The world of secondary creation</h3>
        <h1>CHRRY</h1>
      </div>

      <img src="@/assets/picture/stare/bac 2.png" alt="background" class="back-2">
      <img src="@/assets/picture/stare/bac 1.png" alt="background" class="back-1">

      <div class="info-wrap">
        <p>
          欢迎来到CHRRY，这里是一个专注于二次元同热创作的网站，我们将为您提供了丰富的二创空间，希望您能在这里找到属于自己的一片小天地。
        </p>
      </div>

      <div class="cta">
        <button>
          点击进入
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div class="slider">
        <i class="fa-solid fa-chevron-left"></i>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarePage'
}
</script>

<style scoped src="@/assets/css/stare.css"></style>