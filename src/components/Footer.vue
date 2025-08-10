<template>
  <footer class="bg-background text-white text-center bottom-0 pt-2 mt-2">
    <p class="block sm:inline">&copy; {{ currentYear }} Alice Derouillon.<span class="block sm:inline"> Tous droits réservés.</span></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
footer {
  border-top: 1px solid #444;
}
</style>
