<template>
  <div :class="['w-screen','min-h-screen', 'grid', 'grid-cols-12', 'mx-auto', 'gap-0', activeColor, 'transition-background', 'overflow-x-hidden']">
    <Sidebar class="bg-background text-white custom-height" />
    <div class="content overflow-auto custom-height rounded-lg m-5 col-span-12 lg:col-span-9 bg-background p-6 xs:p-12 flex flex-col">
      <Navbar />
      <div class="flex-grow">
        <router-view />
      </div>
      <Footer /> 
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue"; // Import Footer component

export default {
  components: {
    Sidebar,
    Navbar,
    Footer, // Register Footer component
  },
  computed: {
    activeColor() {
      const routeName = this.$route.name;
      return {
        accueil: "dynamic-gradient-1",
        portfolio: "dynamic-gradient-2",
        cv: "dynamic-gradient-3",
        contact: "dynamic-gradient-4",
      }[routeName] || "dynamic-gradient-3"; // Valeur par défaut plus appropriée
    },
  },
};
</script>

<style scoped>
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.dynamic-gradient-1 {
  background: linear-gradient(135deg, #7ec8e3, #a77ffb, #ffb3de);
  background-size: 300% 300%;
  animation: gradientShift 5s ease infinite;
  min-height: 100vh;
}

.dynamic-gradient-2 {
  background: linear-gradient(135deg, #ffb3de, #7ec8e3);
  background-size: 300% 300%;
  animation: gradientShift 5s ease infinite;
  min-height: 100vh;
}

.dynamic-gradient-3 {
  background: linear-gradient(135deg, #a77ffb, #ff78b9);
  background-size: 300% 300%;
  animation: gradientShift 5s ease infinite;
  min-height: 100vh;
}

.dynamic-gradient-4 {
  background: linear-gradient(135deg, #7ec8e3, #a77ffb);
  background-size: 300% 300%;
  animation: gradientShift 5s ease infinite;
  min-height: 100vh;
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

.transition-background {
  transition: background-color 0.5s ease, background-image 0.5s ease;
}
</style>
