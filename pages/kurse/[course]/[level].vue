<template>
  <template v-if="isMissing === false">
    <h2 class="font-bold text-2xl lg:text-4xl mb-4">{{ currentCourse.title }}</h2>
    <div class="flex flex-wrap gap-2 my-4 bg-gray-100/50 p-4 rounded md:my-8">
      <span class="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-700"
        v-for="dance in currentCourse.description.dances" :key="dance">
        {{ dance }}
      </span>
    </div>
    <div class="grid md:grid-cols-[2fr_1fr] gap-24">
      <img :src="currentCourse.img" :alt="currentCourse.title" class="rounded-2xl border border-gray-200 shadow-sm">
      <Card :course="currentCourse" :no-title="true" :price="true" />
    </div>
    <article class="text-xl md:text-2xl my-12 leading-9">
      <h3 class="font-bold text-xl md:text-3xl mb-2">Das erwartet dich:</h3>
      <p class="mb-4 leading-[1.8]" v-for="p in currentCourse.description.paragraphs" :key="p">{{ p }}</p>
    </article>
    <div class="grid gap-12 md:gap-48 grid-cols-1 md:grid-cols-[auto_1fr] items-start">

      <article class="text-xl md:text-2xl leading-9">
        <h3 class="font-bold text-xl md:text-3xl mb-2">Unterrichtszeiten:</h3>
        <table class="table-fixed border-collapse">
          <thead>
            <tr class="border border-spacing-4">
              <th scope="col" class="border px-6">Tag</th>
              <th scope="col" class="border px-6">Uhrzeit</th>
            </tr>
          </thead>
          <tbody class="border border-spacing-4">
            <tr class="border border-spacing-4" v-for="event in currentCourse.courseTimes" :key="event">
              <td class="border px-6">{{ event.day }}</td>
              <td class="border px-6">{{ event.time }}</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article>
        <h3 class="font-bold text-xl md:text-3xl mb-4" id="anmeldung">Für den Kurs anmelden:</h3>
        <Register :course="currentCourse.title" />
      </article>
    </div>
  </template>
</template>

<script setup>
import { courses } from "@/data/courses"

const { course, level } = useRoute().params
const currentCourse = courses.find((singleCourse) => singleCourse.path === `/kurse/${course}/${level}`)

const isMissing = computed(() => currentCourse === undefined)
</script>