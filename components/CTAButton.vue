<template>
  <NuxtLink class="btn btn-primary" :to="to"
    :class="white ? 'bg-white border-white text-rose-900 hover:bg-rose-900 hover:text-white hover:border-rose-900' : 'bg-rose-900 border-rose-900 text-white hover:bg-white hover:text-rose-900 hover:border-rose-900'">
    {{ text }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: String,
  text: String,
  white: Boolean
})
</script>