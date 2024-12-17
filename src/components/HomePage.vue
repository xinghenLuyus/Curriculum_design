<template>
  <div >
    <!-- 导航条stare -->
    <div id="navbar">
      <img src="@/assets/picture/logo.png" alt="Logo" id="logo">
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/recommend">推荐</router-link>
        <router-link to="/classify">分类</router-link>
        <router-link to="/dynamic">动态</router-link>
        <router-link to="/user-center">用户中心</router-link>
      </nav>
      <router-link to="/login" id="login">登录</router-link>
    </div>
    <!-- 导航条end -->

    <!-- 大屏stare -->
    <div id="banner"><img src="@/assets/picture/banner/1.jpg" alt=""></div>
    <!-- 大屏end -->

    <!-- 中间选区stare -->
    <div id="container">
      <div id="rounded-rect">
        <img src="@/assets/picture/图标/05.png" alt="">
        <router-link to="/commission">委托约稿</router-link>
      </div>
      <div id="rounded-rect">
        <img src="@/assets/picture/图标/06.png" alt="">
        <router-link to="/creation-center">创作中心</router-link>
      </div>
      <div id="rounded-rect">
        <img src="@/assets/picture/图标/07.png" alt="">
        <router-link to="/fan-share">同人分享</router-link>
      </div>
    </div>
    <!-- 中间选区end -->

    <!-- 画师stare -->
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
                    <img src="@/assets/picture/图标/01.png" alt="热门" id="pic1">
                    <router-link to="/hot"><p>热门</p></router-link>
                  </th>
                  <th>
                    <img src="@/assets/picture/图标/02.png" alt="分类" id="pic1">
                    <router-link to="/category"><p>分类</p></router-link>
                  </th>
                </tr>
                <tr>
                  <th>
                    <img src="@/assets/picture/图标/03.png" alt="关注" id="pic1">
                    <router-link to="/follow"><p>关注</p></router-link>
                  </th>
                  <th>
                    <img src="@/assets/picture/图标/04.png" alt="更多" id="pic1">
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

    <!-- 标签stare -->
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
            <td><img src="@/assets/picture/首页/1.jpg" alt="原创oc"></td>
            <td><img src="@/assets/picture/首页/2.jpg" alt="平涂"></td>
            <td><img src="@/assets/picture/首页/3.jpg" alt="日系"></td>
            <td><img src="@/assets/picture/首页/4.jpg" alt="人物插画"></td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 标签end -->

    <!-- 活动stare -->
    <div id="box">
      <div id="la">
        <img src="@/assets/picture/图标/11.png" alt="">
        活动
      </div>
      <div id="box2">
        <div id="activity1">
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
        <div id="activity2">
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
        <div id="activity3">
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

    <!-- 页脚stare -->
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
  name: 'HomePage'
}
</script>

<style scoped src="@/assets/css/home.css"></style>