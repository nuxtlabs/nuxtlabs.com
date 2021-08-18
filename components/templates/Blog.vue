<template>
  <div class="p-4 xl:px-68 2xl:px-76">
    <BlogHero />
    <div>
      <BlogList />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  templateOptions: {
    aside: false,
    fluid: true
  }
})
</script>
