<template>
  <main class="md:mx-auto md:max-w-screen-xl">
    <p class="md:text-xl mb-12">Hier siehst du eine Übersicht über die derzeit in Ludwigs Tanzwelt angebotenen
      Tanzkurse.
      Die Kurse auf
      dieser Seite sind unterteilt in Kurse für <a href="#erwachsene">Erwachsene</a>,
      <a href="#kinder">Kinder</a> und <a href="#alle">alle Altersklassen</a>.
    </p>
    <div class="sm:px-6 sm:py-12 lg:px-8 lg:py-16" :id="label.toLowerCase()" v-for="label in Object.keys(courses)"
      :key="label">
      <h2 class="text-3xl text-sky-900 font-display font-bold mb-8">Kurse für {{ label }}</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <Card v-for="course in courses[label]" :key="course" :course="course" :short="true" />
      </div>
      <hr class="md:hidden my-8" />
    </div>
  </main>
</template>

<script setup>
import { getCoursesSortedByLabel } from '~/data/courses';

const courses = getCoursesSortedByLabel();

console.log(courses);
</script>

<style scoped>
a {
  @apply text-rose-800 font-bold
}
</style>