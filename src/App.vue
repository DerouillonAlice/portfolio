<template>
  <div :class="['w-screen', 'grid', 'grid-cols-12', 'mx-auto', 'gap-0', activeColor]">
    <Sidebar class="bg-background text-white" />
    <div class="content overflow-auto rounded-lg m-5 col-span-12  lg:col-span-9 bg-background">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Sidebar,
    Navbar,
  },
  computed: {
    activeColor() {
      const routeName = this.$route.name;
      return {
        accueil: "bg-[url('/public/img/fond.svg')] bg-cover bg-center",
        portfolio: "bg-[url('/public/img/fond.svg')] bg-cover bg-center",
        cv: "bg-green-500",
        contact: "bg-red-500",
      }[routeName] || "bg-blue-500"; // Valeur par défaut si aucune route ne correspond
    },
  },
};
</script>

<style scoped>
.bg-blue-500 {
  background-color: #2d89ef;
}

.bg-purple-500 {
  background-color: #800080;
}

.bg-green-500 {
  background-color: #00a300;
}

.bg-red-500 {
  background-color: #e51400;
}

.bg-gray-800 {
  background-color: #333;
}

.rounded-lg {
  border-radius: 20px;
}

.m-5 {
  margin: 20px;
}

.w-full {
  width: 100vw;
}

.col-span-9 {
  grid-column: span 9;
}

.bg-background {
  background-color: #1e1d1d;
}
</style>
