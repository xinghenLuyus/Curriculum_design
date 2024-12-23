<template>
    <div id="head-nav">
        <!-- 头部stare -->
        <div id="header">
            <img src="@/assets/picture/logo.png" alt="" id="logo">
            <div id="search">
                <input type="text" placeholder="搜索">
            </div>
        </div>
        <!-- 头部end -->

        <!-- 导航条stare -->
        <div id="navbar">
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
        </div>
        <!-- 导航条end -->
    </div>
    
    <div id="main">
        <!-- 主内容上半部分stare -->
        <div id="main-top">
            <!-- 左边stare -->
            <div id="top-left">
                <a href="" id="yhzx">用户中心>>></a>
                <div id="user">
                    <div id="user-pic"> 
                        <img src="@/assets/picture/头像/9.jpg" alt="" id="tx">
                    </div>
                    <div id="user-p">
                        <p id="user-p1">沅七</p>
                        <p id="user-p2">ID：62981286</p>
                    </div>
                </div>
                <p id="p1">我的关注</p>
                <button id="add">＋  添加感兴趣的圈，一键进入</button>
                <p id="p1">我的分类</p>
                <div id="classify">
                    <div id="class1">
                        <div id="class-icon">
                            <img src="@/assets/picture/图标/21.png" alt="">
                        </div>
                        <p>女性向</p>
                    </div>
                    <div id="class1">
                        <div id="class-icon">
                            <img src="@/assets/picture/图标/22.png" alt="">
                        </div>
                        <p>异次元</p>
                    </div>
                    <div id="class1">
                        <div id="class-icon">
                            <img src="@/assets/picture/图标/23.png" alt="">
                        </div>
                        <p>闲~趣</p>
                    </div>
                </div>
                <button id="see-more">查看更多</button>
            </div>
            <!-- 左边end -->

            <!-- 右边stare -->
            <div id="top-right">
                <div id="title">
                    <div id="title-icon">
                        <img src="@/assets/picture/图标/25.png" alt="">
                    </div>
                    <p id="p2">热门圈</p>
                </div>

                <table id="hot">
                    <tr>
                        <td><img src="@/assets/picture/同人分享/1.jpg" alt="" id="hot-pic"></td><!-- 1.1 -->
                        <td><!-- 1.2 -->
                            <table>
                                <tr><td id="p3">热门番剧</td></tr><!-- 1.1 -->
                                <tr><!-- 1.2 -->
                                    <td>
                                        <div id="hot-icon"><img src="@/assets/picture/图标/20.png" alt="" id="icon-pic"></div>
                                        <p id="p4">812.2W</p>
                                    </td>
                                </tr>
                                <tr><!-- 1.3 -->
                                    <td>
                                        <div id="hot-icon"><img src="@/assets/picture/图标/19.png" alt="" id="icon-pic"></div>
                                        <p id="p4">1000.2W</p>
                                    </td>
                                </tr>
                            </table>
                        </td>

                        <td></td><!-- 空列 -->
                        
                        <td><img src="@/assets/picture/同人分享/2.jpg" alt="" id="hot-pic"></td><!-- 1.4 -->
                        <td><!-- 1.4 -->
                            <table>
                                <tr><td id="p3">综英美</td></tr><!-- 1.5 -->
                                <tr><!-- 1.2 -->
                                    <td>
                                        <div id="hot-icon"><img src="@/assets/picture/图标/20.png" alt="" id="icon-pic"></div>
                                        <p id="p4">567.8W</p>
                                    </td>
                                </tr>
                                <tr><!-- 1.3 -->
                                    <td>
                                        <div id="hot-icon"><img src="@/assets/picture/图标/19.png" alt="" id="icon-pic"></div>
                                        <p id="p4">432.8W</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="@/assets/picture/同人分享/3.jpg" alt="" id="hot-pic"></td><!-- 2.1 -->
                        <td><!-- 2.2 -->
                            <table>
                                <tr><td id="p3">热门番剧</td></tr><!-- 1.1 -->
                                <tr><!-- 1.2 -->
                                    <td>
                                        <div id="hot-icon"><img src="@/assets/picture/图标/20.png" alt="" id="icon-pic"></div>
                                        <p id="p4">812.2W</p>
                                    </td>
                                </tr>
                                <tr><!-- 1.3 -->
                                    <td>
                                        <div id="hot-icon"><img src="@/assets/picture/图标/19.png" alt="" id="icon-pic"></div>
                                        <p id="p4">1000.2W</p>
                                    </td>
                                </tr>
                            </table>
                        </td>

                        <td></td><!-- 空列 -->
                        
                        <td><img src="@/assets/picture/同人分享/4.jpg" alt="" id="hot-pic"></td><!-- 2.4 -->
                        <td><!-- 2.5 -->
                            <table>
                                <tr><td id="p3">热门番剧</td></tr><!-- 1.1 -->
                                <tr><!-- 1.2 -->
                                    <td>
                                        <div id="hot-icon"><img src="@/assets/picture/图标/20.png" alt="" id="icon-pic"></div>
                                        <p id="p4">812.2W</p>
                                    </td>
                                </tr>
                                <tr><!-- 1.3 -->
                                    <td>
                                        <div id="hot-icon"><img src="@/assets/picture/图标/19.png" alt="" id="icon-pic"></div>
                                        <p id="p4">1000.2W</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <a href="" id="more">更多>>></a>
            </div>
            <!-- 右边end -->
        </div>
        <!-- 主内容上半部分end -->

        <!-- 主内容下半部分stare -->
        <div id="main-bottom">
            <div id="bottom-left"></div>
            <div id="bottom-right">
                <div id="bot-title">
                    <div id="bot-icon">
                        <img src="@/assets/picture/图标/26.png" alt="">
                    </div>
                    <p id="p5">分享时刻</p>
                </div>
                <div id="part">
                    <p id="p3">热门番剧</p>
                    <p id="p6">求求有没有太太做的关于这个番的好饭！！！</p>
                    <div id="part-bottom">
                        <div id="bot-icon"><img src="@/assets/picture/图标/33.png" alt=""></div>
                        <p id="p4">饭一二</p>
                        <div id="bot-icon"><img src="@/assets/picture/图标/32.png" alt=""></div>
                        <p id="p4">刚刚发布</p>
                    </div>
                </div>
                <hr>
                <div id="part">
                    <p id="p3">热门游戏</p>
                    <p id="p6">今日份为爱发电，跟大家一起努力进步，画技拙略，轻喷qwq</p>
                    <div id="part-img">
                        <img src="@/assets/picture/同人分享/01.jpg" alt="">
                    </div>
                    <div id="part-bottom">
                        <div id="bot-icon"><img src="@/assets/picture/图标/33.png" alt=""></div>
                        <p id="p4">米粒</p>
                        <div id="bot-icon"><img src="@/assets/picture/图标/32.png" alt=""></div>
                        <p id="p4">34分钟前发布</p>
                    </div>
                </div>
                <hr>
                <div id="part">
                    <p id="p3">综英美</p>
                    <p id="p6">妈呀，漫威赛高！！！</p>
                    <div id="part-img">
                        <img src="@/assets/picture/同人分享/02.jpg" alt="">
                        <img src="@/assets/picture/同人分享/03.jpg" alt="">
                        <img src="@/assets/picture/同人分享/04.jpg" alt="">
                    </div>
                    <div id="part-bottom">
                        <div id="bot-icon"><img src="@/assets/picture/图标/33.png" alt=""></div>
                        <p id="p4">饭一二</p>
                        <div id="bot-icon"><img src="@/assets/picture/图标/32.png" alt=""></div>
                        <p id="p4">1小时前发布</p>
                    </div>
                </div>
                <div id="send">
                    <input type="button" value="发布我的">
                </div>
            </div>
        </div>
        <!-- 主内容下半部分end -->
    </div>
    

    <!-- 页脚stare -->
    <div id="footer">
        <img src="@/assets/picture/footer.png" alt="footer">
        <p id="footer-p">隐私政策 | 关于我们 | 用户协议 |  App下载 | 使用说明<br>
            合作专栏 呲呲咔咔 英达 拇指家族<br>
            友情链接 <a href="">动漫评论</a> <a href="">异次元</a> <a href="">漫展</a> <a href="">高校动漫网</a> <a href="">二次元现场</a><br>
            不良信息举报电话:12312312312 | 举报邮箱:ecy@zzz.com| 客服微信:yuanyuann丨 行政办公地址:将次元打开之地<br>
        </p>
        <div></div>
    </div>
    <!-- 页脚end -->
</template>

<script>
export default {
    name: 'SharePage',
  data() {
    return {
      dropdowns: {
        recommend: false,
        classify: false,
        dynamic: false,
        userCenter: false,}
        }
    },
    methods: {
    showDropdown(menu) {
      this.dropdowns[menu] = true;},
    hideDropdown(menu) {
      this.dropdowns[menu] = false;}
    },
    
}
</script>

<style scoped src="@/assets/css/share.css"></style>