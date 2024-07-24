/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_theme_files/**/*.{html,js}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      body: ["Vazirmatn", "sans-serif"],
    },

    extend: {
      colors: {
        manaGreen: "#06d6a0",
        manaNavy: "#118ab2",
        manaNavy2: "#0c5b75",
        manaGreen2: "#05b083",
        manaRed: "#ef476f",
        manaBlack: "#424242",
        manaGray: "#757575",
        manaWhite: "#f5f5f5",
        manaWhite2: "#e0e0e0",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
