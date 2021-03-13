export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Los mejores talleres mecánicos de Chile en un solo lugar.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Descubre, repara tu auto y compara precios de los mejores talleres mecánicos en Santiago de Chile. En nuestra plataforma puedes cotizar, reservar y pagar servicios mecanicos para reparar tu auto. ' },
      { hid: 'og:url', property: 'og:url', content: 'https://mekaniko.cl' },
      { hid: 'og:title', property: 'og:title', content: 'Descubre, repara tu auto y compara precios en los mejores talleres mecánicos en Santiago de Chile' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://mekaniko.cl/fb.png' },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://mekaniko.cl/fb.png' },
      { hid: 'og:description', property: 'og:description', content: 'Descubre, repara tu auto y compara precios en los mejores talleres mecánicos de Chile' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'mekaniko' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/typography.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuelidate'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-mq'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'es',
      name: 'Los mejores talleres mecanicos de Chile',
      short_name: 'mekaniko',
      background_color: '#333',
      start_url: '/',
      theme_color: '#333',
      display: 'fullscreen'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  styleResources: {
    scss: [
      './assets/scss/colors.scss',
      './assets/scss/breakpoints.scss'
    ]
  },

  mq: {
    defaultBreakpoint: 'desktop',
    breakpoints: {
      phoneSmall: 360,
      phone: 490,
      tablet: 780,
      desktop: Infinity
    }
  }

  // googleAnalytics: {
  //   // Uncomment the debug object to enable debugging
  //   // debug: {
  //   //   enabled: true,
  //   //   sendHitTask: false
  //   // },
  //   id: process.env.GOOGLE_ANALYTICS_ID,
  //   disabled: () => {
  //     const consent = JSON.parse(localStorage.getItem('OB_cookie_consent'))
  //     return consent ? !consent.statistics : true
  //   }
  // }
}
