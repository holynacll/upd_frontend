// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  pages: true,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    config: {
      content: ["./node_modules/laravel-vue-pagination/**/*.vue"],
    },
  },
  runtimeConfig: {
    public: {
      appURL: "http://localhost:8000",
    },
  },
})
