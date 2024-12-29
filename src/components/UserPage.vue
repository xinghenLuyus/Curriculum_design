<template>
    <div>
        <!-- 头像区域stare -->
        <div id="header">
            <img src="@/assets/picture/用户中心/1.jpg" alt="">
            <div id="text">
                <div id="header-1">
                    <p>昵称：沅子</p>
                    <p>ID：62981286</p>
                </div>
                <p id="header-2">关注：1&emsp;|&emsp;粉丝：0</p>
            </div>
            <div id="button">
                <input type="button" value="修改个人资料" @click="showDialog = true">
            </div>
        </div>
        <!-- 头像区域end -->

        <!-- 收藏stare -->
        <div id="shoucang">
            <p id="label">收藏</p>
            <img src="@/assets/picture/用户中心/1.png" alt="">
        </div>
        <!-- 收藏end -->

        <!-- 草稿stare -->
        <div id="caogao">
            <p id="label">草稿</p>
            <div id="caogao-pic">
                <img src="@/assets/picture/用户中心/2.jpg" alt="">
                <img src="@/assets/picture/用户中心/3.jpg" alt="">
                <img src="@/assets/picture/用户中心/4.jpg" alt="">
            </div>
            <div id="chakan-container">
                <input type="button" value="查看更多" id="chakan">
            </div>
        </div>
        <!-- 草稿end -->

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

        <!-- 修改个人资料对话框stare -->
        <el-dialog v-model="showDialog" title="修改个人资料">
            <el-form :model="form">

                <el-form-item label="昵称">
                    <el-input v-model="form.nickName"></el-input>
                </el-form-item>

                <el-form-item label="性别">
                    <el-radio-group v-model="form.gender">
                        <el-radio label="男">男</el-radio>
                        <el-radio label="女">女</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="签名">
                    <el-input type="textarea" v-model="form.signature"></el-input>
                </el-form-item>

                <el-form-item label="头像">
                    <el-upload
                        action="#"
                        list-type="picture-card"
                        v-bind:on-preview="handlePicture"
                        v-bind:on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                </el-form-item>
            </el-form>

            <template v-slot:footer>
                <el-button @click="showDialog = false">取消</el-button>
                <el-button type="primary" @click="handleSave">保存</el-button>
            </template>

        </el-dialog>
        <!-- 修改个人资料对话框end -->
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'UserPage',
    setup() {
        const showDialog = ref(false);
        const form = ref({
            nickName: '',
            gender: '',
            signature: '',
            avatar: ''
        });

        // 保存用户信息的逻辑
        const handleSave = () => {
            console.log('保存用户信息:', form.value);
            showDialog.value = false;
        };

        const handlePicture = (file) => {
            console.log('预览图片:', file);
        };

        const handleRemove = (file, fileList) => {
            console.log('移除图片:', file, fileList);
        };

        return {
            showDialog,
            form,
            handleSave,
            handlePicture,
            handleRemove
        };
    }
};
</script>

<style scoped src="@/assets/css/user.css"></style>