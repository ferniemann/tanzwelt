import * as flyonui from "flyonui";
import * as flyonuiPlugin from "flyonui/plugin";

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
    extend: {
      fontFamily: {
        display: ["Pattaya"],
      },
      animation: {
        blur: "blur 1s linear",
        blurSlow: "blur 3s linear",
        moveInLeft: "moveInLeft 1s linear",
        moveInRight: "moveInRight 1s linear",
        fadeIn: "fadeIn 1s linear",
        fadeInSlow: "fadeIn 3s linear",
      },
      keyframes: {
        blur: {
          "0%": {
            filter: "blur(0px)",
          },
          "100%": {
            filter: "blur(5px)",
          },
        },
        moveInLeft: {
          "0%": {
            left: "100%",
          },
          "100%": {
            left: "0%",
          },
        },
        moveInRight: {
          "0%": {
            right: "100%",
          },
          "100%": {
            right: "0%",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [flyonui, flyonuiPlugin],
  flyonui: {
    themes: ["light"],
  },
};
