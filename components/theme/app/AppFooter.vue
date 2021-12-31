<template>
  <footer class="relative mt-40">
    <img
      src="/img/footer/footer-illustration-mobile.svg"
      class="landscape-top-mobile select-none"
    />
    <img
      src="/img/footer/footer-illustration-tablet.svg"
      class="landscape-top-tablet select-none"
    />
    <img
      src="/img/footer/footer-illustration.svg"
      class="landscape-top-desktop select-none"
    />
    <div class="absolute w-full inset-x-0 bg-primary-900 h-full" />
    <div
      class="flex h-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex-col justify-center pt-12"
    >
      <div class="text-white font-sans z-20">
        <div
          class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 pb-16 gap-y-12"
        >
          <div
            v-for="item in footerLinks"
            :key="item.title"
            class="flex flex-col gap-5"
          >
            <span class="uppercase font-medium tracking-wider">{{
              item.title
            }}</span>
            <div v-for="(link, index) in item.items" :key="index">
              <a
                v-if="link.href"
                :href="link.href"
                class="font-light text-gray-50"
                >{{ link.title }}</a
              >
              <AppLink v-else :to="link.to" class="font-light text-gray-50">{{
                link.title
              }}</AppLink>
            </div>
          </div>
          <div
            class="col-span-2 sm:col-span-4 lg:col-span-2 flex flex-col gap-5"
          >
            <span class="uppercase font-medium tracking-wider"
              >Subscribe to our newsletter</span
            >
            <span class="font-light text-gray-50"
              >The latest news, articles, and resources, sent to your inbox
              weekly.</span
            >
            <form class="flex gap-x-3" @submit.prevent="subscribe">
              <AppInput
                v-model="email"
                placeholder="Email"
                class="bg-transparent"
              />
              <AppButton type="submit" variant="dark" submit>
                {{ pending ? 'Subscribing...' : 'Subscribe' }}
              </AppButton>
            </form>
          </div>
        </div>
        <div class="flex items-center justify-center py-8">
          <span class="font-medium"
            >&copy; 2021 NuxtLabs - All rights reserved.</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  useContext,
  ref,
  useFetch,
} from '@nuxtjs/composition-api'
import { useNewsletter } from '~/plugins/newsletter'
import { useNav } from '~/plugins/nav'
import { useNotifications } from '~/plugins/notifications'

export default defineComponent({
  setup() {
    const { email, newsletterResult, subscribe, pending } = useNewsletter()
    const { isHome } = useNav()
    const { $docus } = useContext()
    const { add } = useNotifications()
    const footerLinks = ref([])

    useFetch(async () => {
      const footer = await $docus
        .search('/collections/navigation/', { deep: true })
        .where({ slug: { $in: 'footer' } })
        .fetch()

      footerLinks.value = footer[0].links
    })

    watch(newsletterResult, (newVal) => {
      if (newVal !== '') showNotification(newVal)
    })

    function showNotification(result: any) {
      let notificationOptions = { text: '', type: '', timer: 0 }

      switch (result) {
        case 'failure':
          notificationOptions = {
            text: 'An error occurred',
            type: 'error',
            timer: 4000,
          }
          break
        case 'invalid-email':
          notificationOptions = {
            text: 'Invalid address',
            type: 'warning',
            timer: 4000,
          }
          break
        case 'sending-error':
          notificationOptions = {
            text: 'An error occurred while sending confirmation email',
            type: 'warning',
            timer: 4000,
          }
          break
        case 'member-exists':
          notificationOptions = {
            text: 'You are already registered',
            type: 'warning',
            timer: 4000,
          }
          break
        case 'subscribed':
          notificationOptions = {
            text: 'Email confirmed',
            type: 'success',
            timer: 4000,
          }
          break
        case 'confirm':
          notificationOptions = {
            text: 'An email to confirm your subscription has been sent',
            type: 'success',
            timer: 5000,
          }
          break
      }

      add({
        title: 'Newsletter',
        description: notificationOptions.text,
        type: notificationOptions.type,
        timeout: notificationOptions.timer,
      })

      newsletterResult.value = ''
    }

    return {
      email,
      isHome,
      subscribe,
      pending,
      footerLinks,
    }
  },
})
</script>
