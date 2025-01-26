<template>
  <footer class="bg-background text-white py-2 text-center bottom-0 mt-5">
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
