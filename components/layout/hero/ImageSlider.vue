<template>
  <article class="relative rounded-md overflow-hidden">
    <img src="/assets/oh_1.jpg" alt="Vier Tanzpaare tanzen"
      class="w-full aspect-auto md:aspect-[25/9] blur-[5px] animate-blurSlow md:animate-blur object-cover object-[100%_25%]">
    <div
      class="bg-rose-400/10 py-4 px-8 md:px-24  text-white absolute inset-0 flex flex-col justify-center items-center gap-2 md:gap-8 text-center mx-auto md:rounded-sm">
      <img src="/assets/logo.jpg" alt="Logo Ludwigs Tanzwelt"
        class="relative w-24 md:w-62 mix-blend-multiply animate-fadeInSlow md:animate-moveInLeft">
      <p class="animate-fadeInSlow md:animate-fadeIn text-2xl md:text-4xl font-bold font-display">Deine Tanzschule in
        Lübeck</p>
      <CTAButton text="Kursangebot" to="/kurse"
        class="relative text-sm md:text-2xl w-fit mx-auto animate-moveInRight hidden md:block" />
    </div>
  </article>
  <CTAButton text="Kursangebot" to="/kurse" class="relative text-sm md:text-2xl w-full mt-8 inline-flex md:hidden" />
</template>