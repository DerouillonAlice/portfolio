<!-- <template>
  <div :class="['w-screen','min-h-screen', 'flex', 'justify-center', activeColor, 'transition-background', 'overflow-x-hidden']">
    <div class="grid grid-cols-12 gap-0 w-full max-w-[1536px]">
      <Sidebar class="bg-background text-white custom-height" />
      <div class="content  overflow-auto custom-height rounded-2xl m-5 col-span-12 lg:col-span-9 bg-background p-6 xs:p-12 flex flex-col">
        <Navbar />
        <div class="flex-grow">
          <router-view />
        </div>
        <Footer /> 
      </div>
    </div>
  </div>
</template> -->

<template>
  <div :class="['w-screen', 'h-screen', activeColor, 'transition-background', 'overflow-x-hidden', 'p-5']">
    <div class="grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-[320px_1fr] gap-5 h-full overflow-hidden">
      
      <div class="relative">
        <Sidebar class="lg:fixed lg:top-5 lg:left-5 lg:bottom-5 lg:w-80 bg-background text-white rounded-2xl scrollbar-hide" />
      </div>
      
      <div class="flex justify-center">
        <div class="w-full max-w-[1536px]">
          <div class="content rounded-2xl bg-background flex flex-col h-full">
            <!-- Navbar fixe -->
            <div class="flex-shrink-0 p-6 xs:p-12 pb-0">
              <Navbar />
            </div>
            
            <!-- Zone de contenu scrollable -->
            <div class="flex-1 overflow-y-auto  px-6 xs:px-12 pb-6 xs:pb-12">
              <router-view />
            </div>
            
            <!-- Footer fixe -->
            <div class="flex-shrink-0 p-6 xs:p-12 pt-0">
              <Footer />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue"; 

export default {
  components: {
    Sidebar,
    Navbar,
    Footer, 
  },
  computed: {
    activeColor() {
      const routeName = this.$route.name;
      return {
        accueil: "dynamic-gradient-1",
        portfolio: "dynamic-gradient-2",
        cv: "dynamic-gradient-3",
        contact: "dynamic-gradient-4",
      }[routeName] || "dynamic-gradient-3"; 
    },
  },
};
</script>

<style scoped>
/* Cache la scrollbar mais garde le scroll fonctionnel */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE et Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari et Opera */
}

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


.transition-background {
  transition: background-color 0.5s ease, background-image 0.5s ease;
}


</style>
