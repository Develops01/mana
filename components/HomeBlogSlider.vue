<template>
  <div class="relative">
    <img
      class="w-full"
      src="/assets/image/blog/blog-wave.svg"
      alt="back ground"
    />
    <div
      class="flex py-10 gap-2 text-center flex-col items-center justify-center w-full"
    >
      <p class="md:text-4xl text-3xl text-manaGreen">
        آخرین مقـالات مانـا افــزار
      </p>
      <p class="text-lg text-manaGray">
        نوشتن کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا همیشه به
        روز باشیم
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
            <div class="px-6 py-4 flex flex-col items-center w-full">
              <p
                class="font-bold py-2 px-5 bg-manaWhite2 text-manaGray rounded-full text-center mb-2 -mt-10 z-10"
              >
                {{ product.category }}
              </p>
              <p
                class="text-gray-700 text-base text-center overflow-hidden overflow-ellipsis mt-6"
                style="height: 100px"
              >
                {{ product.description }}
              </p>
            </div>
            <div class="flex justify-center items-end mt-auto w-full">
              <button class="button01">
                <a href="#">مطالعه</a>
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
        <a href="#">مقـالات بیشتر</a>
      </button>
    </div>
    <img
      class="absolute top-10 left-20"
      src="/assets/image/blog/blog-books.svg"
      alt="book"
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
