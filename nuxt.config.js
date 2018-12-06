module.exports = {
  mode: 'universal',
  head: {
    title: 'DEMO-NUXT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DEMO-NUXT' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    middleware: 'authorize' // 中间件全局使用，单个页面使用可在需要使用的页面上配置
  },
  loading: { 
    color: '#561215' 
  },
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  build: {
    extend(config, ctx) {
      
    }
  }
}
// npm install body-parser express-session express-mysql-session jwt-decode --save