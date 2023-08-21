// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  pages: true,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
  ],
  runtimeConfig: {
    public: {
      appURL: "http://localhost:8000",
    },
  },
  // ssr: false,
  routeRules: {
    "/**": { ssr: false },
    "/profiles/**": { ssr: true },
  },
})
