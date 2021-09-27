<template>
  <section
    class="h-full flex items-center justify-center overflow-hidden relative"
  >
    <nav class="w-full">
      <ul class="w-full">
        <li
          v-for="project in projects"
          :key="project.to"
          class="w-full transition-opacity"
          :class="[
            !activeProject
              ? 'opacity-100'
              : activeProject && project.title === activeProject
              ? 'opacity-100'
              : 'opacity-30',
          ]"
        >
          <HomeHeroLink :project="project" @active="setActiveProject($event)" />
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const activeProject = ref(null)

    function setActiveProject(project) {
      activeProject.value = project.title
    }
    return {
      setActiveProject,
      activeProject,
    }
  },
})
</script>
