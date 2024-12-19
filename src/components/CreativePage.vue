<template>
    <div>
        <!-- 主内容start -->
        <div id="main-top">
            <!-- 左边 -->
            <div id="main-left">
                <div id="logo"><img src="@/assets/picture/logo.png" alt="" id="logo-pic"></div>
                <div id="left-1">
                    <div id="but"><button id="send">发布创作</button></div>
                    <hr>
                    <div id="cz-icon">
                        <div id="icon-pic"><img src="@/assets/picture/图标/29.png" alt=""></div>
                        <p id="p5" @mouseover="enlargeText($event)" @mouseleave="resetText($event)">
                            <router-link to="/" id="re-turn">首页</router-link>
                        </p>
                    </div>
                    <div id="cz-icon">
                        <div id="icon-pic"><img src="@/assets/picture/图标/30.png" alt=""></div>
                        <p id="p5" @mouseover="enlargeText($event)" @mouseleave="resetText($event)">创作管理</p>
                    </div>
                    <div id="cz-icon">
                        <div id="icon-pic"><img src="@/assets/picture/图标/28.png" alt=""></div>
                        <p id="p5" @mouseover="enlargeText($event)" @mouseleave="resetText($event)">数据看板</p>
                    </div>
                    <div id="cz-icon">
                        <div id="icon-pic"><img src="@/assets/picture/图标/27.png" alt=""></div>
                        <p id="p5" @mouseover="enlargeText($event)" @mouseleave="resetText($event)">创作学院</p>
                    </div>
                    <div id="cz-icon">
                        <div id="icon-pic"><img src="@/assets/picture/图标/18.png" alt=""></div>
                        <p id="p5" @mouseover="enlargeText($event)" @mouseleave="resetText($event)">交流大厅</p>
                    </div>
                </div>
            </div>
            <div id="main-right">
                <div id="center">
                    <div id="center-1">
                        <div id="tx"><img src="@/assets/picture/头像/9.jpg" alt=""></div>
                        <div id="text">
                            <p id="p1">沅七</p>
                            <p id="p2">关注：1&emsp;|&emsp;粉丝：0<span>&emsp;&emsp;ID:62981286</span></p>
                        </div>
                    </div>
                    <div id="center-2">
                        <p id="p1" style="margin-left: 1%;">|数据总览</p>
                        <div id="sj">
                            <table>
                                <tr>
                                    <th id="p2">新增粉丝</th>
                                    <th id="p2">主页访客</th>
                                    <th id="p2">观看数量</th>
                                    <th id="p2">访客数量</th>
                                </tr>
                                <tr>
                                    <th id="p4">0</th>
                                    <th id="p4">0</th>
                                    <th id="p4">0</th>
                                    <th id="p4">0</th>
                                </tr>
                            </table>
                        </div>
                        <p id="p1" style="margin: 2%;">|最新发布创作</p>
                        <div id="pic-1"><img src="@/assets/picture/创作中心/4.jpg" alt="最新发布" @click="openImageViewer(require('@/assets/picture/创作中心/4.jpg'))"></div>
                        <vue-easy-lightbox
                            :visible="visible"
                            :imgs="imgs"
                            @hide="handleHide"
                        />
                        <p id="p2" style="margin-left: 5%;">发布于2024年6月1日</p>
                    </div>
                </div>
                <div id="right">
                    <p id="p1" style="margin-left: 5%;">|创作灵感tip</p>
                    <hr>
                    <p id="p3" style="margin-left: 5%;">热门活动</p>
                    <div id="hot-pic"><img src="@/assets/picture/创作中心/绘.jpg" alt="热门活动" @click="openImageViewer(require('@/assets/picture/创作中心/绘.jpg'))"></div>
                    <p id="p3" style="margin-left: 5%;">经典话题</p>
                    <div id="hot-pic"><img src="@/assets/picture/创作中心/5.png" alt="经典话题" @click="openImageViewer(require('@/assets/picture/创作中心/5.png'))"></div>
                </div>
            </div>
            
        </div>

        <div id="bottom">
            <div id="bot-left"></div>
            <div id="bot-right">
                <p id="p1" style="margin-left: 1%;">|创作学院热门教学</p>
                <div id="bot-pic">
                    <div id="pic-img">
                        <img src="@/assets/picture/创作中心/1.jpg" alt="" @mouseover="enlargeImage($event)" @mouseleave="resetImage($event)">
                    </div>
                    <div id="pic-img">
                        <img src="@/assets/picture/创作中心/2.jpg" alt="" @mouseover="enlargeImage($event)" @mouseleave="resetImage($event)">
                    </div>
                    <div id="pic-img">
                        <img src="@/assets/picture/创作中心/3.jpg" alt="" @mouseover="enlargeImage($event)" @mouseleave="resetImage($event)">
                    </div>
                </div>
            </div>
        </div>
        <!-- 主内容end -->

        <!-- 图片查看器start -->
        <div v-if="imageViewerVisible" id="image-viewer" @click="closeImageViewer">
            <img :src="currentImage" alt="查看图片">
        </div>
        <!-- 图片查看器end -->

        <!-- 页脚start -->
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
    </div>
</template>
  
<script>
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
    name: 'CreativePage',
    components: {
    VueEasyLightbox
  },
    data() {
        return {
            visible: false,
            imgs: []
        };
    },
    methods: {
        enlargeText(event) {
            event.target.style.transition = 'transform 0.3s';
            event.target.style.transform = 'scale(1.1)';
        },
        resetText(event) {
            event.target.style.transition = 'transform 0.3s';
            event.target.style.transform = 'scale(1)';
        },
        openImageViewer(imagePath) {
            this.imgs = [imagePath]
            this.visible = true
        },
        handleHide() {
            this.visible = false
        },
        enlargeImage(event) {
            event.target.style.transition = 'transform 0.3s';
            event.target.style.transform = 'scale(1.1)';
        },
        resetImage(event) {
            event.target.style.transition = 'transform 0.3s';
            event.target.style.transform = 'scale(1)';
        }
    },
}
</script>
  
<style scoped src="@/assets/css/creative-center.css"></style>
