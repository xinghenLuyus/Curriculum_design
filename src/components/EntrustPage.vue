<template>
    <div>
        <!-- 头部start -->
        <div id="header">
        <img src="@/assets/picture/图标/返回.png" alt="" id="return">
        <img src="@/assets/picture/logo.png" alt="" id="logo">
        </div>
        <!-- 头部end -->

        <!-- 主要内容start -->
        <div id="main">
        <div id="container">
            <textarea type="text" placeholder="请输入您的委托需求" required id="need"></textarea>
            <h1>委托用途</h1>
            <div id="wt">
                <button>OC/自设</button>
                <button>壁纸封面</button>
                <button>Q版头像</button>
                <button>同人插画</button>
                <button>角色立绘</button>
                <button>自定义</button>
            </div>
            <h1>使用权限</h1>
            <div id="qx">
                <button>买断</button>
                <button>商用</button>
                <button>独占</button>
            </div>
            <h1>付费设定</h1>
            <div id="set-up">
                <p>选择画师</p>
                <input type="text" placeholder="请输入指定画师">
                <p>预算</p>
                <input type="text" placeholder="请输入您的预算">
            </div>
            <input type="button" id="send" value="点击发布">
            <div id="last">
                <input type="checkbox" checked id="xieyi">
                <label for="xieyi" style="font-size: 10px;color: grey;">同意并遵守服务协议和服务隐私</label>
            </div>
        </div>
        </div>
        <!-- 主要内容end -->

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
    name: 'EntrustPage'
}
</script>
  
<style scoped src="@/assets/css/entrust.css"></style>