<template>
  <template v-if="isMissing === false">
    <LayoutCourseHeader :title="currentCourse.title" :dances="currentCourse.description.dances" />
    <div class="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-24">
      <img :src="currentCourse.img[0]" :alt="currentCourse.title" class="rounded-2xl border border-gray-200 shadow-sm">
      <Card :course="currentCourse" :no-title="true" :price="true" />
    </div>
    <article class="md:text-2xl my-12 leading-9">
      <h3 class="text-2xl md:text-3xl mb-2">Das erwartet dich:</h3>
      <p class="mb-4 leading-[1.8] text-sm" v-for="p in currentCourse.description.paragraphs" :key="p">{{ p }}</p>
    </article>
    <div class="grid gap-12 md:gap-48 grid-cols-1 md:grid-cols-[auto_1fr] items-start">

      <article class="md:text-2xl leading-9 pt-12">
        <h3 class="font-bold md:text-3xl mb-2">Unterrichtszeiten:</h3>
        <table class="table-fixed border-collapse">
          <thead>
            <tr class="bg-rose-900 text-white text-sm">
              <th scope="col" class="px-6">Tag</th>
              <th scope="col" class="px-6">Uhrzeit</th>
            </tr>
          </thead>
          <tbody class="border border-white border-spacing-4">
            <tr class="border border-white border-spacing-4" v-for="event in currentCourse.courseTimes" :key="event">
              <td class="border border-rose-900 px-6">{{ event.day }}</td>
              <td class="border border-rose-900 px-6">{{ event.time }}</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article id="anmeldung" class="pt-12">
        <h3 class="font-bold text-xl md:text-3xl mb-4">Für den Kurs anmelden:</h3>
        <Register :course="currentCourse.title" :single="currentCourse.single" />
      </article>
    </div>
  </template>
</template>

<script setup>
import { courses } from "@/data/courses"

const { course, level } = useRoute().params
const currentCourse = courses.find((singleCourse) => singleCourse.path === `/kurse/${course}/${level}`)

console.log(currentCourse);

const isMissing = computed(() => currentCourse === undefined)
</script>

<style scoped>
h3 {
  @apply font-display text-rose-900 text-2xl
}
</style>