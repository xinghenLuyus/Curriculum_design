<template>
    <!-- 注册对话框 -->
    <el-dialog title="用户注册" v-model="showRegisterDialog" width="30%">
        <el-form ref="registerForm" :model="registerForm" :rules="rules">
            <el-form-item prop="username">
                <el-input v-model="registerForm.username" placeholder="请输入用户名" clearable />
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="registerForm.password" placeholder="请输入密码" show-password />
            </el-form-item>
            <el-button type="primary" @click="handleRegister" class="dialog-btn">立即注册</el-button>
        </el-form>
    </el-dialog>

    <div id="login-page">
        <div id="navbar">
            <img src="@/assets/picture/logo.png" alt="Logo" id="logo">
            <nav id="navv">
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

        <div id="main">
            <img src="@/assets/picture/登录界面/登录艺术字.png" alt="" id="ysz">
            <!-- 登录框stare -->
            <div id="login-box">
                <el-form ref="loginForm" :model="form" :rules="rules">
                    <div id="user">
                        <el-form-item prop="username">
                            <el-input v-model="form.username" placeholder="请输入用户名" clearable/>
                        </el-form-item>
                    </div>
                    
                    <div id="password">
                        <el-form-item prop="password">
                            <el-input type="password" v-model="form.password" placeholder="请输入密码" show-password/>
                        </el-form-item>
                    </div>
                    
                    <el-form-item>
                        <div style="display:flex" id="atilposition">
                            <el-input
                                type="text"
                                ref="inputCode"
                                v-model="inputCode"
                                placeholder="请输入验证码"
                                clearable
                            ></el-input>

                            <span @click="createCode" id="spancode">
                                <SidentifyPage :identifyCode="code"></SidentifyPage>
                            </span>
                        </div>
                    </el-form-item>

                    <div class="last">
                        <input type="checkbox" checked id="check">
                        <label id="la-xieyi">同意并遵守服务协议和服务隐私</label>
                    </div>

                    <el-button :loading="form.loading" @click="handleSubmit" type="primary" class="bottom-size">立即登录</el-button>
                    
                    <div class="login"> 
                        <a @click="showRegisterDialog = true">立即注册</a>
                        <a href="">忘记密码</a>
                    </div>
                </el-form>
            </div>
            <!-- 登录框end -->
            <div id="space"></div>
        </div>

        <div id="banner">
          <CarouselChart/>
        </div>

        <div id="footer">
            <img src="@/assets/picture/footer.png" alt="footer">
            <p id="footer-p">隐私政策 | 关于我们 | 用户协议 |  App下载 | 使用说明<br>
                合作专栏 呲呲咔咔 英达 拇指家族<br>
                友情链接 <a href="">动漫评论</a> <a href="">异次元</a> <a href="">漫展</a> <a href="">高校动漫网</a> <a href="">二次元现场</a><br>
                不良信息举报电话:12312312312 | 举报邮箱:ecy@zzz.com| 客服微信:yuanyuann丨 行政办公地址:将次元打开之地<br>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import CryptoJS from 'crypto-js'
import CarouselChart from './CarouselChart.vue'
import SidentifyPage from './SidentifyPage.vue'

export default {
    name: 'LoginPage',
    components: {
        CarouselChart,
        SidentifyPage
    },
    data() {
        return {
            // 注册
            showRegisterDialog: false,
            registerForm: {
                username: '',
                password: ''
            },
            userInfo: {
                nickname: '',
                gender: '',
                signature: ''
            },
            // 扩展验证规则
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ]
            },
            code: '',
            inputCode: '',
            form: {
                username: 'ruanruan', // 默认用户名
                password: '123456', // 默认密码
                loading: false
            },
            dropdowns: {
                recommend: false,
                classify: false,
                dynamic: false,
                userCenter: false,
                login: false
            },
            bannerImages: [
                require('@/assets/picture/登录界面/01.jpg'),
                require('@/assets/picture/登录界面/02.jpg'),
                require('@/assets/picture/登录界面/03.jpg')
            ],
            currentBannerIndex: 0,
            registerLoading: false
        };
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
        // 验证码stare
        createCode() {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let i = 0; i < 4; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            this.code = text;
        },
        handleSubmit() {
            this.form.loading = true;
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    if (this.inputCode === '') {
                        this.$message.error('请输入验证码');
                        this.form.loading = false;
                        return;
                    }
                    if (this.inputCode.toLowerCase() !== this.code.toLowerCase()) {
                        this.$message.error('验证码错误');
                        this.inputCode = '';
                        this.createCode();
                        this.form.loading = false;
                        return;
                    }
                    this.$emit('on-success-valid', {
                        username: this.form.username,
                        password: this.form.password
                    });
                    axios.post('/api/users/login', 
                    JSON.stringify({
                        username: this.form.username,
                        password: this.form.password
                        }), {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(() => {
                        this.$message.success('登录成功');
                        // 获取完整用户信息
                        axios.get(`/api/users/${this.form.username}`)
                            .then(userRes => {
                                this.userInfo = userRes.data;
                                localStorage.setItem('userInfo', JSON.stringify({
                                    username: userRes.data.username,
                                    nickname: userRes.data.nickname,
                                    gender: userRes.data.gender,
                                    signature: userRes.data.signature
                                }));
                                localStorage.setItem('isLoggedIn', 'true');
                                this.$router.push('/user-center');
                            });
                    })
                    .catch(error => {
                        console.error('请求失败：', error); // 添加日志信息
                        this.$message.error('请求失败：' + (error.response?.data || '网络错误'));
                    })
                    .finally(() => {
                        this.form.loading = false;
                    });
                } else {
                    this.form.loading = false;
                }
            });
        },
        // 验证码end
        
        handleRegister() {
            this.$refs.registerForm.validate(valid => {
                if (valid) {
                    this.registerLoading = true;
                    const userData = {
                        username: this.registerForm.username,
                        password: CryptoJS.AES.encrypt(
                            this.registerForm.password,
                            'your-secret-key'
                        ).toString(),
                        nickname: this.registerForm.username,
                        gender: '男',
                        signature: '请添加个性签名'
                    };

                    axios.post('/api/users/register', userData)
                        .then(() => {
                            axios.put(`/api/users/${userData.username}`, userData);
                            this.$message.success('注册成功，请登录');
                            this.showRegisterDialog = false;
                            this.registerForm = { username: '', password: '' };
                        })
                        .catch(error => {
                            this.$message.error(error.message);
                        })
                        .finally(() => {
                            this.registerLoading = false;
                        });
                }
            });
        },
        // 注册end

        handleLogout() {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userInfo');
            this.$message.success('已退出登录');
        }
    },
    mounted() {
        setInterval(this.rotateBanner, 3000);
        this.createCode();
        // 检查登录状态
        if (localStorage.getItem('isLoggedIn') === 'true') {
            this.$alert('你已登录', '提示', {
                confirmButtonText: '返回主页',
                cancelButtonText: '退出登录',
                showCancelButton: true,
                type: 'info'
            }).then(() => {
                this.$router.push('/home');
            }).catch(() => {
                this.handleLogout();
            });
        }
    }
}
</script>

<style scoped src="@/assets/css/login.css"></style>