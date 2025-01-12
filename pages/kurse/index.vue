<template>
  <main class="md:mx-auto md:max-w-screen-xl">
    <p class="text-xl mb-12">Hier siehst du eine Übersicht über die derzeit in Ludwigs Tanzwelt angebotenen
      Tanzkurse.
      Die Kurse auf
      dieser Seite sind unterteilt in Kurse für <a href="#erwachsene" class="text-rose-800 font-bold">Erwachsene</a> und
      <a href="#kinder" class="text-rose-800 font-bold">Kinder</a>.
    </p>
    <div class="sm:px-6 sm:py-12 lg:px-8 lg:py-16" id="erwachsene" v-for="label in Object.keys(courses)" :key="label">
      <h2 class="text-xl font-bold mb-8">Kurse für {{ label }}</h2>
      <div class="grid grid-cols-3 gap-4">
        <Card v-for="course in courses[label]" :key="course" :course="course" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { getCoursesSortedByLabel } from '~/data/courses';

const courses = getCoursesSortedByLabel();

console.log(courses);
</script>