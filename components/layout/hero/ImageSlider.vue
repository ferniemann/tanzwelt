<template>
  <article class="relative rounded-md overflow-hidden">
    <img src="/assets/oh_1.jpg" alt="Vier Tanzpaare tanzen"
      class="w-full aspect-[25/9] blur-[5px] animate-blur object-cover object-[100%_25%]">
    <div
      class="bg-rose-400/10 py-4 px-8 md:px-24  text-white absolute inset-0 flex flex-col justify-center items-center gap-2 md:gap-8 text-center mx-auto md:rounded-sm">
      <img src="/assets/logo.jpg" alt="Logo Ludwigs Tanzwelt"
        class="relative md:w-62 mix-blend-multiply animate-moveInLeft">
      <p class="animate-fadeIn text-4xl font-bold">Deine Tanzschule in Lübeck</p>
      <CTAButton text="Kursangebot" to="/kurse"
        class="relative text-sm md:text-2xl w-fit mx-auto animate-moveInRight" />
    </div>
  </article>
</template>