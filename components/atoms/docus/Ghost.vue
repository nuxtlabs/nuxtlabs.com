<template>
  <svg
    viewBox="0 0 242 242"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="ghost"
  >
    <path
      d="M0 121C0 54.1735 54.1735 0 121 0V0C187.826 0 242 54.1735 242 121V121C242 187.826 187.826 242 121 242H0V121Z"
      fill="black"
    />
    <ellipse
      cx="107.919"
      cy="121.002"
      rx="26.1622"
      ry="26.1622"
      transform="rotate(-90 107.919 121.002)"
      fill="white"
      class="eye"
    />
    <ellipse
      cx="186.405"
      cy="121.002"
      rx="26.1622"
      ry="26.1622"
      transform="rotate(-90 186.405 121.002)"
      fill="white"
      class="eye"
    />
  </svg>
</template>

<style lang="postcss" scoped>
.eye {
  background: primary-900;
  -webkit-transform-origin: 50%;
  animation: blink 3s infinite 0.25s;
}

@keyframes blink {
  0%,
  100% {
    transform: scale(1, 0.05);
  }
  5%,
  95% {
    transform: scale(1, 1);
  }
}
</style>
