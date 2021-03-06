// Use description from package.json as page title
const title = process.env.npm_package_description || ''

/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/nuxt-privacy-message-example/'
        }
      }
    : {}

export default {
  ...routerBase,
  mode: 'universal',
  head: {
    title,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ]
  },
  loading: {
    color: '#fff'
  },
  css: ['@/css/main.scss'],
  postcss: {
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%', 'ie >= 11']
    }
  },
  build: {
    babel: {
      sourceType: 'unambiguous'
    },
    transpile: ['nuxt-vuex-localstorage']
  },
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/typescript-build'],
  modules: [
    [
      'nuxt-vuex-localstorage',
      {
        localStorage: ['cookies'],
        mode: 'debug'
      }
    ],
    '@nuxtjs/svg'
  ]
}
