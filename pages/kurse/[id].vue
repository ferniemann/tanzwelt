<template>
  <template v-if="isMissing === false">
    <LayoutCourseHeader :title="store.singleCourse.titel" />
    <div class="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-24">
      <NuxtImg :src="imageUrl" :alt="store.singleCourse?.titel" class="rounded-2xl border border-gray-200 shadow-sm" />
      <Card :course="store.singleCourse" :no-title="true" :price="true" />
    </div>
    <article class="md:text-2xl my-12 leading-9">
      <h3 class="text-2xl md:text-3xl mb-2">Das erwartet dich:</h3>
      <p class="mb-4 leading-[1.8] text-sm">{{ store.singleCourse.lange_beschreibung_des_kurses }}</p>
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
            <tr class="border border-white border-spacing-4" v-for="event in store.singleCourse.kurstermine"
              :key="event">
              <td class="border border-rose-900 px-6">{{ event.wochentag }}</td>
              <td class="border border-rose-900 px-6">{{ event.start_uhrzeit }} bis {{ event.end_uhrzeit }}</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article id="anmeldung" class="pt-12">
        <h3 class="font-bold text-xl md:text-3xl mb-4">Für den Kurs anmelden:</h3>
        <Register :course="store.singleCourse.titel" :single="false" />
      </article>
    </div>
  </template>
</template>

<script setup>
const store = useCoursesStore()

const isMissing = computed(() => store.singleCourse === undefined)
const imageUrl = computed(() => `https://admin.ludwigs-tanzwelt.de/assets/${store.singleCourse?.bild ? store.singleCourse.bild : 'f874fa7e-23f8-45f2-8623-6b5161489be4'}`)

onMounted(() => {
  const id = useRoute().params.id
  store.getCourseById(id)
})
</script>

<style scoped>
h3 {
  @apply font-display text-rose-900 text-2xl
}
</style>