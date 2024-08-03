<template>
  <div class="relative py-10">
    <div
      class="relative flex py-10 gap-2 text-center flex-col items-center justify-center w-full"
    >
      <p class="md:text-4xl text-3xl text-manaGreen">
        جـدیـدتـریــن دوره‌هــــا
      </p>
      <p class="text-lg text-manaGray">
        ما در تلاشیم تا آموزشهای کاربردی را برای دوستداران به آموزش، مهیا سازیم.
      </p>
    </div>
    <div class="xl:mx-36">
      <Swiper
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :slides-per-view="1"
        :space-between="spaceBetween"
        :centered-slides="true"
        :pagination="{
          hideOnClick: true,
        }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :breakpoints="{
          768: {
            slidesPerView: 4,
          },
        }"
        @swiperprogress="onProgress"
        @swiperslidechange="onSlideChange"
      >
        <SwiperSlide
          class="py-10"
          v-for="product in products"
          :key="product.id"
        >
          <div
            class="mx-4 max-w-sm rounded-3xl overflow-hidden shadow-lg p-4 flex flex-col items-center"
            style="height: 500px"
          >
            <img
              class="w-full rounded-lg object-cover h-48"
              :src="product.img"
              alt="Product Image"
            />
            <div class="px-6 py-4 relative flex flex-col items-center w-full">
              <p
                class="font-bold py-2 px-5 bg-manaRed rounded-full text-white mb-2 absolute -top-6"
              >
                {{ product.category }}
              </p>
              <p
                class="text-gray-700 text-base m-5 text-center overflow-ellipsis"
                style="height: 80px"
              >
                {{ product.description }}
              </p>
            </div>
            <div class="py-4 flex justify-center space-x-1">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >
                {{ product.price }}
              </span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >
                {{ product.timer }} ⌛
              </span>
            </div>
            <div class="px-6 py-4 text-center w-full">
              <button class="button01">
                <a href="#">مشاهده دوره</a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <!-- Add Navigation -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </Swiper>
    </div>
    <div class="w-full flex justify-center">
      <button class="button01">
        <a href="#">دوره‌هــــای اموزشی بیشتر</a>
      </button>
    </div>
    <img
      class="absolute inset-0 -z-10 w-full h-full object-cover"
      src="/assets/image/edu-back.svg"
      alt="back ground"
    />
    <img
      class="absolute inset-0 lg:top-16 -top-10 left-10 lg:left-32 z-10"
      src="/assets/image/slider/hat.svg"
      alt=""
    />
    <img
      class="w-full absolute -z-10 -bottom-32"
      src="/assets/image/slider/slider-wave.svg"
      alt="wave"
    />
  </div>
</template>
<script setup>
import productData from "@/server/productData.json";
const products = productData.productsData;
</script>
<style scoped>
.swiper-button-next,
.swiper-button-prev {
  color: #fff;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #06d6a0;

  border-radius: 100%;
}
</style>
