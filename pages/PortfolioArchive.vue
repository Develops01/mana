<template>
  <div dir="rtl">
    <!-- Filter Options -->
    <div
      class="relative flex flex-col justify-center mb-20 text-center bg-manaNavy p-14 w-full items-center"
    >
      <div class="py-5">
        <p class="text-white text-3xl">نمونه کار ها</p>
        <p class="text-white">مانا چگونه به موفقیت دیگران کمک کرده است</p>
      </div>
      <div
        class="absolute items-center md:-bottom-8 rounded-xl shadow-lg bg-white p-5 -bottom-[19rem]"
      >
        <ul class="flex md:flex-row flex-col justify-center gap-4">
          <li
            v-for="category in categories"
            :key="category"
            class="cursor-pointer px-4 py-2 rounded hover:bg-manaNavy2 hover:text-white transition-colors duration-300"
            :class="{
              'bg-manaNavy text-white': selectedCategory === category,
            }"
            @click="selectCategory(category)"
          >
            {{ category }}
          </li>
        </ul>
      </div>
    </div>
    <!-- Portfolio Items -->
    <div class="md:mt-0 mt-[20rem] xl:px-[14rem]" :class="gridClass">
      <div
        v-for="portfolio in paginatedPortfolioData"
        :key="portfolio.id"
        class="flex flex-col justify-between items-center rounded-lg w-full h-full"
      >
        <div class="flex justify-center items-center w-full h-80">
          <img
            class="object-contain w-full h-full"
            :src="portfolio.img"
            alt="pic"
          />
        </div>
        <button class="relative button01">
          <a href="#" class="absolute -top-7">{{ portfolio.name }}</a>
        </button>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-center flex-wrap mt-8">
      <button
        class="px-2 py-1 mx-1 md:px-4 md:py-2 md:mx-2 bg-manaNavy text-white rounded-full"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        قبلی
      </button>
      <button
        class="px-2 py-1 mx-1 md:px-4 md:py-2 md:mx-2 text-manaGray hover:bg-manaGreen hover:text-white transition-colors duration-300 rounded-full"
        v-for="page in totalPages"
        :key="page"
        :class="{ 'bg-manaGreen text-white': currentPage === page }"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
      <button
        class="px-2 py-1 mx-1 md:px-4 md:py-2 md:mx-2 bg-manaNavy rounded-full text-white"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
      >
        بعدی
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import portfolioArchive from "@/server/portfolioArchive.json";

const PortfolioData = portfolioArchive.PortfolioData;
const categories = ref([
  "همه",
  "بهترین نمونه کارها",
  "نمونه کار طراحی سایت",
  "نمونه کار اپلیکیشن",
  "نمونه کار UI",
  "نمونه کار SEO",
]); // Example categories
const selectedCategory = ref("همه");
const currentPage = ref(1);
const itemsPerPage = ref(10);

const filteredPortfolioData = computed(() => {
  if (selectedCategory.value === "همه") {
    return PortfolioData;
  }
  return PortfolioData.filter(
    (item) => item.category === selectedCategory.value
  );
});

const totalPages = computed(() => {
  return Math.ceil(filteredPortfolioData.value.length / itemsPerPage.value);
});

const paginatedPortfolioData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredPortfolioData.value.slice(start, end);
});

const gridClass = computed(() => {
  const rowCount = Math.min(
    paginatedPortfolioData.value.length,
    itemsPerPage.value
  );
  return `md:grid grid-cols-2 grid-rows-${Math.ceil(
    rowCount / 2
  )} place-items-center gap-5`;
});

function changePage(page) {
  if (page > 0 && page <= totalPages.value) {
    currentPage.value = page;
  }
}

function selectCategory(category) {
  selectedCategory.value = category;
  currentPage.value = 1; // Reset to first page on category change
}
</script>
