<template>
  <div dir="rtl" class="relative">
    <img
      class="absolute right-0 top-[30rem] -z-10"
      src="/assets/image/blog-circle1.svg"
      alt="circle"
    />
    <img
      class="absolute left-0 top-[80rem] -z-10"
      src="/assets/image/blog-circle2.svg"
      alt="circle"
    />
    <!-- Filter Options -->
    <div
      class="relative flex flex-col justify-center mb-20 text-center pt-10 w-full items-center"
    >
      <img
        class="absolute inset-0 -z-10 w-full h-full object-cover"
        src="/assets/image/blog-banner.svg"
        alt="banner"
      />
      <div class="py-5">
        <p class="text-white text-3xl">وبلاگ طراحی سایت</p>
        <p class="text-white">
          در این قسمت می توانید از آخرین مقالات و پست های مربوط به فناوری
          اطلاعات و تکنولوژی کامپیوتر باخبر شوید. همچنین در صورت نیاز می توانید
          با استفاده از RSS تمامی مقالات وبلاگ مانا را در سایت و یا وبلاگ خود
          نیز نمایش دهید
        </p>
      </div>
      <div
        class="relative items-center md:-bottom-10 rounded-xl shadow-lg bg-white p-5 -bottom-[2rem]"
      >
        <div class="relative inline-block text-left">
          <div>
            <button
              @click="toggleDropdown"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              دسته بندی ها 🔽
            </button>
          </div>

          <div
            v-if="dropdownOpen"
            @click.outside="dropdownOpen = false"
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
          >
            <ul
              class="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
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
      </div>
    </div>
    <!-- Blog Items -->
    <div class="md:mt-0 xl:px-[14rem] container mx-auto p-4" :class="gridClass">
      <a
        href="#"
        v-for="blog in paginatedBlogData"
        :key="blog.id"
        class="max-w-sm w-full lg:max-w-full lg:flex mt-10 block bg-white"
      >
        <div class="rounded overflow-hidden shadow-lg h-full flex flex-col">
          <img
            class="w-full h-44 object-cover"
            :src="blog.img"
            alt="Image Description"
          />
          <div class="px-6 py-4 flex-grow">
            <div
              class="font-bold mb-2"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              {{ blog.title }}
            </div>
            <p
              class="text-gray-700 text-base overflow-hidden"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              {{ blog.description }}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >#{{ blog.category }}</span
            >
          </div>
        </div>
      </a>
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
    <div class="md:flex justify-center hidden pt-10 px-20">
      <ul class="grid grid-cols-4 gap-4 place-items-center">
        <li
          v-for="category in categories"
          :key="category"
          class="border-2 cursor-pointer px-4 py-2 rounded-xl hover:bg-manaNavy2 hover:text-white transition-colors duration-300"
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
</template>
<script setup>
import { ref, computed } from "vue";
import BlogArchive from "@/server/BlogArchive.json";

let dropdownOpen = ref(false);
const categories = ref([
  "همه",
  "سئو و بهینه سازی سایت",
  "اخبار پرتال",
  "شروع به کار و کسب درآمد",
  "افزایش فروش",
  "راه اندازی سایت و فروشگاه اینترنتی",
  "بازاریابی اینترنتی",
  "داستان‌های موفقیت",
]); // Example categories
const selectedCategory = ref("همه");
const currentPage = ref(1);
const itemsPerPage = ref(10);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const BlogData = BlogArchive.BlogData;
const filteredBlogData = computed(() => {
  if (selectedCategory.value === "همه") {
    return BlogData;
  }
  return BlogData.filter((item) => item.category === selectedCategory.value);
});

const totalPages = computed(() => {
  return Math.ceil(filteredBlogData.value.length / itemsPerPage.value);
});

const paginatedBlogData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredBlogData.value.slice(start, end);
});

const gridClass = computed(() => {
  const rowCount = Math.min(paginatedBlogData.value.length, itemsPerPage.value);
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
