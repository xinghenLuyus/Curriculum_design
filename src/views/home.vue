<template>
    <div id="home">
      <div id="navbar">
        <img src="../assets/logo.png" alt="Logo" id="logo"> 
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
        <img src="../assets/banner/1.jpg" alt="">
      </div>
  
      <div id="container">  
        <div id="rounded-rect">  
          <img src="../assets/icons/05.png" alt="">  
          <router-link to="/commission">委托约稿</router-link>
        </div>  
        <div id="rounded-rect">  
          <img src="../assets/icons/06.png" alt=""> 
          <router-link to="/creation">创作中心</router-link>
        </div>  
        <div id="rounded-rect">  
          <img src="../assets/icons/07.png" alt=""> 
          <router-link to="/sharing">同人分享</router-link>
        </div>  
      </div>  
  
      <div id="box">
        <div id="la">
          <img src="../assets/icons/09.png" alt="画师">
          画师
        </div>
        <div id="box1">
          <table id="Gua-table">
            <tr>
              <td id="part1">
                <img src="../assets/home/GUA老师.jpg" alt="Gua老师">
              </td>
              <td id="part2">
                <table id="icon-table">
                  <tr>
                    <th>
                      <img src="../assets/icons/01.png" alt="热门" id="pic1">
                      <router-link to="/popular"><p>热门</p></router-link>
                    </th>
                    <th>
                      <img src="../assets/icons/02.png" alt="分类" id="pic1">
                      <router-link to="/category"><p>分类</p></router-link>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <img src="../assets/icons/03.png" alt="关注" id="pic1">
                      <router-link to="/follow"><p>关注</p></router-link>
                    </th>
                    <th>
                      <img src="../assets/icons/04.png" alt="更多" id="pic1">
                      <router-link to="/more"><p>更多</p></router-link>
                    </th>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
  
      <div id="box">
        <div id="la">
          <img src="../assets/icons/10.png" alt="标签">
          标签
        </div>
        <div id="box1">
          <table id="biaoqian">
            <tr id="biaoqian-1">
              <td>#原创oc</td>
              <td>#平涂</td>
              <td>#日系</td>
              <td>#人物插画</td>
              <td rowspan="2" valign="center" align="center">
                <router-link to="/tags" style="text-decoration: none;color: black;">更多>>></router-link>
              </td>
            </tr>
            <tr id="biaoqian-2">
              <td><img src="../assets/home/1.jpg" alt="原创oc"></td>
              <td><img src="../assets/home/2.jpg" alt="平涂"></td>
              <td><img src="../assets/home/3.jpg" alt="日系"></td>
              <td><img src="../assets/home/4.jpg" alt="人物插画"></td>
            </tr>
          </table>
        </div>
      </div>
  
      <div id="box">
        <div id="la">
          <img src="../assets/icons/11.png" alt="">
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
  
      <div id="footer">
        <img src="../assets/footer.png" alt="footer">
        <p>隐私政策 | 关于我们 | 用户协议 |  App下载 | 使用说明<br>
          合作专栏 呲呲咔咔 英达 拇指家族<br>
          友情链接 <router-link to="/anime-review">动漫评论</router-link> <router-link to="/other-dimensions">异次元</router-link> <router-link to="/comic-expo">漫展</router-link> <router-link to="/university-anime">高校动漫网</router-link> <router-link to="/two-dimensional-scene">二次元现场</router-link><br>
          不良信息举报电话:12312312312 | 举报邮箱:ecy@zzz.com| 客服微信:yuanyuann丨 行政办公地址:将次元打开之地<br>
        </p>
        <div id="lianjie">
          <a href="http://www.weibo.com" target="_blank"><img src="../assets/home/微博.png" alt="微博"></a>
          <a href="http://ww.douyin.com" target="_blank"><img src="../assets/home/抖音.jpg" alt="抖音"></a>
          <a href="http://www.baidu.com" target="_blank"><img src="../assets/home/百度.jpg" alt="百度"></a>
          <a href="https://pan.baidu.com/" target="_blank"><img src="../assets/home/百度网盘.jpg" alt="百度网盘"></a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
    @import '../assets/css';
  </style>