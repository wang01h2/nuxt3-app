import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  router: {
    base: process.env.NODE_ENV === 'production' ? '/nuxt3-app/' : '/', // 使用 './' 主要是为了适配以相对路径打开的静态站点
  },
  typescript: {
    shim: false,
  },
  css: ['~/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
