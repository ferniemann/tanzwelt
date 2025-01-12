<template>
  <nav class="navbar-center max-md:hidden">
    <ul class="menu menu-horizontal gap-2 p-0 text-base ml-20">
      <li v-for="link in mainNav" :key="link" :class="getStylings(link)">
        <template v-if="link.isDropdown">
          <button type="button" class="max-md:px-2" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"
            @click="isOpen = !isOpen">
            {{ link.title }}
            <span class="icon-[tabler--chevron-down] size-4" :class="{ hidden: isOpen }"></span>
            <span class="icon-[tabler--x] size-4" :class="{ hidden: isOpen === false }"></span>

          </button>
          <ul class="w-96 absolute top-[120%] p-2 z-50 bg-white" :class="{ hidden: isOpen === false }"
            aria-orientation="vertical" aria-labelledby="nested-dropdown">
            <li v-for="page in link.links">

              <NuxtLink class="dropdown-item flex items-center gap-4" :to="page.path"><small
                  class="py-1 px-3 rounded-full" :class="getLabelColors(page)">{{
                    page.label }}</small> {{
                    page.title }}
              </NuxtLink>
            </li>
          </ul>
        </template>
        <NuxtLink v-else :to="link.path">{{ link.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { mainNav } from "@/data/nav"

const isOpen = ref(false);
const route = useRoute();

const getStylings = (link) => link.isDropdown ? "dropdown relative inline-flex [--auto-close:inside] [--offset:0] [--placement:bottom-end] max-md:[--placement:bottom]" : ""

const getLabelColors = (link) => link.label === "Erwachsene" ? "bg-violet-200 text-violet-700" : link.label === "Alle" ? "bg-teal-200 text-teal-700" : "bg-cyan-200 text-cyan-700"

watch(() => route.path, () => isOpen.value = false)
</script>