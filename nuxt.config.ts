// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "@fontsource/vazirmatn/arabic.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // generate: {
  //   routes: ["/users/:id", "/blogs/:id", "/products/:id"],
  // },
  modules: ["nuxt-swiper"],
});
