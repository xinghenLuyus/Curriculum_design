<template>
  <div>
    <!-- 导航条start -->
    <div id="navbar">
      <img src="@/assets/picture/logo.png" alt="Logo" id="logo">
      <nav>
        <div class="nav-item">
          <router-link to="/home">首页</router-link>
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
      <div class="nav-item" @mouseover="showDropdown('login')" @mouseleave="hideDropdown('login')">
        <router-link to="/login" id="login">登录</router-link>
        <div class="dropdown" v-if="dropdowns.login">
          <router-link to="/user-center/sub1">登录</router-link>
          <router-link to="/user-center/sub2">注册</router-link>
        </div>
      </div>
    </div>
    <!-- 导航条end -->

    <!-- 大屏start -->
    <div id="banner">
      <img :src="currentBannerImage" alt="Banner">
    </div>
    <!-- 大屏end -->

    <!-- 中间选区start -->
    <div id="container">
      <div id="rounded-rect" @mouseover="zoomIn($event)" @mouseleave="zoomOut($event)">
        <img src="@/assets/picture/图标/05.png" alt="委托约稿">
        <router-link to="/entrust">委托约稿</router-link>
      </div>
      <div id="rounded-rect" @mouseover="zoomIn($event)" @mouseleave="zoomOut($event)">
        <img src="@/assets/picture/图标/06.png" alt="创作中心">
        <router-link to="/create-center">创作中心</router-link>
      </div>
      <div id="rounded-rect" @mouseover="zoomIn($event)" @mouseleave="zoomOut($event)">
        <img src="@/assets/picture/图标/07.png" alt="同人分享">
        <router-link to="/share">同人分享</router-link>
      </div>
    </div>
    <!-- 中间选区end -->

    <!-- 画师start -->
    <div id="box">
      <div id="la">
        <img src="@/assets/picture/图标/09.png" alt="画师">
        画师
      </div>
      <div id="box1">
        <table id="Gua-table">
          <tr>
            <td id="part1">
              <img src="@/assets/picture/首页/GUA老师.jpg" alt="Gua老师">
            </td>
            <td id="part2">
              <table id="icon-tabel">
                <tr>
                  <th>
                    <img src="@/assets/picture/图标/01.png" alt="热门" id="pic1" @mouseover="fadeOut($event)" @mouseleave="fadeIn($event)">
                    <router-link to="/hot"><p>热门</p></router-link>
                  </th>
                  <th>
                    <img src="@/assets/picture/图标/02.png" alt="分类" id="pic1" @mouseover="fadeOut($event)" @mouseleave="fadeIn($event)">
                    <router-link to="/category"><p>分类</p></router-link>
                  </th>
                </tr>
                <tr>
                  <th>
                    <img src="@/assets/picture/图标/03.png" alt="关注" id="pic1" @mouseover="fadeOut($event)" @mouseleave="fadeIn($event)">
                    <router-link to="/follow"><p>关注</p></router-link>
                  </th>
                  <th>
                    <img src="@/assets/picture/图标/04.png" alt="更多" id="pic1" @mouseover="fadeOut($event)" @mouseleave="fadeIn($event)">
                    <router-link to="/more"><p>更多</p></router-link>
                  </th>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 画师end -->

    <!-- 标签start -->
    <div id="box">
      <div id="la">
        <img src="@/assets/picture/图标/10.png" alt="标签">
        标签
      </div>
      <div id="box1">
        <table id="biaoqian">
          <tr id="biaoqian-1">
            <td>#原创oc</td>
            <td>#平涂</td>
            <td>#日系</td>
            <td>#人物插画</td>
            <td rowspan="2" valign="center" align="center"><router-link to="/more-tags" style="text-decoration: none;color: black;">更多>>></router-link></td>
          </tr>
          <tr id="biaoqian-2">
            <td @mouseover="showText($event)" @mouseleave="hideText($event)">
              <img src="@/assets/picture/首页/1.jpg" alt="原创oc">
              <span class="overlay-text">原创oc</span>
            </td>
            <td @mouseover="showText($event)" @mouseleave="hideText($event)">
              <img src="@/assets/picture/首页/2.jpg" alt="平涂">
              <span class="overlay-text">平涂</span>
            </td>
            <td @mouseover="showText($event)" @mouseleave="hideText($event)">
              <img src="@/assets/picture/首页/3.jpg" alt="日系">
              <span class="overlay-text">日系</span>
            </td>
            <td @mouseover="showText($event)" @mouseleave="hideText($event)">
              <img src="@/assets/picture/首页/4.jpg" alt="人物插画">
              <span class="overlay-text">人物插画</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 标签end -->

    <!-- 活动start -->
    <div id="box">
      <div id="la">
        <img src="@/assets/picture/图标/11.png" alt="">
        活动
      </div>
      <div id="box2">
        <div id="activity1"  @mouseover="zoomIn($event)" @mouseleave="zoomOut($event)">
          <table>
            <tr>
              <th id="la2">进行中</th>
              <th>为魔法的世界狂欢</th>
            </tr>
            <tr>
              <td colspan="2">
                <p>时间:5月6日—6月10日<br>
                  类型:原创<br>
                  主办:咔呲咯咯</p>
              </td>
            </tr>
          </table>
        </div>
        <div id="activity2"  @mouseover="zoomIn($event)" @mouseleave="zoomOut($event)">
          <table>
            <tr>
              <th id="la2">进行中</th>
              <th>笔触下的新生</th>
            </tr>
            <tr>
              <td colspan="2">
                <p>时间:6月6日—8月8日<br>
                  类型:同人衍生<br>
                  主办:异次元的住家君</p>
              </td>
            </tr>
          </table>
        </div>
        <div id="activity3"  @mouseover="zoomIn($event)" @mouseleave="zoomOut($event)">
          <table>
            <tr>
              <th id="la2">待开放</th>
              <th>拥有的宝藏</th>
            </tr>
            <tr>
              <td colspan="2">
                <p>时间:7月21日—9月20日<br>
                  类型:全部<br>
                  主办:古古怪界</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <!-- 活动end -->

    <!-- 页脚start -->
    <div id="footer">
      <img src="@/assets/picture/footer.png" alt="footer">
      <p>隐私政策 | 关于我们 | 用户协议 | App下载 | 使用说明<br>
        合作专栏 呲呲咔咔 英达 拇指家族<br>
        友情链接 <router-link to="/anime-review">动漫评论</router-link> <router-link to="/dimension">异次元</router-link> <router-link to="/comic-expo">漫展</router-link> <router-link to="/college-anime">高校动漫网</router-link> <router-link to="/live-2d">二次元现场</router-link><br>
        不良信息举报电话:12312312312 | 举报邮箱:ecy@zzz.com| 客服微信:yuanyuann丨 行政办公地址:将次元打开之地<br>
      </p>
      <div id="lianjie">
        <a href="http://www.weibo.com" target="_blank"><img src="@/assets/picture/首页/微博.png" alt="微博"></a>
        <a href="http://ww.douyin.com" target="_blank"><img src="@/assets/picture/首页/抖音.jpg" alt="抖音"></a>
        <a href="http://www.baidu.com" target="_blank"><img src="@/assets/picture/首页/百度.jpg" alt="百度"></a>
        <a href="https://pan.baidu.com/" target="_blank"><img src="@/assets/picture/首页/百度网盘.jpg" alt="百度网盘"></a>
      </div>
    </div>
    <!-- 页脚end -->
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      dropdowns: {
        recommend: false,
        classify: false,
        dynamic: false,
        userCenter: false,
        login: false
      },
      bannerImages: [
        require('@/assets/picture/banner/1.jpg'),
        require('@/assets/picture/banner/2.jpg'),
        require('@/assets/picture/banner/3.jpg')
      ],
      currentBannerIndex: 0
    }
  },
  computed: {
    currentBannerImage() {
      return this.bannerImages[this.currentBannerIndex];
    }
  },
  methods: {
    showDropdown(menu) {
      this.dropdowns[menu] = true;
    },
    hideDropdown(menu) {
      this.dropdowns[menu] = false;
    },
    rotateBanner() {
      this.currentBannerIndex = (this.currentBannerIndex + 1) % this.bannerImages.length;
    },
    fadeOut(event) {
      event.target.style.transition = 'opacity 0.5s';
      event.target.style.opacity = 0;
    },
    fadeIn(event) {
      event.target.style.transition = 'opacity 0.5s';
      event.target.style.opacity = 1;
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
  },
  mounted() {
    setInterval(this.rotateBanner, 3000); // 每3秒切换一次图片
  }
}
</script>

<style scoped src="@/assets/css/home.css"></style>