<template>
  <div :class="[
    activeColor, 'transition-background', 'overflow-x-hidden lg:overflow-hidden', 'min-h-screen lg:h-screen']">
    <div class="flex justify-center lg:h-full p-5">
      <div class="w-full max-w-[1856px] grid lg:grid-cols-[320px_1fr] gap-5 lg:h-full">
        
        <div class="hidden lg:block">
          <Sidebar class="sticky top-0 w-80 h-full bg-background text-white rounded-2xl overflow-y-auto scrollbar-hide" />
        </div>
        
        <div class="lg:hidden">
          <Sidebar class="bg-background text-white rounded-2xl" />
        </div>
        
        <!-- Contenu principal -->
        <div class="lg:overflow-y-auto lg:scrollbar-hide lg:h-full">
          <div class="w-full max-w-[1536px] mx-auto h-full">
            <div class="content rounded-2xl bg-background flex flex-col min-h-full">
              <div class="flex-shrink-0 p-6 xs:p-12 pb-0">
                <Navbar />
              </div>
              
              <div class="flex-1 px-6 xs:px-12 pb-6 xs:pb-12">
                <router-view />
              </div>
              
              <div class="flex-shrink-0 p-6 xs:p-12 pt-0">
                <Footer />
              </div>
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
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE et Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide,
.scrollbar-hide * {
  -ms-overflow-style: none !important;  /* IE et Edge */
  scrollbar-width: none !important;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar,
.scrollbar-hide *::-webkit-scrollbar {
  display: none !important;  /* Chrome, Safari et Opera */
}

*::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background: transparent;
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
