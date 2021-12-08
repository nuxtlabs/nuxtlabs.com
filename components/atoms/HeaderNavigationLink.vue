<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <Component
    v-bind="linkProps"
    :key="link.slug"
    :aria-label="link.title"
    class="flex font-medium group whitespace-nowrap"
    :class="{
      [activeClass]: forceActive || currentSlug === link.slug,
      [inactiveClass]: !forceActive && currentSlug !== link.slug,
    }"
  >
    <slot />
  </Component>
</template>

<script>
import { defineComponent, computed, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    link: {
      type: Object,
      required: true,
    },
    forceActive: {
      type: Boolean,
      default: false,
    },
    activeClass: {
      type: String,
      default: 'text-primary',
    },
    inactiveClass: {
      type: String,
      default: 'hover:d-primary-text-hover',
    },
  },
  setup(props) {
    const route = useRoute()
    const linkProps = computed(() => {
      const { to, href } = props.link
      if (to?.length) {
        return {
          is: 'Link',
          to,
        }
      } else if (href?.length) {
        return {
          is: 'Link',
          href,
        }
      } else {
        return {
          is: 'span',
        }
      }
    })

    const currentSlug = computed(() => {
      return route.value.path !== '/' && route?.value?.params?.pathMatch
        ? route.value.params.pathMatch.split('/')[0]
        : null
    })

    return {
      currentSlug,
      linkProps,
    }
  },
})
</script>

<style scoped lang="postcss">
.menu li {
  display: block;
  position: relative;
}
</style>
