<template>
  <div class="w-full flex pb-4 space-x-6 items-center justify-center">
    <AppLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      :class="{
        'link-active': $route.path === link.to || $route.path === `${link.to}/`,
      }"
    >
      {{ link.title }}
    </AppLink>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style lang="postcss" scoped>
.link-active {
  border-bottom: 2px solid black;
  margin-top: 2px;
}
</style>
