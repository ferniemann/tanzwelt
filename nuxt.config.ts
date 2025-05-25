// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/global.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  fonts: {
    provider: "bunny",
  },
  plugins: ["~/plugins/flyonui.client.ts"],
});