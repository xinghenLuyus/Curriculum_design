// banner切屏
var bannerImages = ["./picture/banner/1.jpg", "./picture/banner/2.jpg", "./picture/banner/3.jpg"];
        var currentIndex = 0;
        var bannerElement = document.querySelector("#banner img");

        function changeBannerImage() {
            currentIndex = (currentIndex + 1) % bannerImages.length;
            bannerElement.src = bannerImages[currentIndex];
        }

        setInterval(changeBannerImage, 3000);

