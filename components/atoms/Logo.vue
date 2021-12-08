<template>
  <svg width="75" height="75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M34.037 20.122c-1.653-2.83-5.786-2.83-7.44 0L8.583 50.966c-1.653 2.83.413 6.367 3.72 6.367h14.064c-1.413-1.229-1.936-3.356-.867-5.18l13.644-23.288-5.106-8.742Z"
      fill="#0A0A0B"
    />
    <path
      d="M45.452 26.888c1.368-2.315 4.788-2.315 6.157 0l14.91 25.235c1.367 2.316-.343 5.21-3.079 5.21H33.62c-2.736 0-4.446-2.894-3.078-5.21l14.91-25.235Z"
      fill="#0A0A0B"
    />
  </svg>
</template>

<script>
export default {
  methods: {
    home() {
      if (this.$docus.currentPath.value === '/') {
        // scroll to top
        window.scrollTo(0, 0)
      }
    },
  },
}
</script>
