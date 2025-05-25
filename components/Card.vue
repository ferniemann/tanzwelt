<template>
  <div class="divide-y divide-gray-200 rounded-md md:rounded-2xl border border-gray-200 shadow-sm bg-white">
    <div class="p-6 sm:px-8">
      <h3 v-if="noTitle !== true" class="text-lg font-bold text-rose-900">
        {{ course.titel }}
      </h3>

      <p class="my-6 text-gray-700 text-sm">{{ course.der_kurs_in_einem_satz }}</p>

      <p class="mt-2 sm:mt-4 flex gap-2 items-end" v-if="price">
        <strong class="text-3xl font-bold text-gray-900 sm:text-4xl"> {{ course.preis }} €</strong>

        <span class="text-sm font-medium text-gray-700 italic">{{ course.einheit_des_preises }}</span>
      </p>

      <div v-if="noTitle === false">
        <NuxtLink class="btn-rose" :to="'/kurse/' + course.id">
          Kursdetails
        </NuxtLink>
        <NuxtLink class="btn-rose-outline" :to="'/kurse/' + course.id">
          Anmeldung
        </NuxtLink>
      </div>
      <NuxtLink v-else class="btn-rose" to="#anmeldung">
        Zur Anmeldung
      </NuxtLink>
    </div>

    <div class="p-6 sm:px-8" v-if="!short">
      <p class="text-lg font-medium text-gray-900 sm:text-xl">Kurz und knapp:</p>

      <ul class="mt-2 space-y-2 sm:mt-4">
        <li class="grid grid-cols-[2rem_1fr] items-center gap-1" v-for="fact in course.kurz_und_knapp" :key="fact">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-5 text-rose-700">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>

          <span class="text-gray-700"> {{ fact }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  course: {
    type: Object
  },
  noTitle: Boolean,
  price: Boolean,
  short: Boolean
})
</script>

<style scoped>
.btn-rose {
  @apply mt-4 block rounded border border-rose-900 bg-rose-900 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-rose-900 focus:outline-none focus:ring active:text-rose-500 sm:mt-6
}

.btn-rose-outline {
  @apply mt-4 block rounded border border-rose-900 bg-white px-12 py-3 text-center text-sm font-medium text-rose-900 hover:bg-rose-200/50 hover:text-rose-900 focus:outline-none focus:ring active:text-rose-500 sm:mt-6
}
</style>