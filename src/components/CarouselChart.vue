<template>
    <div id="CarouselChart">
      <div class="banner">
        <img :src="currentImage" class="img">
  
        <div class="dot-content">
          <div v-for="(item, index) in imgArr.length" :key="index" :class="index === imgIndex ? 'active' : 'dot-box'" @click="selectImg(index)">
          </div>
        </div>
  
        <div class="left-btn" @click="next(-1)">
          <img src="@/assets/picture/left.png" alt="" id="left-icon">
        </div>
  
        <div class="right-btn" @click="next(1)">
          <img src="@/assets/picture/right.png" alt="" id="right-icon">
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    name: 'CarouselChart',
    setup() {
      const imgIndex = ref(0);
      const imgArr = [
        require('@/assets/picture/登录界面/01.jpg'),
        require('@/assets/picture/登录界面/02.jpg'),
        require('@/assets/picture/登录界面/03.jpg')
      ];
  
      const currentImage = ref(imgArr[imgIndex.value]);
  
      const selectImg = (e) => {
        let currentImg = document.querySelector('.img');
        currentImg.style.opacity = '0';
        setTimeout(() => {
          currentImage.value = imgArr[e];
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
  
      // 自动轮播
      const startAutoPlay = () => {
        return setInterval(() => {
          next(1);
        }, 3000); // 每3秒切换一次
      };
  
      let autoPlayInterval;
  
      onMounted(() => {
        autoPlayInterval = startAutoPlay();
      });
  
      onUnmounted(() => {
        clearInterval(autoPlayInterval);
      });
  
      return {
        imgIndex,
        imgArr,
        currentImage,
        selectImg,
        next
      };
    }
  }
  </script>
  
<style scoped>
    #left-icon, #right-icon {
        width: 20%;
    }
    
    .banner {
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    
    .left-btn, .right-btn {
        width: 0;
    }
    
    .banner:hover .left-btn {
        position: absolute;
        cursor: pointer;
        top: 50%;
        left: 30px;
        width: auto;
    }
    
    .banner:hover .right-btn {
        position: absolute;
        cursor: pointer;
        top: 50%;
        right: -100px;
        width: auto;
    }
    
    .img {
        display: block;
        height: 60vh;
        opacity: 1;
        transition: opacity 0.5s ease;
    }
    
    .dot-content {
        display: flex;
        position: absolute;
        bottom: 20px;
        justify-content: space-around;
        align-items: center;
        width: 100px;
        height: 30px;
    }
    
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
  
/* 自适应 */
  @media (max-width: 1200px) {
    .img {
      height: 50vh;
    }
  
    #left-icon, #right-icon {
      width: 15%;
    }
  
    .dot-content {
      width: 80px;
      height: 25px;
    }
  
    .dot-box, .active {
      width: 15px;
      height: 15px;
    }
  }
  
  @media (max-width: 768px) {
    .banner:hover .right-btn {
    position: absolute;
    cursor: pointer;
    top: 50%;
    right: -150px;
    width: auto;
    }
    .img {
      height: 40vh;
    }
  
    #left-icon, #right-icon {
      width: 10%;
    }
  
    .dot-content {
      width: 60px;
      height: 20px;
    }
  
    .dot-box, .active {
      width: 10px;
      height: 10px;
    }
  }
  
  @media (max-width: 480px) {
    .img {
      height: 30vh;
    }
  
    .dot-content {
      width: 50px;
      height: 15px;
    }
  
    .dot-box, .active {
      width: 8px;
      height: 8px;
    }
  }
</style>