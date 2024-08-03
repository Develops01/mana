<script setup>
import serviceData from "@/server/serviceData.json";
const services = serviceData.serviceList;
</script>
<template>
  <div
    class="flex w-full flex-col justify-center items-center relative lg:px-20"
  >
    <div class="flex flex-col text-center my-10">
      <p class="md:text-4xl text-3xl text-manaGreen">
        خدمات حرفه‌ای مانا افزار
      </p>
      <p class="text-lg text-manaGray">
        اینجــــا پنجــــره‌ای رو بــه دنیـــای پیشـــرفت است
      </p>
    </div>
    <div
      class="md:grid flex flex-col md:grid-cols-4 md:grid-rows-2 gap-10 md:mx-10 my-10"
    >
      <div
        v-for="service in services"
        :key="service.id"
        class="flex flex-col justify-between items-center border rounded-3xl p-5 pt-20 text-center relative flex-1 bg-white shadow-lg"
      >
        <img class="absolute -top-12" :src="service.picture" alt="" />
        <div class="flex flex-col flex-grow justify-center items-center">
          <p class="text-2xl text-manaNavy2 my-1">{{ service.title }}</p>
          <p class="text-manaGray">{{ service.description }}</p>
        </div>
        <div class="mt-4">
          <button class="button01"><a href="#">توضیحات بیشتر</a></button>
        </div>
      </div>
    </div>
    <img
      class="absolute right-10 top-20"
      src="/assets/image/eyeGlass.svg"
      alt="eye glass"
    />
    <img
      class="absolute top-0 right-0 inset-0 -z-10 w-full h-full object-cover"
      src="/assets/image/service-wave.svg"
      alt="service wave"
    />
  </div>
</template>
