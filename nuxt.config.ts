import { resolve } from 'path'
import { withDocus } from '@docus/app'

// Learn more at https://docus.dev
export default withDocus({
  rootDir: __dirname,
  head: {
    titleTemplate: '%s | Nuxt',
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' }
    ],
    meta: [
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt.js' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://nuxtjs.org/preview.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://nuxtjs.org/preview.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Nuxt.js'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://nuxtjs.org/preview.png'
      }
    ],
    bodyAttrs: {
      class: ['min-w-xs']
    }
  },
  css: [resolve(__dirname, './assets/nuxt.css')],
  build: {
    transpile: ['ohmyfetch']
  },
  buildModules: [
    '@nuxt/typescript-build'
  ],
  windicss: {
    root: resolve(__dirname),
    config: resolve(__dirname, 'windi.config.js')
  },
  /**
   * Add image domains for nuxt-image on Vercel
   */
  hooks: {
    generate: {
      async done() {
        try {
          if (!process.env.VERCEL) return

          const { copy } = await import('fs-extra').then((r) => r.default || r)
          const src = resolve(__dirname, '.vercel_build_output')
          const dest = resolve(__dirname, '../.vercel_build_output')
          await copy(src, dest)
        } catch {
          // eslint-disable-next-line no-console
          console.log('Issue copying `.vercel_build_output` to project root.')
        }
      }
    }
  },
  vite: {
    server: {
      fs: {
        strict: false
      },
      optimizeDeps: {
        exclude: ['vue-demi', 'scule', '@vueuse/integrations', 'ohmyfetch'],
        include: ['defu', 'theme-colors', 'cookie', 'js-cookie', 'clipboard', 'property-information', 'ufo', 'url']
      }
    }
  },
  image: {
    screens: {
      avatarSm: 24,
      avatarLg: 48,
      logo: 32,
      migration: 536,
      blogImage: 864
    },
    domains: [
      'pbs.twimg.com',
      'source.unsplash.com',
      'images.unsplash.com',
      'github.com',
      'unsplash.com',
      'user-images.githubusercontent.com',
      'abs.twimg.com',
    ]
  },
  publicRuntimeConfig: {
    plausible: {
      domain: process.env.PLAUSIBLE_DOMAIN
    }
  }
})
