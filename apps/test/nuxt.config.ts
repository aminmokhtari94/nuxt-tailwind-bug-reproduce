// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["../../layers/base"],
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss"],
});
