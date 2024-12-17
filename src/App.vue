<template>
  <div id="app">
    <div id="navbar">
      <img src="./assets/logo.png" alt="Logo" id="logo">
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/recommend">推荐</router-link>
        <router-link to="/category">分类</router-link>
        <router-link to="/dynamic">动态</router-link>
        <router-link to="/user">用户中心</router-link>
      </nav>
      <router-link to="/login" id="login">登录</router-link>
    </div>

    <div id="banner">
      <img src="./assets/banner/1.jpg" alt="">
    </div>

    <div id="container">
      <div id="rounded-rect" v-for="(item, index) in centerItems" :key="index">
        <img :src="item.icon" alt="">
        <router-link :to="item.link">{{ item.text }}</router-link>
      </div>
    </div>

    <div id="box">
      <div id="la">
        <img src="./assets/icons/09.png" alt="画师">
        画师
      </div>
      <div id="box1">
        <table id="Gua-table">
          <tr>
            <td id="part1">
              <img src="./assets/home/GUA老师.jpg" alt="Gua老师">
            </td>
            <td id="part2">
              <table id="icon-tabel">
                <tr>
                  <th v-for="(icon, index) in icons" :key="index">
                    <img :src="icon.src" alt="" id="pic1">
                    <router-link :to="icon.link"><p>{{ icon.text }}</p></router-link>
                  </th>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div id="footer">
      <img src="./assets/footer.png" alt="footer">
      <p>隐私政策 | 关于我们 | 用户协议 |  App下载 | 使用说明<br>
        合作专栏 呲呲咔咔 英达 拇指家族<br>
        友情链接 <router-link to="">动漫评论</router-link> <router-link to="">异次元</router-link> <router-link to="">漫展</router-link> <router-link to="">高校动漫网</router-link> <router-link to="">二次元现场</router-link><br>
        不良信息举报电话:12312312312 | 举报邮箱:ecy@zzz.com| 客服微信:yuanyuann丨 行政办公地址:将次元打开之地<br>
      </p>
      <div id="lianjie">
        <a href="http://www.weibo.com" target="_blank"><img src="./assets/home/微博.png" alt="微博"></a>
        <a href="http://ww.douyin.com" target="_blank"><img src="./assets/home/抖音.jpg" alt="抖音"></a>
        <a href="http://www.baidu.com" target="_blank"><img src="./assets/home/百度.jpg" alt="百度"></a>
        <a href="https://pan.baidu.com/" target="_blank"><img src="./assets/home/百度网盘.jpg" alt="百度网盘"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerItems: [
        { icon: './assets/icons/05.png', link: '/commission', text: '委托约稿' },
        { icon: './assets/icons/06.png', link: '/creation', text: '创作中心' },
        { icon: './assets/icons/07.png', link: '/sharing', text: '同人分享' }
      ],
      icons: [
        { src: './assets/icons/01.png', link: '', text: '热门' },
        { src: './assets/icons/02.png', link: '', text: '分类' },
        { src: './assets/icons/03.png', link: '', text: '关注' },
        { src: './assets/icons/04.png', link: '', text: '更多' }
      ]
    };
  }
};
</script>

<style>

</style>