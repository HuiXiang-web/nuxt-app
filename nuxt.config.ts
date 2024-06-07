// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    '/api/track/**': { cors: true }
  },

  modules: ['@nuxtjs/supabase']
})