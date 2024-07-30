<template>
  <div dir="rtl">
    <div
      class="relative flex flex-col justify-center mb-20 text-center bg-manaNavy p-14 w-full items-center"
    >
      <div class="py-5">
        <p class="text-white text-3xl mb-5">سوالات متداول</p>
        <p class="text-white">
          در اینجا به برخی سوالاتی که ممکن است برای شما پیش بیاید، پاسخ داده ایم
        </p>
      </div>
    </div>
    <div class="max-w-6xl mx-auto p-4">
      <!-- Category Filter Section -->
      <div class="flex justify-around border-b mb-4">
        <button
          v-for="(category, index) in categories"
          :key="index"
          :class="{
            'text-blue-500 border-blue-500': activeCategory === category,
            'border-transparent': activeCategory !== category,
          }"
          class="pb-2 px-4 border-b-2 focus:outline-none"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <!-- FAQ Items -->
      <div v-for="faq in filteredFaqs" :key="faq.question" class="mb-4">
        <button
          class="w-full text-left flex justify-between items-center p-4 bg-gray-100 rounded"
          @click="toggleFaq(faq)"
        >
          <span>{{ faq.question }}</span>
          <svg
            :class="{ 'transform rotate-180': faq.isOpen }"
            class="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div v-if="faq.isOpen" class="p-4 text-gray-700">
          {{ faq.answer }}
        </div>
      </div>
    </div>
    <div class="max-w-xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 class="text-2xl font-semibold text-manaGreen mb-4 text-center">
        پاسخ‌گویی به سوالات
      </h2>
      <p class="text-gray-600 mb-6 text-center">
        سوال مورد نظر خود را ارسال کنید.
      </p>
      <form @submit.prevent="submitForm">
        <div class="grid grid-cols-1 gap-4">
          <input
            type="text"
            v-model="form.name"
            placeholder="نام و نام خانوادگی را اینجا وارد نمایید"
            class="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-manaGreen"
            required
          />
          <input
            type="text"
            v-model="form.phone"
            placeholder="شماره همراه"
            class="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-manaGreen"
            required
          />
          <input
            type="email"
            v-model="form.email"
            placeholder="پست الکترونیکی"
            class="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-manaGreen"
            required
          />
          <select
            v-model="form.subject"
            class="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-manaGreen"
            required
          >
            <option value="" disabled>موضوع</option>
            <option value="question">سوال</option>
            <option value="feedback">بازخورد</option>
            <option value="other">دیگر</option>
          </select>
          <textarea
            v-model="form.message"
            placeholder="توضیحات لازم را اینجا وارد کنید"
            class="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-manaGreen"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" class="mt-4 button01 p-3">
          <a>ارسال</a>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import faqsData from "@/server/faqData.json";
const faqData = faqsData.faqs;
export default {
  data() {
    return {
      activeCategory: "همه",
      form: {
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      },
      categories: [
        "همه",
        "راه اندازی وبسایت",
        "سئو یا بهینه سازی",
        "هاست و دامنه",
        "پشتیبانی",
        "زبان های برنامه نویسی",
        "مراحل عقد قرارداد",
      ],
      faqs: faqData,
    };
  },
  computed: {
    filteredFaqs() {
      if (this.activeCategory === "همه") {
        return this.faqs;
      }
      return this.faqs.filter((faq) => faq.category === this.activeCategory);
    },
  },
  methods: {
    submitForm() {
      // Handle form submission, e.g., send data to the server
      alert("Form submitted!");
      console.log(this.form);
      // Reset form fields
      this.form = {
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      };
    },
    toggleFaq(faq) {
      faq.isOpen = !faq.isOpen;
    },
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
