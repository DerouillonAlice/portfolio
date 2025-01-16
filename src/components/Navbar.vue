<template>
  <nav class="flex justify-end gap-8 px-8 py-5 text-white">
    <router-link
      to="/"
      class="text-white font-bold no-underline hover:text-primary hover:scale-110 transition-all"
      exact-active-class="text-primary"
    >
      Accueil
    </router-link>
    <router-link
      to="/portfolio"
      class="text-white font-bold no-underline hover:text-primary hover:scale-110 transition-all"
      exact-active-class="text-primary"
    >
      Portfolio
    </router-link>
    <router-link
      to="/cv"
      class="text-white font-bold no-underline hover:text-primary hover:scale-110 transition-all"
      exact-active-class="text-primary"
    >
      CV
    </router-link>
    <router-link
      to="/contact"
      class="text-white font-bold no-underline hover:text-primary hover:scale-110 transition-all"
      exact-active-class="text-primary"
    >
      Contact
    </router-link>
  </nav>
</template>

<script>
export default {};
</script>
