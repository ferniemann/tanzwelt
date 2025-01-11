/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./views/**/*.vue",
    "./app.vue",
    "./error.vue",
    "./node_modules/flyonui/flyonui.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flyonui"), require("flyonui/plugin")],
  flyonui: {
    themes: ["light"],
  },
};
