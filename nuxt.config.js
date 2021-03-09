export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Los mejores talleres mecánicos de Chile en un solo lugar.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Descubre, repara tu auto y compara precios de los mejores talleres mecánicos en Chile. En nuestra plataforma puedes cotizar, reservar y pagar servicios mecanicos para reparar tu auto. ' },
      { hid: 'og:url', property: 'og:url', content: 'https://mekaniko.cl' },
      { hid: 'og:title', property: 'og:title', content: 'Descubre, repara tu auto y compara precios en los mejores talleres mecánicos de Chile' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://mekaniko.cl/fb.png' },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://mekaniko.cl/fb.png' },
      { hid: 'og:description', property: 'og:description', content: 'Descubre, repara tu auto y compara precios en los mejores talleres mecánicos de Chile' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'mekaniko' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
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
  }
}
