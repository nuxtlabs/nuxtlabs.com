<template>
  <div
    class="py-8 mt-12 xs:mt-14 sm:mt-16 md:mt-18 lg:mt-24 sm:py-16 max-w-6xl mx-auto px-4 sm:px-8 lg:px-20"
  >
    <main
      class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div class="flex-shrink-0 flex justify-center">
        <a href="/" class="inline-flex">
          <nuxt-img src="/img/logo.svg" class="h-full w-auto" alt="NuxtLabs" />
        </a>
      </div>
      <div class="py-16">
        <div class="text-center">
          <p
            class="text-sm font-semibold text-indigo-600 uppercase tracking-wide"
          >
            404 error
          </p>
          <h1
            class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
          >
            Page not found.
          </h1>
          <p class="mt-2 text-base text-gray-500">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-6">
            <LinkUnderline
              to="/"
              blank="false"
              class="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >Go back home<span aria-hidden="true">
                &rarr;</span
              ></LinkUnderline
            >
          </div>
        </div>
      </div>
    </main>
    <footer class="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex justify-center space-x-4">
        <a
          href="#"
          class="text-sm font-medium text-gray-500 hover:text-gray-600"
          >Contact Support</a
        >
        <span
          class="inline-block border-l border-gray-300"
          aria-hidden="true"
        ></span>
        <a
          href="#"
          class="text-sm font-medium text-gray-500 hover:text-gray-600"
          >Status</a
        >
        <span
          class="inline-block border-l border-gray-300"
          aria-hidden="true"
        ></span>
        <a
          href="#"
          class="text-sm font-medium text-gray-500 hover:text-gray-600"
          >Twitter</a
        >
      </nav>
    </footer>
  </div>
</template>
