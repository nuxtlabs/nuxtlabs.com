<template>
  <div>
    <img @click="home" :src="`${logoPath}`" alt="NuxtLabs logo" />
    <div class="hidden lg:block pt-1">
      Intuitive web development
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    logoPath: {
      type: String,
      default: false
    }
  },
  setup() {
    function home() {
      window.scrollTo(0, 0)
    }

    return {
      home
    }
  },
})
</script>

<!-- script>
export default {
  props: {

  },
  methods: {
    home() {
      if (this.$route.path === '/') {
        // scroll to top
        window.scrollTo(0, 0)
      }
    }
  }
}
</script -->
