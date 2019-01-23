const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Mouse Create Tools & Help',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'msapplication-TileColor', content: '#FF3333' },
      { name: 'msapplication-TileImage', content: '/images/touch-icons/mouse-touch-icon-144.png' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/images/touch-icons/mouse-touch-icon-57.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/images/touch-icons/mouse-touch-icon-114.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/touch-icons/mouse-touch-icon-72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/img/mouse-touch-icon-76.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/touch-icons/mouse-touch-icon-144.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/touch-icons/mouse-touch-icon-120.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/touch-icons/mouse-touch-icon-152.png' },
      { rel: 'icon', type: 'image/png', href: '/images/touch-icons/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/images/touch-icons/favicon-16x16.png', sizes: '16x16' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],
  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: false,
    breaks: true
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      module: {
        rules: [{
          test: /\.md/,
          loader: 'markdownit-loader'
        }]
      }
    }
  }
}
