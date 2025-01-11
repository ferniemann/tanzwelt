<template>
  <li>
    <template v-if="link.path.startsWith('http')">
      <a href="tel:+491627628632"
        class="text-gray-700 transition hover:opacity-75 flex gap-2 items-center underline-offset-4 underline decoration-slate-200">
        <span v-html="link.icon" v-if="link.icon" />
        <span>
          {{ link.title }}
        </span>
      </a>
    </template>
    <template v-else>
      <NuxtLink :to="link.path"
        class="text-gray-700 transition hover:opacity-75 underline-offset-4 underline decoration-slate-200">
        <span v-html="link.icon" v-if="link.icon" />
        <span>
          {{ link.title }}
        </span>
      </NuxtLink>
    </template>
  </li>
</template>

<script setup>
defineProps({
  link: Object
})
</script>