<!-- 图片轮播图可选 -->

<template>
    <div>
        <div  class="banner">
            <img src="@/assets/picture/登录界面/01.jpg" class="img">
            <div v-for="(title,titleIndex) in titles" :key="titleIndex"  class="content">
                <transition name="scale">
                    <div v-show="imgIndex===titleIndex" >
                      <span>{{title}}</span>
                    </div>
                  </transition>
            </div>
            <div class="dot-content">
                <div v-for="(item,index) in imgArr.length" :key="index" :class="index===imgIndex?'active':'dot-box'" @click="selectImg(index)">
                </div>
            </div>
            <el-icon size="40" class="left-btn" @click="next(-1)"><ArrowLeftBold /></el-icon>
            <el-icon size="40" class="right-btn" @click="next(1)"><ArrowRightBold /></el-icon>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const imgIndex = ref(0);
const imgArr = [
    '@/assets/picture/登录界面/01.jpg',
    '@/assets/picture/登录界面/02.jpg',
    '@/assets/picture/登录界面/03.jpg'
];
const titles = [
    '🍑🍑🍑🍑🍑🍑','⚪⚪⚪⚪⚪⚪','❀❀❀❀❀❀'
];
const selectImg = (e) => {
    let currentImg = document.querySelector('.img');
    currentImg.style.opacity = '0';
    setTimeout(() => {
        currentImg.src = imgArr[e];
        imgIndex.value = e;
        currentImg.style.opacity = '1';
    }, 500);
};
const next = (e) => {
    e > 0 ? imgIndex.value += 1 : imgIndex.value -= 1;
    if (imgIndex.value >= imgArr.length) {
        imgIndex.value = 0;
    }
    if (imgIndex.value < 0) {
        imgIndex.value = imgArr.length - 1;
    }
    selectImg(imgIndex.value);
};
</script>


<style scoped lang="less">
.banner  {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    .left-btn, .right-btn {
        width:  0;
    }
    &:hover {
        .left-btn {
            position: absolute;
            cursor: pointer;
            top: 50%;
            left: 30px;
            width: auto;           
    
        }
        .right-btn {
            position: absolute;
            cursor: pointer;
            top: 50%;
            right: 30px;            
            width: auto;
        }
    }
    .img {
        display: none;
        &:first-child {
            display: block;
            height: 60vh;
            opacity: 1;
            transition: opacity 0.5s ease;
        }
    
    }
    .scale-enter-active{
        transition: all 1s ease-in-out;
      }
      
      .scale-leave-active {
        transition: all 1s linear;
      }
      
      .scale-enter-from{
        margin-right: 300px;
        opacity: 0;
      }
      .scale-leave-to {
        opacity: 0;
      }
    .content {
        position: absolute;
        top: 50%;
        font-size: 40px;
        color: #fff;
    }
 
    .dot-content {
        display: flex;
        position: absolute;
        bottom: 20px;
        justify-content: space-around;
        align-items: center;
        width: 100px;
        height: 30px;
 
        .dot-box {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #fff;
            cursor: pointer;
        }
        .active {
            cursor: pointer;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: red;
        }
    }
 
}
</style>