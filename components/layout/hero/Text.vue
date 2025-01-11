<template>
  <div class="bg-rose-900 p-8 md:p-12 lg:px-16 lg:py-24 flex flex-col justify-center">
    <div class="mx-auto max-w-xl text-center ">
      <h2 class="text-2xl font-bold text-white md:text-3xl">
        {{ title }}
      </h2>

      <p class="hidden text-white/90 sm:mt-4 sm:block">
        {{ text }}
      </p>

      <div class="mt-4 md:mt-8" v-if="to">
        <NuxtLink :to="to"
          class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-rose-900 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">
          {{ linkText }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "text", "to", "linkText"])
</script>