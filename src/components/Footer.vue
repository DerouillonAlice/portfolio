<template>
  <footer class="bg-background text-white text-center bottom-0 pt-2 mt-2">
    <p>&copy; {{ currentYear }} Alice Derouillon. Tous droits réservés.</p>
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
