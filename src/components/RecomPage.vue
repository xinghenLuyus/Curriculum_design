<template>
    <div>
        <!-- 头部start -->
        <div id="header">
            <img src="@/assets/picture/图标/返回.png" alt="" id="return">
            <div id="header-button">
            <button>推荐作品</button>
            <button>推荐画师</button>
            <button>推荐漫画</button>
            </div>
            <div id="search">
            <input type="text" placeholder="搜索">
            </div>
        </div>
        <!-- 头部end -->
    
        <!-- 作品集start -->
        <div id="works">
            <div id="label">作品集</div>
            <div id="works-inside">
            <!-- 作品一start -->
            <div id="works-part">
                <img src="@/assets/picture/推荐页面/1.jpg" alt="" id="work-pic">
                <p id="name">《碎碎念的花》</p>
                <div id="part1">
                <img src="@/assets/picture/图标/浏览.png" alt="" id="work-icon">
                <p id="part1-p">4567</p>
                <img src="@/assets/picture/图标/对话.png" alt="" id="work-icon">
                <p id="part1-p">67</p>
                <img src="@/assets/picture/图标/点赞.png" alt="" id="work-icon">
                <p id="part1-p">90</p>
                </div>
                <hr>
                <div id="user">
                <div id="user-left">
                    <img src="@/assets/picture/头像/1.jpg" alt="">
                    <p id="nichen">花子枯</p>
                </div>
                <input type="button" id="guanzhu" value="关注">
                </div>
            </div>
            <!-- 作品一end -->
    
            <!-- 作品二start -->
            <div id="works-part">
                <img src="@/assets/picture/推荐页面/2.jpg" alt="" id="work-pic">
                <p id="name">《一符》</p>
                <div id="part1">
                <img src="@/assets/picture/图标/浏览.png" alt="" id="work-icon">
                <p id="part1-p">4210</p>
                <img src="@/assets/picture/图标/对话.png" alt="" id="work-icon">
                <p id="part1-p">99</p>
                <img src="@/assets/picture/图标/点赞.png" alt="" id="work-icon">
                <p id="part1-p">45</p>
                </div>
                <hr>
                <div id="user">
                <div id="user-left">
                    <img src="@/assets/picture/头像/2.jpg" alt="">
                    <p id="nichen">二分法</p>
                </div>
                <input type="button" id="guanzhu" value="关注">
                </div>
            </div>
            <!-- 作品二end -->
    
            <!-- 作品三start -->
            <div id="works-part">
                <img src="@/assets/picture/推荐页面/3.jpg" alt="" id="work-pic">
                <p id="name">《一咪二白》</p>
                <div id="part1">
                <img src="@/assets/picture/图标/浏览.png" alt="" id="work-icon">
                <p id="part1-p">3980</p>
                <img src="@/assets/picture/图标/对话.png" alt="" id="work-icon">
                <p id="part1-p">32</p>
                <img src="@/assets/picture/图标/点赞.png" alt="" id="work-icon">
                <p id="part1-p">13</p>
                </div>
                <hr>
                <div id="user">
                <div id="user-left">
                    <img src="@/assets/picture/头像/3.jpg" alt="">
                    <p id="nichen">二分法</p>
                </div>
                <input type="button" id="guanzhu" value="关注">
                </div>
            </div>
            <!-- 作品三end -->
            </div>
            <div id="button-more-container">
            <input type="button" id="button-more" value="查看更多">
            </div>
        </div>
        <!-- 作品集end -->
    
        <!-- 画师集start -->
        <div id="painter">
            <div id="label">画师集</div>
            <div id="painter-inside">
            <!-- 画师一start -->
            <div id="painter-part">
                <img src="@/assets/picture/推荐页面/4.jpg" alt="" id="pic">
                <div id="user">
                <div id="user-left">
                    <img src="@/assets/picture/头像/4.jpg" alt="">
                    <p id="nichen">希田</p>
                </div>
                <input type="button" id="guanzhu" value="关注">
                </div>
            </div>
            <!-- 画师一end -->
    
            <!-- 画师二start -->
            <div id="painter-part">
                <img src="@/assets/picture/推荐页面/5.jpg" alt="" id="pic">
                <div id="user">
                <div id="user-left">
                    <img src="@/assets/picture/头像/5.jpg" alt="">
                    <p id="nichen">echo</p>
                </div>
                <input type="button" id="guanzhu" value="关注">
                </div>
            </div>
            <!-- 画师二end -->
    
            <!-- 画师三start -->
            <div id="painter-part">
                <img src="@/assets/picture/推荐页面/6.jpg" alt="" id="pic">
                <div id="user">
                <div id="user-left">
                    <img src="@/assets/picture/头像/6.jpg" alt="">
                    <p id="nichen">茯苓那</p>
                </div>
                <input type="button" id="guanzhu" value="关注">
                </div>
            </div>
            <!-- 画师三end -->
            </div>
            <div id="button-more-container">
            <input type="button" id="button-more" value="查看更多">
            </div>
        </div>
        <!-- 画师集end -->
    
        <!-- 漫画集start -->
        <div id="cartoon">
            <div id="label">漫画集</div>
            <div id="cartoon-inside">
            <!-- 漫画一start -->
            <div id="cartoon-part">
                <img src="@/assets/picture/推荐页面/7.jpg" alt="" id="pic">
                <p id="name">《漂亮公主计》</p>
            </div>
            <!-- 漫画一end -->
    
            <!-- 漫画二start -->
            <div id="cartoon-part">
                <img src="@/assets/picture/推荐页面/8.jpg" alt="" id="pic">
                <p id="name">《Xihns》</p>
            </div>
            <!-- 漫画二end -->
    
            <!-- 漫画三start -->
            <div id="cartoon-part">
                <img src="@/assets/picture/推荐页面/9.jpg" alt="" id="pic">
                <p id="name">《风花雪韵实录》</p>
            </div>
            <!-- 漫画三end -->
            </div>
            <div id="button-more-container">
            <input type="button" id="button-more" value="查看更多">
            </div>
        </div>
        <!-- 漫画集end -->
    
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
name: 'RecomPage'
}
</script>
  
<style scoped src="@/assets/css/recommend.css"></style>