<template>
  <h2 class="font-bold text-rose-900 text-3xl lg:text-4xl mb-4 font-display">{{ title }}</h2>
  <div class="flex flex-wrap gap-2 my-4 bg-white p-4 rounded md:my-8">
    <span class="whitespace-nowrap rounded-full bg-sky-200/50 px-2.5 py-0.5 text-sm text-sky-700"
      v-for="dance in dances" :key="dance">
      {{ dance }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  dances: Array
})
</script>