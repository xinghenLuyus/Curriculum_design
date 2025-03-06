<template>
  <div id="dynamic">
    <!-- 头部start -->
    <div id="header">
      <!-- 头像区域start -->
      <div id="user">
        <div id="user-part1">
          <img src="@/assets/picture/用户中心/1.jpg" alt="" id="user-pic">
          <div id="pet-name">
            <p id="name1">昵称：沅七</p>
            <p id="name2">用户名：ruanruan</p>
          </div>
        </div>
        <div id="user-part1">
          <table id="box">
            <tr>
              <th>0</th>
              <th>1</th>
              <th>1</th>
            </tr>
            <tr id="box1">
              <th>关注</th>
              <th>粉丝</th>
              <th>动态</th>
            </tr>
          </table>
        </div>
      </div>
      <!-- 头像区域end -->

      <div id="send">
        <div id="send-1">
          <img src="@/assets/picture/图标/16.png" alt="">
          <p>选择标签</p>
        </div>
        <p id="send-2">有什么想说的……</p>
        <div id="send-3">
          <div id="send-icon">
            <img src="@/assets/picture/图标/14.png" alt="">
            <img src="@/assets/picture/图标/12.png" alt="">
            <img src="@/assets/picture/图标/8.png" alt="">
            <img src="@/assets/picture/图标/13.png" alt="">
            <img src="@/assets/picture/图标/15.png" alt="">
          </div>
          <div id="send-3-right">
            <p>0&emsp;<span style="color: grey;">|</span></p>
            <img src="@/assets/picture/图标/17.png" alt="">
            <input type="button" id="send-button" value="发送">
          </div>
        </div>
      </div>
      <div id="pic" @mouseover="zoomIn($event)" @mouseleave="zoomOut($event)">
        <img src="@/assets/picture/动态页面/01.jpg" alt="动态图片">
      </div>
    </div>
    <!-- 头部end -->

    <!-- 中间区域start -->
    <div id="middle">
      <div id="middle-1">
        <router-link to="/home"><button id="return">返回首页</button></router-link>
      </div>
      <div id="middle-2">
        <div id="middle-pic">
          <div id="mid-part" @mouseover="showText('all')" @mouseleave="hideText('all')">
            <div id="all">
              <img v-if="!showTextStatus.all" src="@/assets/picture/图标/31.png" alt="">
              <p v-else>查看动态</p>
            </div>
          </div>
          <div id="mid-part" @mouseover="showText('flower1')" @mouseleave="hideText('flower1')">
            <img v-if="!showTextStatus.flower1" src="@/assets/picture/头像/2.jpg" alt="" id="tx">
            <p v-else>coco的动态</p>
          </div>
          <div id="mid-part" @mouseover="showText('dskj')" @mouseleave="hideText('dskj')">
            <img v-if="!showTextStatus.dskj" src="@/assets/picture/头像/4.jpg" alt="" id="tx">
            <p v-else>花一的动态</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 中间区域end -->

    <!-- 主要内容start -->
    <div id="main">
      <div id="main-1"></div><!-- 占位空间 -->
      <div id="main-2">
        <!-- 动态一start -->
        <div id="main-2-part">
          <div id="main-tx">
            <img src="@/assets/picture/头像/9.jpg" alt="">
          </div>
          <div id="part-right">
            <p id="p1">沅七</p>
            <p id="p2">11分钟前</p>
            <p id="p3">🌸 春日樱花烂漫，与你共赴一场浪漫之约 🌸<br>
              随着春风轻拂，樱花🌸如同粉色的云朵，在枝头轻轻摇曳。此刻，你是否也和我一样，沉醉在这满园的春色之中？</p>
            <div id="part-right-pic">
              <img src="@/assets/picture/动态页面/1.jpg" alt="">
              <img src="@/assets/picture/动态页面/2.jpg" alt="">
              <img src="@/assets/picture/动态页面/3.jpg" alt="">
            </div>

            <div id="part-botton">
              <table>
                <tr>
                  <td>
                    <img src="@/assets/picture/动态页面/转发.png" alt="转发" id="main-icon">
                    <span id="p4">0</span>
                  </td>
                  <td>
                    <img src="@/assets/picture/动态页面/对话.png" alt="评论" id="main-icon">
                    <span id="p4">0</span>
                  </td>
                  <td>
                    <img src="@/assets/picture/动态页面/点赞.png" alt="点赞" id="main-icon" @click="incrementLikes('post1')">
                    <span id="p-1">{{ likes.post1 }}</span>
                  </td>
                </tr>
              </table>
            </div>

          </div>
        </div>
        <hr>
        <!-- 动态一end -->

        <!-- 动态二start -->
        <div id="main-2-part">
          <div id="main-tx">
            <img src="@/assets/picture/头像/7.jpg" alt="">
          </div>
          <div id="part-right">
            <p id="p1">Hasj</p>
            <p id="p2">39分钟前</p>
            <p id="p3">还记得去年的这个时候，我还是一个菜菜,但是今年的我就不是了，吼吼!</p>
            <div id="part-right-pic">
              <img src="@/assets/picture/动态页面/4.jpg" alt="">
            </div>
            <div id="part-botton">
              <table>
                <tr>
                  <td>
                    <img src="@/assets/picture/动态页面/转发.png" alt="转发" id="main-icon">
                    <span id="p4">转发</span>
                  </td>
                  <td>
                    <img src="@/assets/picture/动态页面/对话.png" alt="评论" id="main-icon">
                    <span id="p4">213</span>
                  </td>
                  <td>
                    <img src="@/assets/picture/动态页面/点赞.png" alt="点赞" id="main-icon" @click="incrementLikes('post2')">
                    <span id="p-1">{{ likes.post2 }}</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <hr>
        <!-- 动态二end -->

        <!-- 动态三start -->
        <div id="main-2-part">
          <div id="main-tx">
            <img src="@/assets/picture/头像/6.jpg" alt="">
          </div>
          <div id="part-right">
            <p id="p1">OoOOooOooOoOo</p>
            <p id="p2">11分钟前</p>
            <p id="p3">岁岁年年，生生不息 ❀</p>
            <div id="part-right-pic">
              <img src="@/assets/picture/动态页面/5.jpg" alt="">
              <img src="@/assets/picture/动态页面/6.jpg" alt="">
            </div>
            <div id="part-botton">
              <table>
                <tr>
                  <td>
                    <img src="@/assets/picture/动态页面/转发.png" alt="转发" id="main-icon">
                    <span id="p4">转发</span>
                  </td>
                  <td>
                    <img src="@/assets/picture/动态页面/对话.png" alt="评论" id="main-icon">
                    <span id="p4">198</span>
                  </td>
                  <td>
                    <img src="@/assets/picture/动态页面/点赞.png" alt="点赞" id="main-icon" @click="incrementLikes('post3')">
                    <span id="p-1">{{ likes.post3 }}</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <hr>
        <!-- 动态三end -->
        <div id="button-part">
          <button id="button-more">查看更多</button>
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
      <div></div>
    </div>
    <!-- 页脚end -->
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'DynamicPage',
  methods: {
    zoomIn(event) {
      event.target.style.transition = 'transform 0.3s';
      event.target.style.transform = 'scale(1.1)';
    },
    zoomOut(event) {
      event.target.style.transition = 'transform 0.3s';
      event.target.style.transform = 'scale(0.9)';
    }
  },
  setup() {
    const showTextStatus = ref({
      all: false,
      flower1: false,
      dskj: false
    });

    const likes = ref({
      post1: 0,
      post2: 110,
      post3: 201
    });

    const showText = (id) => {
      showTextStatus.value[id] = true;
    };

    const hideText = (id) => {
      showTextStatus.value[id] = false;
    };

    const incrementLikes = (postId) => {
      likes.value[postId] = likes.value[postId] === likes.value[postId] ? likes.value[postId] + 1 : likes.value[postId];
    };

    return {
      showTextStatus,
      showText,
      hideText,
      likes,
      incrementLikes
    };
  }
};
</script>

<style scoped src="@/assets/css/dynamic.css"></style>