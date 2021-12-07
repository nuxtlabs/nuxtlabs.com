import { resolve } from 'path'
import { withDocus } from '@docus/app'

// Learn more at https://docus.dev
export default withDocus({
  rootDir: __dirname,
  head: {
    title: 'NuxtLabs: Intuitive Web Development',
    link: [
      {
        rel: 'stylesheet',
        href:
          // eslint-disable max-len
          'https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
    ],
    meta: [
      { hid: 'og:site_name', property: 'og:site_name', content: 'NuxtLabs' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://nuxtlabs.com/img/social/nuxtlabs.jpg',
      },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'NuxtLabs' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxtlabs' },
      {
        hid: 'twitter:image',
        property: 'og:image',
        content: 'https://nuxtlabs.com/img/social/nuxtlabs.jpg',
      },
    ],
    bodyAttrs: {
      class: ['min-w-xs overflow-y-scroll font-inter'],
    },
  },
  css: [resolve(__dirname, './assets/nuxt.css')],
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://www.npmjs.com/package/vue-plausible
    'vue-plausible',
    // https://motion.vueuse.org
    'nuxt-use-motion',
  ],
  pwa: {
    manifest: {
      name: 'NuxtLabs',
      short_name: 'NuxtLabs',
      description: 'Intuitive Web Development',
      background_color: '#FFFFFF',
      theme_color: '#FFFFFF',
    },
    // meta: false,
    icon: true,
  },
  windicss: {
    root: resolve(__dirname),
    config: resolve(__dirname, 'windi.config.ts'),
  },
  generate: {
    // TODO: remove this, current hotfix since Docus does not detect the other links
    routes: ['/', '/nuxtjs', '/docus', '/vuetelescope', '/about'],
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
      },
    },
  },
  vite: {
    server: {
      fs: {
        strict: false,
      },
      optimizeDeps: {
        exclude: ['vue-demi', 'scule', '@vueuse/integrations', 'ohmyfetch'],
        include: [
          'defu',
          'theme-colors',
          'cookie',
          'js-cookie',
          'clipboard',
          'property-information',
          'ufo',
          'url',
        ],
      },
    },
  },
  image: {
    screens: {
      avatarSm: 24,
      avatarLg: 48,
      logo: 32,
      migration: 536,
      blogImage: 864,
    },
    domains: [
      'pbs.twimg.com',
      'source.unsplash.com',
      'images.unsplash.com',
      'github.com',
      'unsplash.com',
      'user-images.githubusercontent.com',
      'abs.twimg.com',
    ],
  },
  // uncomment when we'll using nuxtlabs / ui module
  /* ui: {
    colors: {
      black: '#080808',
    },
    unocss: {
      theme: {
        fontFamily: {
          sans: '"DM Sans", sans-serif',
          serif: 'DM Serif Display',
          mono: 'DM Mono',
          inter: 'Inter, sans-serif'
        },
        transitionProperty: {
          height: 'height',
          width: 'width',
        },
        spacing: {
          'double-screen': '200vw',
          'fill-available': '-webkit-fill-available',
        },
      },
      shortcuts: {
        'text-display-6': ['1.875rem', '2.25rem'],
        'text-display-5': ['2.25rem', '2.5rem'],
        'text-display-4': ['3rem', '3rem'],
        'text-display-3': ['3.75rem', '3.75rem'],
        'text-display-2': ['4.5rem', '4.5rem'],
        'text-display-1': ['6rem', '6rem'],
        'text-body-xs': ['0.75rem', '1rem'],
        'text-body-sm': ['0.875rem', '1.25rem'],
        'text-body-base': ['1rem', '1.5rem'],
        'text-body-lg': ['1.125rem', '1.75rem'],
        'text-body-xl': ['1.25rem', '1.75rem'],
        'text-body-2xl': ['1.5rem', '2rem']
      }
    }
  }, */
  publicRuntimeConfig: {
    plausible: {
      domain: process.env.PLAUSIBLE_DOMAIN,
    },
  },
})
