<template>
  <h2 class="font-bold text-rose-900 text-3xl lg:text-4xl mb-4 font-display">{{ title }}</h2>
</template>

<script setup>
defineProps({
  title: String,
  dances: Array
})
</script>