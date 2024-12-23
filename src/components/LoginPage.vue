<!-- <script setup>
import { ref } from 'vue';
import CarouselChart from '@/components/CarouselChart'
</script> -->

<template>
    <div>
      <!-- 大屏stare -->
      <!-- <div id="banner"><img src="@/assets/picture/登录界面/02.jpg" alt=""></div> -->
      <div id="banner">
      <img :src="currentBannerImage" alt="Banner">
      </div>
      <!-- 大屏end -->

      <!-- 导航条start -->
      <div id="navbar">
        <img src="@/assets/picture/logo.png" alt="Logo" id="logo">
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

      <!-- 主要内容stare -->
      <div id="main">
          <img src="@/assets/picture/登录界面/登录艺术字.png" alt="" id="ysz">
          <form class="container">  
              <div class="input-group">  
                  <label for="username">用户名</label>  
                  <input type="text" id="username" placeholder="ID / 手机号 / 邮箱">  
              </div>  
              <div class="input-group">  
                  <label for="password">密码</label>  
                  <input type="password" id="password" placeholder="请输入您的密码">  
              </div>  
              <label for="" style="font-size: 10px;color: grey;float: left;">*若无账号点击“注册” 默认注册一个账号</label>
              <div class="mima">
                  <div style="display: flex; justify-content: flex-end;">
                      <input type="checkbox"  class="miam-lable">记住密码
                  </div>
              </div>

              <!-- 验证码输入框 -->
              <!-- <el-form label-width="65px">
                <el-form-item label="验证码">
                  <el-input placeholder="请输入验证码" v-model="sidentifyMode" clearable></el-input>
                </el-form-item>
                使用验证码组件
                <div class="code" @click="refreshCode">
                  <SIdentify :identifyCode="identifyCode"></SIdentify>
                </div>
                <el-button class="login_btn" type="primary" size="default" @click="login">登录</el-button>
              </el-form> -->
              <!-- 验证码输入框 -->

              <div class="buttons">    
                  <input type="button" value="注册">
                  <input type="submit" value="登录">
              </div>  
              <div class="login"> 
                  <a href="">手机号登录</a>
                  <a href="">忘记密码</a>
              </div>
              <div class="last">
                  <input type="checkbox" checked >
                  <label for="xieyi" style="font-size: 10px;" >同意并遵守服务协议和服务隐私</label>
              </div>
          </form>
      </div>
      <!-- 主要内容end -->

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
    </div>
  </template>
  
<script>
  export default {
    name: 'LoginPage',
    data() {
    return {
      dropdowns: {
        recommend: false,
        classify: false,
        dynamic: false,
        userCenter: false,},
        bannerImages: [
        require('@/assets/picture/登录界面/01.jpg'),
        require('@/assets/picture/登录界面/02.jpg'),
        require('@/assets/picture/登录界面/03.jpg')
        ],
        currentBannerIndex: 0
      }
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
    },
  mounted() {
    setInterval(this.rotateBanner, 3000); // 每3秒切换一次图片
  },
}
</script>

<!-- <script setup>
import SIdentify from '@/components/Sidentify'
import { ElMessage } from 'element-plus'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
//获取路由器
let $router = useRouter()
let sidentifyMode = ref('') //输入框验证码
let identifyCode = ref('') //图形验证码
let identifyCodes = ref('1234567890abcdefjhijklinopqrsduvwxyz') //验证码出现的数字和字母
 
//组件挂载
onMounted(() => {
  identifyCode.value = ''
  makeCode(identifyCodes.value, 4)
})
 
// 生成随机数
const randomNum = (min, max) => {
  max = max + 1
  return Math.floor(Math.random() * (max - min) + min)
}
// 随机生成验证码字符串
const makeCode = (o, l) => {
  for (let i = 0; i < l; i++) {
    identifyCode.value += o[randomNum(0, o.length)]
  }
}
// 更新验证码
const refreshCode = () => {
  identifyCode.value = ''
  makeCode(identifyCodes.value, 4)
}
//登录
const login = () => {
  //验证验证码不为空
  if (!sidentifyMode.value) {
    ElMessage({ type: 'error', message: '验证码不能为空！' })
    return
  }
  //验证验证码是否正确
  if (sidentifyMode.value != identifyCode.value) {
    ElMessage({ type: 'error', message: '验证码错误' })
    refreshCode()
    return
  } else {
    ElMessage({ type: 'success', message: '登录成功' })
    $router.push('/home')
  }
}
</script>
 
<style lang="scss" scoped>
.login-page {
  border: 1.5px solid rgb(123, 109, 30);
  border-radius: 8px;
  width: 400px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
  .code {
    text-align: center;
    margin-bottom: 10px;
  }
  .login_btn {
    width: 100%;
  }
}
</style> -->

<style scoped src="@/assets/css/login.css"></style>