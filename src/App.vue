<template>
  <div :class="[
    activeColor, 'smooth-background-transition', 'overflow-x-hidden lg:overflow-hidden', 'min-h-screen lg:h-screen']">
    <div class="flex justify-center lg:h-full p-2 sm:p-5">
      <div class="w-full max-w-[1856px] grid lg:grid-cols-[320px_1fr] gap-2 sm:gap-5 lg:h-full">
        
        <div class="hidden lg:block">
          <Sidebar class="sticky top-0 w-80 h-full bg-background text-white rounded-2xl overflow-y-auto scrollbar-hide" />
        </div>
        
        <div class="lg:hidden">
          <Sidebar class="bg-background text-white rounded-2xl" />
        </div>
        
        <!-- Contenu principal -->
        <div class="lg:overflow-y-auto lg:scrollbar-hide lg:h-full overflow-x-hidden">
          <div class="w-full max-w-[1536px] mx-auto h-full">
            <div class="content rounded-2xl bg-background flex flex-col h-full overflow-hidden">
              <div class="flex-shrink-0 p-5 sm:p-6 xs:p-12 pb-0">
                <Navbar />
              </div>
              
              <div class="flex-1 px-3 sm:px-6 xs:px-12 pb-3 sm:pb-6 xs:pb-12 overflow-x-hidden h-full">
                <transition name="page" mode="out-in">
                  <router-view :key="$route.fullPath" class="h-full" />
                </transition>
              </div>
              
              <div class="flex-shrink-0 pb-3 px-3 sm:px-6 xs:px-10 pt-0">
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
        Competences: "dynamic-gradient-5",
        cv: "dynamic-gradient-3",
        CV: "dynamic-gradient-3",
        contact: "dynamic-gradient-4",
        ProjectDetail: "dynamic-gradient-2",
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

.smooth-background-transition {
  transition: all 1.8s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
}

.smooth-background-transition::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  transition: opacity 1.8s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: -1;
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
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  min-height: 100vh;
}

.dynamic-gradient-2 {
  background: linear-gradient(135deg, #ffb3de, #7ec8e3);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  min-height: 100vh;
}

.dynamic-gradient-3 {
  background: linear-gradient(135deg, #a77ffb, #ff78b9);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  min-height: 100vh;
}

.dynamic-gradient-4 {
  background: linear-gradient(135deg, #7ec8e3, #a77ffb);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  min-height: 100vh;
}

.dynamic-gradient-5 {
  background: linear-gradient(135deg, #ff9a9e, #fecfef, #fecfef, #a8edea);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  min-height: 100vh;
}

/* Transitions pour les pages */
.page-enter-active, .page-leave-active {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  height: 100%;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px);
  filter: blur(3px);
  height: 100%;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-30px);
  filter: blur(3px);
  height: 100%;
}

.page-enter-to, .page-leave-from {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  height: 100%;
}

</style>
