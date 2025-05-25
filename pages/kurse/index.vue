<template>
  <div v-if="store.isLoading">Lade Kurse...</div>
  <div v-else-if="store.error">Fehler: {{ store.error.message }}</div>
  <div v-else>
    <div class="grid grid-cols-2 gap-8 max-w-screen-lg mx-auto">
      <Card v-for="course in store.courses" :key="course" :course="course" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCoursesStore } from '~/stores/courses'

const store = useCoursesStore()

onMounted(() => {
  store.getAllCourses()
  console.log(store.courses)
})
</script>
