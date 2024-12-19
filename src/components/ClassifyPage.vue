<template>
    <div>
      <!-- 搜索栏start -->
      <div id="title">
        <img src="@/assets/picture/logo.png" alt="Logo" id="logo">
        <div id="search">
          <input type="text" placeholder="搜索">
        </div>
      </div>
      <!-- 搜索栏end -->
  
      <!-- 导航条start -->
      <div id="navbar">
        <nav>
          <div class="nav-item">
            <router-link to="/">首页</router-link>
          </div>
          <div class="nav-item" @mouseover="showDropdown('recommend')" @mouseleave="hideDropdown('recommend')">
            <router-link to="/recommend">推荐</router-link>
            <div class="dropdown" v-if="dropdowns.recommend">
              <router-link to="/recommend/sub1">作品集</router-link>
              <router-link to="/recommend/sub2">作者集</router-link>
            </div>
          </div>
          <div class="nav-item" @mouseover="showDropdown('classify')" @mouseleave="hideDropdown('classify')">
            <router-link to="/classify">分类</router-link>
            <div class="dropdown" v-if="dropdowns.classify">
              <router-link to="/classify/sub1">原创区</router-link>
              <router-link to="/classify/sub2">二创区</router-link>
            </div>
          </div>
          <div class="nav-item" @mouseover="showDropdown('dynamic')" @mouseleave="hideDropdown('dynamic')">
            <router-link to="/dynamic">动态</router-link>
            <div class="dropdown" v-if="dropdowns.dynamic">
              <router-link to="/dynamic/sub1">社区</router-link>
              <router-link to="/dynamic/sub2">发布</router-link>
            </div>
          </div>
          <div class="nav-item" @mouseover="showDropdown('userCenter')" @mouseleave="hideDropdown('userCenter')">
            <router-link to="/user-center">用户中心</router-link>
            <div class="dropdown" v-if="dropdowns.userCenter">
              <router-link to="/user-center/sub1">我的</router-link>
              <router-link to="/user-center/sub2">设置</router-link>
            </div>
          </div>
        </nav>
      </div>
      <!-- 导航条end -->
  
      <!-- 主内容start -->
      <div id="container">
        <nav id="sidebar">
          <ul>
            <li id="label">分类</li>
            <li><a href="#f1" >原创oc</a></li>
            <li><a href="#f2">日系</a></li>
            <li><a href="#f3">人物插画</a></li>
            <li><a href="#f4">同人</a></li>
            <li><a href="#f5">更多</a></li>
          </ul>
        </nav>
  
        <main id="content">
          <div id="contents">
            <p>原创oc</p>
            <a name="f1"></a>
            <div id="pic">
              <div class="pic-item" @mouseover="showText($event)" @mouseleave="hideText($event)">
                <img src="@/assets/picture/分类/1.jpg" alt="">
                <span class="overlay-text">阮阮</span>
              </div>
              <div class="pic-item" @mouseover="showText($event)" @mouseleave="hideText($event)">
                <img src="@/assets/picture/分类/2.jpg" alt="">
                <span class="overlay-text">栗子酱</span>
              </div>
              <div class="pic-item" @mouseover="showText($event)" @mouseleave="hideText($event)">
                <img src="@/assets/picture/分类/3.jpg" alt="">
                <span class="overlay-text">格子</span>
              </div>
              <input type="button" value="查看更多" id="button-more" @mouseover="zoomIn($event)" @mouseleave="zoomOut($event)">
            </div>
          </div>

          <div id="contents">
            <p>日系</p>
            <a name="f2"></a>
            <div id="pic">
              <div class="pic-item" @mouseover="showText($event)" @mouseleave="hideText($event)">
                <img src="@/assets/picture/分类/4.jpg" alt="">
                <span class="overlay-text">少女与绵兔</span>
              </div>
              <div class="pic-item" @mouseover="showText($event)" @mouseleave="hideText($event)">
                <img src="@/assets/picture/分类/5.jpg" alt="">
                <span class="overlay-text">酷潮故事</span>
              </div>
              <div class="pic-item" @mouseover="showText($event)" @mouseleave="hideText($event)">
                <img src="@/assets/picture/分类/6.jpg" alt="">
                <span class="overlay-text">练习日志</span>
              </div>
              <input type="button" value="查看更多" id="button-more" @mouseover="zoomIn($event)" @mouseleave="zoomOut($event)">
            </div>
          </div>
          <div id="contents">
            <p>人物插画</p>
            <a name="f3"></a>
            <div id="pic">
              <div class="pic-item" @mouseover="showText($event)" @mouseleave="hideText($event)">
                <img src="@/assets/picture/分类/7.jpg" alt="">
                <span class="overlay-text">樱花</span>
              </div>
              <div class="pic-item" @mouseover="showText($event)" @mouseleave="hideText($event)">
                <img src="@/assets/picture/分类/8.jpg" alt="">
                <span class="overlay-text">童话镇</span>
              </div>
              <div class="pic-item" @mouseover="showText($event)" @mouseleave="hideText($event)">
                <img src="@/assets/picture/分类/9.jpg" alt="">
                <span class="overlay-text">零零幺</span>
              </div>
              <input type="button" value="查看更多" id="button-more" @mouseover="zoomIn($event)" @mouseleave="zoomOut($event)">

            </div>
          </div>
          <div id="contents">
            <p>同人</p>
            <a name="f4"></a>
            <div id="pic">
              <div class="pic-item" @mouseover="showText($event)" @mouseleave="hideText($event)">
                <img src="@/assets/picture/分类/10.jpg" alt="">
                <span class="overlay-text">纳诺的故事</span>
              </div>
              <div class="pic-item" @mouseover="showText($event)" @mouseleave="hideText($event)">
                <img src="@/assets/picture/分类/11.jpg" alt="">
                <span class="overlay-text">半面君</span>
              </div>
              <div class="pic-item" @mouseover="showText($event)" @mouseleave="hideText($event)">
                <img src="@/assets/picture/分类/12.jpg" alt="">
                <span class="overlay-text">衍生ooc</span>
              </div>
              <input type="button" value="查看更多" id="button-more" @mouseover="zoomIn($event)" @mouseleave="zoomOut($event)">
            </div>
        </div>
      </main>
    </div>
      <!-- 主内容end -->
  
      <!-- 页脚start -->
      <div id="footer">
        <img src="@/assets/picture/footer.png" alt="footer">
        <p id="footer-p">隐私政策 | 关于我们 | 用户协议 | App下载 | 使用说明<br>
          合作专栏 呲呲咔咔 英达 拇指家族<br>
          友情链接 <a href="">动漫评论</a> <a href="">异次元</a> <a href="">漫展</a> <a href="">高校动漫网</a> <a href="">二次元现场</a><br>
          不良信息举报电话:12312312312 | 举报邮箱:ecy@zzz.com| 客服微信:yuanyuann丨 行政办公地址:将次元打开之地<br>
        </p>
      </div>
      <!-- 页脚end -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'ClassifyPage',
    data() {
      return {
        dropdowns: {
          recommend: false,
          classify: false,
          dynamic: false,
          userCenter: false
        }
      }
    },
    methods: {
      showDropdown(name) {
        this.dropdowns[name] = true
      },
      hideDropdown(name) {
        this.dropdowns[name] = false
      },
      zoomIn(event) {
        event.target.style.transition = 'transform 0.3s';
        event.target.style.transform = 'scale(1.1)';
      },
      zoomOut(event) {
        event.target.style.transition = 'transform 0.3s';
        event.target.style.transform = 'scale(1)';
      },
      showText(event) {
        const img = event.currentTarget.querySelector('img');
        const text = event.currentTarget.querySelector('.overlay-text');
        img.style.opacity = 0;
        text.style.opacity = 1;
      },
      hideText(event) {
        const img = event.currentTarget.querySelector('img');
        const text = event.currentTarget.querySelector('.overlay-text');
        img.style.opacity = 1;
        text.style.opacity = 0;
    }
      
      
    }
  }
  </script>
  
  <style scoped src="@/assets/css/classify.css"></style>