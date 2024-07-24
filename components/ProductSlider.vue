<template>
  <div>
    <Carousel :per-page="3">
      <Slide v-for="product in products" :key="product.id">
        <div class="max-w-sm rounded overflow-hidden shadow-lg p-4">
          <img class="w-full" :src="product.img" alt="Product Image">
          <div class="px-6 py-4 relative flex justify-center">
            <p class="font-bold py-2 px-5 bg-manaRed rounded-full text-white  mb-2 absolute -top-6">{{ product.category }}</p>
            <p class="text-gray-700 text-base mt-5">{{ product.description }}</p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {{ product.price }}
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {{ product.timer }} ⌛
            </span>
          </div>
          <div class="px-6 py-4 text-center">
            <button class="button01">
              <a href="#">مشاهده دوره</a>  
            </button>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import productData from '@/server/productData.json'
const products = productData.productsData
</script>

<style scoped>
/* Add your custom styles here */
</style>
