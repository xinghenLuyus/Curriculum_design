<template>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>chrry</title>
        @import url(./css/首页.css);
        
    </head>
    <body>
        <!-- 导航条stare -->
        <div id="navbar">
            <img src="./picture/logo.png" alt="Logo" id="logo"> 
            <nav>
                <a href="./首页.html" target="_blank">首页</a>
                <a href="./推荐页面.html" target="_blank">推荐</a>
                <a href="./分类页面.html" target="_blank">分类</a>
                <a href="./动态页面.html" target="_blank">动态</a>
                <a href="./用户中心.html" target="_blank">用户中心</a>
            </nav>
            <a href="./登录界面.html" id="login" target="_blank">登录</a>
        </div>
        <!-- 导航条end -->
        
        <!-- 大屏stare -->
        <div id="banner"><img src="./picture/banner/1.jpg" alt=""></div>
        <!-- 大屏end -->

        <!-- 中间选区stare -->
        <div id="container">  
            <div id="rounded-rect">  
                <img src="./picture//图标/05.png" alt="">  
                <a href="./委托约稿.html" target="_blank" >委托约稿</a>
            </div>  
            <div id="rounded-rect">  
                <img src="./picture/图标/06.png" alt=""> 
                <a href="./创作中心.html" target="_blank" >创作中心</a>
            </div>  
            <div id="rounded-rect">  
                <img src="./picture/图标/07.png" alt=""> 
                <a href="./同人分享.html" target="_blank" >同人分享</a>
            </div>  
        </div>  
        <!-- 中间选区end -->

        <!-- 画师stare -->
        <div id="box">
            <div id="la">
                <img src="./picture/图标/09.png" alt="画师">
                画师
            </div>
            <div id="box1">
                <table id="Gua-table">
                    <tr>
                        <td id="part1">
                            <img src="./picture/首页/GUA老师.jpg" alt="Gua老师" >
                        </td>

                        <td id="part2">
                            <table id="icon-tabel">
                                <tr>
                                    <th>
                                        <img src="./picture/图标/01.png" alt="热门" id="pic1">
                                        <a href=""><p>热门</p></a>
                                    </th>
                                    <th>
                                        <img src="./picture/图标/02.png" alt="分类" id="pic1">
                                        <a href=""><p>分类</p></a>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <img src="./picture/图标/03.png" alt="关注" id="pic1">
                                        <a href=""><p>关注</p></a>
                                    </th>
                                    <th>
                                        <img src="./picture/图标/04.png" alt="更多" id="pic1">
                                        <a href=""><p>更多</p></a>
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
                <img src="./picture/图标/10.png" alt="标签">
                标签
            </div>
            <div id="box1">
                <table id="biaoqian">
                    <tr  id="biaoqian-1">
                        <td>#原创oc</td>
                        <td>#平涂</td>
                        <td>#日系</td>
                        <td>#人物插画</td>
                        <td rowspan="2" valign="center" align="center"><a href="" style="text-decoration: none;color: black;">更多>>></a></td>
                    </tr>
                    <tr  id="biaoqian-2">
                        <td><img src="./picture/首页/1.jpg" alt="原创oc"></td>
                        <td><img src="./picture/首页/2.jpg" alt="平涂"></td>
                        <td><img src="./picture/首页/3.jpg" alt="日系"></td>
                        <td><img src="./picture/首页/4.jpg" alt="人物插画"></td>
                    </tr>
                </table>
            </div>
        </div>
        <!-- 标签end -->

        <!-- 活动stare -->
        <div id="box">
            <div id="la">
                <img src="./picture/图标/11.png" alt="">
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
            <img src="./picture/footer.png" alt="footer">
            <p>隐私政策 | 关于我们 | 用户协议 |  App下载 | 使用说明<br>
                合作专栏 呲呲咔咔 英达 拇指家族<br>
                友情链接 <a href="">动漫评论</a> <a href="">异次元</a> <a href="">漫展</a> <a href="">高校动漫网</a> <a href="">二次元现场</a><br>
                不良信息举报电话:12312312312 | 举报邮箱:ecy@zzz.com| 客服微信:yuanyuann丨 行政办公地址:将次元打开之地<br>
            </p>
            <div id="lianjie">
                <a href="http://www.weibo.com" target="_blank"><img src="./picture/首页/微博.png" alt="微博"></a>
                <a href="http://ww.douyin.com" target="_blank"><img src="./picture/首页/抖音.jpg" alt="抖音"></a>
                <a href="http://www.baidu.com" target="_blank"><img src="./picture/首页/百度.jpg" alt="百度"></a>
                <a href="https://pan.baidu.com/" target="_blank"><img src="./picture/首页/百度网盘.jpg" alt="百度网盘"></a>
            </div>
        </div>
        <!-- 页脚end -->
        <script src="./js/首页.js"></script>
    </body>
    </html>
</template>