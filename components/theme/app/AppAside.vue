<template>
  <aside class="fixed z-50 lg:z-0 lg:static">
    <div class="h-full overflow-auto pointer-events-none lg:overflow-visible">
      <!-- scrim -->
      <Transition name="fade">
        <div
          v-if="$menu.visible.value"
          class="fixed top-0 left-0 z-0 w-full h-full pointer-events-auto filter blur-8 lg:hidden"
          @click.stop="$menu.toggle"
        />
      </Transition>
      <!-- Mobile aside -->
      <Transition name="slide-from-left-to-left">
        <div
          v-show="$menu.visible.value"
          class="lg:hidden fixed top-0 left-0 w-auto h-full overflow-auto pointer-events-auto min-h-fill-available border-r !w-base"
          :class="'d-border'"
        >
          <div class="w-auto h-full overflow-auto bg-gray-50">
            <div
              class="flex items-center justify-between w-full px-0.5 sm:px-2 h-header bg-gray-100"
            >
              <AppButton
                button-class="bg-transparent"
                icon-path="/img/navigation/close.svg"
                icon-class="ml-3 w-6 h-6"
                @click.native.stop="$menu.toggle"
              />
              <HeaderSocialLinks :social-links="socialLinks" class="mr-4" />
            </div>

            <AsideHeaderNavigation :header-links="headerLinks" />
          </div>
        </div>
      </Transition>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    headerLinks: {
      type: Array,
      default: () => [],
    },
    socialLinks: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
