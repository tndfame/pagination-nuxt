export default defineNuxtConfig({
  devtools: { enabled: true } ,
  css: ["vuetify/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  }
})
