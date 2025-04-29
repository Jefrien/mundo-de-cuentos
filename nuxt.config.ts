// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'vuetify-nuxt-module',
    '@nuxt/content'
  ],
  runtimeConfig: {
    geminiApiKey: process.env.GEMINI_API_KEY
  },
  vuetify: {
    vuetifyOptions: './vuetify.config.ts'
  }
})