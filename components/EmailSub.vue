<template>
  <div
    dir="rtl"
    class="flex flex-col md:flex-row items-center justify-between p-6 rounded-lg md:px-14 my-10 gap-5"
  >
    <div
      class="mt-4 md:mt-0 flex-grow text-center md:text-right md:w-1/2 flex flex-col gap-2"
    >
      <img class="w-[12rem]" src="/assets/image/Logo_Header.svg" alt="" />
      <p>
        کسب و کارهای اینترنتی روز به روز، پر رنگ تـر میشن و الان رقبـات دارن به
        صورت آنلاین فعالیت میکنن، پس تا دیر نشده ایده‌ ات رو اجرا کن!
      </p>
    </div>
    <div class="md:w-1/2 justify-center flex flex-col">
      <div class="flex flex-row justify-end gap-1 my-2">
        <a href="#"
          ><img src="/assets/image/social/insta.svg" alt="instagram"
        /></a>
        <a href="#"
          ><img src="/assets/image/social/tel.svg" alt="telegram"
        /></a>
        <a href="#"
          ><img src="/assets/image/social/whatsup.svg" alt="whatsapp"
        /></a>
      </div>
      <div
        class="flex items-center bg-white shadow-md rounded-full overflow-hidden"
      >
        <input
          type="email"
          placeholder="برای اطلاع از جدیدترین اخبار و جشنوراه‌های تخفیفی مانا افزار ایمیل خود را وارد کنید"
          class="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
        />
        <button
          class="bg-manaNavy text-white px-6 py-2 rounded-full hover:bg-manaNavy2 focus:outline-none"
        >
          ثبت ایمیل
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSubscription",
};
</script>
