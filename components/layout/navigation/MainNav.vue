<template>
  <nav class="inline-flex md:hidden rtl:[--placement:bottom-end]">
    <button class="dropdown-toggle btn btn-text btn-secondary btn-square" aria-haspopup="menu" aria-expanded="false"
      aria-label="Dropdown" @click="isOpen = !isOpen">
      <span class="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
      <span class="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
    </button>
    <menu class="w-full absolute inset-x-0 p-2 top-full bg-white" :class="{ hidden: isOpen === false }" role="menu"
      aria-orientation="vertical" aria-labelledby="dropdown-default">
      <li v-for="link in mainNav" :key="link" :class="getStylings(link)">
        <template v-if="link.isDropdown">
          <button id="dropdown-end-2"
            class="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
            aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
            Tanzkurse
            <span class="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
          </button>
          <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-fit-content mx-8" role="menu"
            aria-orientation="vertical" aria-labelledby="nested-dropdown">
            <li v-for="page in link.links">

              <NuxtLink class="dropdown-item" :to="page.path">
                {{ page.title }}
              </NuxtLink>
            </li>
          </ul>
        </template>
        <NuxtLink v-else :to="link.path" class="dropdown-item">{{ link.title }}</NuxtLink>
      </li>
      <hr class="pb-4">
      <CTAButton to="/kurse" text="Anmeldung" class="w-full" />
    </menu>
  </nav>
</template>

<script setup>
const isOpen = ref(false);
const route = useRoute();

const store = useCoursesStore()
await store.getAllCourses()

const mainNav = computed(() => [
  {
    title: 'Tanzkurse',
    isDropdown: true,
    links: store.courses.map((course) => ({
      title: course.titel,
      path: '/kurse/' + course.id,
    })),
  },
  {
    title: 'Über die Tanzschule',
    path: '/ueber',
  },
  {
    title: 'Kontakt',
    path: '/',
  },
])

const getStylings = (link) => link.isDropdown ? "dropdown relative [--auto-close:inside] [--offset:9] [--placement:bottom-end] max-md:[--placement:bottom]" : ""

const getLabelColors = (link) => link.label === "Erwachsene" ? "bg-violet-200 text-violet-700" : link.label === "Alle" ? "bg-teal-200 text-teal-700" : "bg-cyan-200 text-cyan-700"

watch(() => route.path, () => {
  isOpen.value = false
})
</script>