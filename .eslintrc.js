module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  // More Vue rules can be found here: https://eslint.vuejs.org/rules/
  rules: {
    // Tech Team uses PascalCase for templates, but nuxt-link is special, so should be ignored
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: ['nuxt-link']
    }]
  }
}
