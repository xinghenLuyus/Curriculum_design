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
            <router-link to="/">首页</router-link>
            <router-link to="/recommend">推荐</router-link>
            <router-link to="/classify">分类</router-link>
            <router-link to="/dynamic">动态</router-link>
            <router-link to="/user-center">用户中心</router-link>
            </nav>
        </div>
        <!-- 导航条end -->
    
        <!-- 主内容start -->
        <div id="container">
            <nav id="sidebar">
            <ul>
                <li id="label">分类</li>
                <li><a href="">原创oc</a></li>
                <li><a href="">日系</a></li>
                <li><a href="">人物插画</a></li>
                <li><a href="">同人</a></li>
                <li><a href="">更多</a></li>
            </ul>
            </nav>
    
            <main id="content">
            <p id="content-p">原创oc</p>
            <div id="pic">
                <img src="@/assets/picture/分类/1.jpg" alt="">
                <img src="@/assets/picture/分类/2.jpg" alt="">
                <img src="@/assets/picture/分类/3.jpg" alt="">
                <input type="button" value="查看更多" id="button-more">
            </div>
    
            <p id="content-p">平涂</p>
            <div id="pic">
                <img src="@/assets/picture/分类/4.jpg" alt="">
                <img src="@/assets/picture/分类/5.jpg" alt="">
                <img src="@/assets/picture/分类/6.jpg" alt="">
                <input type="button" value="查看更多" id="button-more">
            </div>
    
            <p id="content-p">日系</p>
            <div id="pic">
                <img src="@/assets/picture/分类/7.jpg" alt="">
                <img src="@/assets/picture/分类/8.jpg" alt="">
                <img src="@/assets/picture/分类/9.jpg" alt="">
                <input type="button" value="查看更多" id="button-more">
            </div>
    
            <p id="content-p">人物插画</p>
            <div id="pic">
                <img src="@/assets/picture/分类/10.jpg" alt="">
                <img src="@/assets/picture/分类/11.jpg" alt="">
                <img src="@/assets/picture/分类/12.jpg" alt="">
                <input type="button" value="查看更多" id="button-more">
            </div>
    
            <p id="content-p">同人</p>
            <div id="pic">
                <img src="@/assets/picture/分类/13.jpg" alt="">
                <img src="@/assets/picture/分类/14.jpg" alt="">
                <img src="@/assets/picture/分类/15.jpg" alt="">
                <input type="button" value="查看更多" id="button-more">
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
name: 'ClassifyPage'
}
</script>
  
<style scoped src="@/assets/css/cclassify.css"></style>