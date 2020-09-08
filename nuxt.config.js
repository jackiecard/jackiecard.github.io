
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Jackie Cardozo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I\'m Jackie! I\'m a developer and I have been making websites every since I was 12 years old. I love building interactive things but I\'m not very good at updating them. ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    './assets/css/normalize.css',
    './assets/css/variables.css'
  ],
  content: {
    markdown: {
      remarkPlugins: ['remark-emoji']
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#7F47DD', height: '3px' },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/components/focustrap',
    '~/plugins/directives/clickout/clickout',
    '~/plugins/components/vue-clamp',
    '~/plugins/directives/vue-lazyload',
    { src: '~plugins/ga.js', mode: 'client'}
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
