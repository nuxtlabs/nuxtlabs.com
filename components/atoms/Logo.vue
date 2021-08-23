<template>
  <div>
    <img @click="home" :src="`/img/Logo.png`" alt="NuxtLabs logo" />
    <div class="pt-1">
      Intuitive web development
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      if (this.$route.path === '/') {
        // scroll to top
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>
