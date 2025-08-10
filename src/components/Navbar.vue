<template>
  <nav class="flex justify-center sm:justify-end gap-4 sm:gap-8  px:0 sm:px-5 pb-6 px-0 sm:py-3 text-white">
    <router-link
      to="/"
      class="text-white font-bold no-underline hover:text-primary hover:scale-110 transition-all"
      exact-active-class="text-primary"
      v-slot="{ isActive }"
    >
      <span :class="{ 'text-primary': isActive }">Accueil</span>
    </router-link>
    <router-link
      to="/portfolio"
      class="text-white font-bold no-underline hover:text-primary hover:scale-110 transition-all"
      exact-active-class="text-primary"
      v-slot="{ isActive }"
    >
      <span :class="{ 'text-primary': isActive }">Projets</span>
    </router-link>
    <router-link
      to="/cv"
      class="text-white font-bold no-underline hover:text-primary hover:scale-110 transition-all"
      exact-active-class="text-primary"
      v-slot="{ isActive }"
    >
      <span :class="{ 'text-primary': isActive }">CV</span>
    </router-link>
    <router-link
      to="/contact"
      class="text-white font-bold no-underline hover:text-primary hover:scale-110 transition-all"
      exact-active-class="text-primary"
      v-slot="{ isActive }"
    >
      <span :class="{ 'text-primary': isActive }">Contact</span>
    </router-link>
  </nav>
</template>

<script>
export default {};
</script>
