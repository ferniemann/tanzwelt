<template>
  <section>
    <div class="mx-auto max-w-screen-2xl my-8 md:my-20">
      <div class="grid grid-cols-1 gap-1 md:gap-4 md:grid-cols-2 rounded-md md:rounded-xl overflow-hidden">
        <LayoutHeroText :title="title" :text="text" :to="to" :link-text="linkText" />

        <div class="grid grid-cols-2 gap-1 md:gap-4 md:grid-cols-1 lg:grid-cols-2">
          <img alt="" src="/assets/h_1.jpeg" class="h-40 w-full object-cover object-top sm:h-56 md:h-full" />

          <img alt="" src="/assets/oh_2.png" class="h-40 w-full object-cover object-top sm:h-56 md:h-full" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  to: String,
  linkText: String
})
</script>