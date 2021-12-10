<template>
  <div
    class="fixed bottom-0 right-0 flex flex-col justify-end w-full z-50 sm:w-96"
  >
    <div
      v-if="$notifications.state.value.length"
      class="px-4 py-6 space-y-3 overflow-y-auto sm:px-6 lg:px-8"
    >
      <div
        v-for="(notification, index) of $notifications.state.value"
        v-show="index === $notifications.state.value.length - 1"
        :key="notification.id"
      >
        <Notification
          v-bind="notification"
          :class="notification.click && 'cursor-pointer'"
          @click.native="notification.click && notification.click(notification)"
          @close="$notifications.remove(notification.id)"
        />
      </div>
    </div>
  </div>
</template>
