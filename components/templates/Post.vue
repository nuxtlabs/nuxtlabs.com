<template>
  <div>
    <div class="relative py-16 sm:py-24">
      <div class="relative max-w-3xl mx-auto">
        <AppLink
          :to="
            page.to.lastIndexOf('/') !== 0
              ? page.to.substr(0, page.to.lastIndexOf('/'))
              : '/'
          "
          class="absolute top-0 left-0 px-4 -mt-12 sm:-mt-16"
        >
          <span
            class="text-sm font-medium leading-none sm:text-base text-primary-900 hover:text-primary-700"
          >
            ← Back
          </span>
        </AppLink>
        <div class="px-4 mb-6">
          <h1
            class="flex-1 text-3xl font-semibold tracking-tight sm:text-4xl text-primary-900 hover:text-primary-700"
          >
            {{ page.title }}
          </h1>
          <p class="my-4 text-base font-medium text-primary-400">
            {{ page.description }}
          </p>

          <div class="flex items-center sm:flex-row">
            <time
              v-if="page.date"
              :datetime="page.date"
              class="mr-2 text-sm font-medium text-primary-400"
            >
              {{ formatDateByLocale('en', page.date) }}
            </time>

            <div
              v-if="page.authors && page.authors.length"
              class="text-sm text-primary-400"
            >
              |
            </div>
            <div class="flex ml-4 sm:ml-2">
              <AppLink
                v-for="(author, index) in page.authors"
                :key="index"
                :href="author.link"
                rel="noopener noindex nofollow"
                class="flex items-center justify-end -ml-2 sm:ml-0 sm:mr-2 hover:text-primary-700"
              >
                <NuxtImg
                  class="inline-block w-8 h-8 border rounded-full text-primary-400 sm:mr-1"
                  height="32"
                  width="32"
                  loading="lazy"
                  :src="author.avatarUrl"
                  :alt="author.name"
                  :title="author.name"
                />
                <span class="hidden text-sm font-medium sm:inline-block">
                  {{ author.name }}
                </span>
              </AppLink>
            </div>
          </div>
        </div>
      </div>

      <div v-if="imgUrl" class="max-w-4xl mx-auto">
        <div
          class="mx-4 mb-8 bg-gray-100 aspect-w-16 aspect-h-9 dark:bg-gray-800"
        >
          <NuxtImg
            :src="imgUrl"
            :alt="page.title"
            loading="lazy"
            class="object-cover"
          />
        </div>
      </div>

      <div class="max-w-3xl mx-auto">
        <BlogpostToc
          :toc="page.body.toc.links"
          :title="page.body.toc.title"
          class="mb-8"
        />
        <DocusContent :document="page" class="px-4 docus-content" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  setup() {
    onMounted(() => {
      if (window.location.hash) {
        const hash = window.location.hash.replace('#', '')
        // do not remove setTimeout (wrong scroll pos)
        setTimeout(() => {
          scrollToHeading(hash, '--blogpost-scroll-margin-block')
        }, 300)
      }

      // do not remove setTimeout (headings missing)
      setTimeout(() => {
        const headings = [
          ...document.querySelectorAll('.docus-content h1'),
          ...document.querySelectorAll('.docus-content h2'),
          ...document.querySelectorAll('.docus-content h3'),
        ]
        headings.forEach((heading) => {
          heading.addEventListener('click', (e) => {
            e.preventDefault()
            const hash = e.target.href.split('#').pop()
            scrollToHeading(hash, '--blogpost-scroll-margin-block')
          })
        })
      }, 300)
    })

    const formatDateByLocale = (locale, d) => {
      return new Date(d).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }

    function convertPropToPixels(prop) {
      const tempDiv = document.createElement('div')

      tempDiv.style.position = 'absolute'
      tempDiv.style.opacity = '0'
      tempDiv.style.height = getComputedStyle(
        document.documentElement,
      ).getPropertyValue(prop)

      document.body.appendChild(tempDiv)

      const pixels = parseInt(getComputedStyle(tempDiv).height)

      document.body.removeChild(tempDiv)

      return pixels
    }

    function scrollToHeading(id, scrollMarginCssVar) {
      history.replaceState({}, '', '#' + id)

      setTimeout(() => {
        const escapedId = id.replace(/\./g, '\\.')
        const offset =
          document.querySelector(`#${escapedId}`).offsetTop -
          convertPropToPixels(scrollMarginCssVar)
        window.scrollTo(0, offset)
      })
    }

    return {
      formatDateByLocale,
    }
  },
  computed: {
    imgUrl() {
      /* In some cases we don't want the cover image to be displayed in the Post template */
      if (!this.page.headingImg?.hidden) {
        return this.page.imgUrl || 'https://source.unsplash.com/random'
      }
      return false
    },
  },
})
</script>
