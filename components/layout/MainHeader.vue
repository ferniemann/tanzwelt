<template>
  <header class="md:p-4 bg-white sticky top-0 md:static z-50">
    <nav class="navbar md:rounded-box bg-white">
      <div class="navbar-start">
        <NuxtLink class="link text-base-content link-neutral text-xl font-semibold no-underline" to="/">
          <h1>
            <img src="/assets/logo.jpg" alt="Logo Ludwigs Tanzwelt" class="w-24 md:w-48">
            <span class="sr-only">Ludwigs Tanzwelt</span>
          </h1>
        </NuxtLink>
      </div>
      <LayoutNavigationMainNavDesktop />
      <div class="navbar-end items-center gap-4">
        <LayoutNavigationMainNav />
        <CTAButton to="/" text="Anmeldung" class="hidden md:flex" />
      </div>
    </nav>
  </header>
</template>