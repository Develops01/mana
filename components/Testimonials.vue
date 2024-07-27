<template>
  <div class="py-10 bg-manaGreen">
    <div class="text-center py-10">
      <p class="text-4xl text-manaWhite">اعتمــاد مشتریــان</p>
      <p class="text-manaWhite2">
        نظرات برخی از مشتری‌های مانا افزار را در مورد خدمات این شرکت برای رونق
        کسب و کارشان بدانید
      </p>
    </div>
    <swiper
      class="shadow-xl rounded-3xl md:w-3/5"
      :modules="[SwiperNavigation]"
      :slides-per-view="1"
      :loop="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
    >
      <swiper-slide
        dir="rtl"
        v-for="(slide, index) in slides"
        :key="index"
        class="flex items-center"
      >
        <div class="flex flex-row p-4 bg-white rounded-3xl \w-full px-14">
          <div class="flex items-center w-[15rem] ml-3">
            <img
              class="object-contain rounded-full"
              :src="slide.image"
              alt="Avatar"
            />
          </div>
          <div class="flex flex-col justify-center">
            <p class="text-gray-700 mb-4">{{ slide.text }}</p>
            <span class="font-bold text-manaNavy">{{ slide.name }}</span>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          text: "طراحی سایت مانا افزار تبلیغ بر اساس دسترسی راحت کاربران به محصولات و مشاهده ویژگی‌های آنان و همچنین هدایت کاربران به صفحات با اهمیت انجام شده است.",
          image:
            "http://localhost:3000/_nuxt/assets/image/carousel-img/brad.jpg",
          name: "وبسایت فروشگاه رادهم",
        },
        {
          text: "طراحی سایت مانا افزار تبلیغ بر اساس دسترسی راحت کاربران به محصولات و مشاهده ویژگی‌های آنان و همچنین هدایت کاربران به صفحات با اهمیت انجام شده است.",
          image: "http://localhost:3000/_nuxt/assets/image/carousel-img/ed.jpg",
          name: "وبسایت فروشگاه رادهم",
        },
        {
          text: "طراحی سایت مانا افزار تبلیغ بر اساس دسترسی راحت کاربران به محصولات و مشاهده ویژگی‌های آنان و همچنین هدایت کاربران به صفحات با اهمیت انجام شده است.",
          image:
            "http://localhost:3000/_nuxt/assets/image/carousel-img/mosh.jpg",
          name: "وبسایت فروشگاه رادهم",
        },
      ],
    };
  },
};
</script>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  color: #fff;
  width: 2rem;
  height: 2rem;
  background-color: #06d6a0;
  border-radius: 100%;
}
</style>
