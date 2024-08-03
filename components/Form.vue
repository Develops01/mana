<template>
  <div class="relative">
    <div class="text-center pb-14">
      <p class="text-4xl my-5 text-manaGreen">درخـواست مشــاوره رایگــان</p>
      <p class="text-manaGray">
        از طريق فرم ذيل ميتوانيد نسبت به استعلام قيمت طراحی وب سايت و يا ثبت
        سفارش طراحی وب سايت، اقدام بفرماييد
      </p>
    </div>
    <form
      dir="rtl"
      class="text-right bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl mx-auto space-y-6 md:m-auto"
    >
      <!-- Implementation Method Section -->
      <div class="flex flex-col md:flex-row justify-center gap-5">
        <div class="bg-gray-50 p-4 md:w-1/3 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-3">روش پیاده‌سازی</h3>
          <div class="flex flex-col gap-3 space-y-2">
            <label class="inline-flex items-center">
              <input
                type="radio"
                name="implementation"
                value="custom"
                class="form-radio h-4 w-4 text-manaNavy"
              />
              <span class="mr-2">اختصاصی</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                name="implementation"
                value="wordpress"
                class="form-radio h-4 w-4 text-manaNavy"
              />
              <span class="mr-2">وردپرس</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                name="implementation"
                value="unknown"
                class="form-radio h-4 w-4 text-manaNavy"
              />
              <span class="mr-2">اطلاعی ندارم</span>
            </label>
          </div>
        </div>

        <!-- Website Type Section -->
        <div class="bg-gray-50 md:w-1/3 p-4 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-3">نوع وب‌سایت</h3>
          <div class="flex space-y-2">
            <div class="flex flex-col w-full gap-3">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="website_type"
                  value="personal"
                  class="form-radio h-4 w-4 text-manaNavy"
                />
                <span class="mr-2">سایت شخصی</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="website_type"
                  value="company"
                  class="form-radio h-4 w-4 text-manaNavy"
                />
                <span class="mr-2">سایت شرکتی</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="website_type"
                  value="store"
                  class="form-radio h-4 w-4 text-manaNavy"
                />
                <span class="mr-2">فروشگاه اینترنتی</span>
              </label>
            </div>
            <div class="flex flex-col gap-3 w-full">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="website_type"
                  value="portal"
                  class="form-radio h-4 w-4 text-manaNavy"
                />
                <span class="mr-2">پرتال سازمانی</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="website_type"
                  value="other"
                  class="form-radio h-4 w-4 text-manaNavy"
                />
                <span class="mr-2">سایر</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Order Type Section -->
        <div class="bg-gray-50 p-4 md:w-1/3 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold mb-3">نوع سفارش</h3>
          <div class="flex flex-row gap-8 space-y-2">
            <div class="flex flex-col gap-3">
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  name="order_type"
                  value="design"
                  class="form-checkbox h-4 w-4 text-manaNavy"
                />
                <span class="mr-2">طراحی سایت</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  name="order_type"
                  value="application"
                  class="form-checkbox h-4 w-4 text-manaNavy"
                />
                <span class="mr-2">اپلیکیشن</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  name="order_type"
                  value="logo"
                  class="form-checkbox h-4 w-4 text-manaNavy"
                />
                <span class="mr-2">لوگو</span>
              </label>
            </div>
            <div class="flex flex-col gap-3">
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  name="order_type"
                  value="seo"
                  class="form-checkbox h-4 w-4 text-manaNavy"
                />
                <span class="mr-2">سئو</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  name="order_type"
                  value="content"
                  class="form-checkbox h-4 w-4 text-manaNavy"
                />
                <span class="mr-2">تولید محتوای سایت</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  name="order_type"
                  value="support"
                  class="form-checkbox h-4 w-4 text-manaNavy"
                />
                <span class="mr-2">پشتیبانی سایت</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- Personal Information Section -->
      <div class="space-y-4">
        <div class="flex w-full gap-5 flex-col lg:flex-row">
          <div class="flex flex-col gap-2 w-full">
            <div>
              <label class="block text-gray-700 font-bold mb-1"
                >نام و نام خانوادگی</label
              >
              <input
                type="text"
                class="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-manaGreen2 focus:ring focus:ring-manaGreen focus:ring-opacity-50"
              />
            </div>
            <div>
              <label class="block text-gray-700 font-bold mb-1"
                >پست الکترونیکی</label
              >
              <input
                type="email"
                class="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-manaGreen2 focus:ring focus:ring-manaGreen focus:ring-opacity-50"
              />
            </div>
          </div>
          <div class="flex flex-col gap-2 w-full">
            <div>
              <label class="block text-gray-700 font-bold mb-1"
                >شماره همراه</label
              >
              <input
                type="text"
                class="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-manaGreen2 focus:ring focus:ring-manaGreen focus:ring-opacity-50"
              />
            </div>
            <div>
              <label class="block text-gray-700 font-bold mb-1"
                >محل بارگذاری فایل</label
              >
              <div class="flex my-5 items-center">
                <input
                  id="file-upload"
                  type="file"
                  class="hidden"
                  @change="handleFileChange"
                />
                <label for="file-upload" class="button01">
                  <a> انتخاب فایل</a>
                </label>
                <span v-if="selectedFileName" class="mr-3 text-gray-600">{{
                  selectedFileName
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label class="block text-gray-700 font-bold mb-1">توضیحات</label>
          <textarea
            class="form-textarea mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-manaGreen2 focus:ring focus:ring-manaGreen focus:ring-opacity-50"
          ></textarea>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="text-right">
        <button type="submit" class="button01">
          <a> ارسال درخواست</a>
        </button>
      </div>
    </form>
    <img
      class="absolute top-0 right-0 inset-0 -z-10 w-full h-full object-fill"
      src="/assets/image/form-background.svg"
      alt="back ground"
    />
    <img
      class="absolute top-16 right-28"
      src="/assets/image/form-phone.svg"
      alt=""
    />
    <img
      class="w-full object-fill"
      src="/assets/image/Vector-form.svg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFileName: null,
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      this.selectedFileName = file ? file.name : null;
    },
  },
};
</script>
