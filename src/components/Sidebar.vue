<template>
  <aside class="flex flex-col justify-center h-auto lg:h-full p-5 text-center overflow-y-auto w-full">
    <div class="h-full flex flex-col justify-start">
      <!-- Layout responsive : row sur mobile, col sur desktop -->
      <div class="flex flex-row lg:flex-col mb-5">
        <img src="/src/assets/phto_cv.jpg" alt="Alice Derouillon"
          class="object-cover aspect-square w-1/3 h-auto lg:w-2/3 rounded-lg lg:aspect-auto mx-auto mb-0 lg:mb-5" />
        <div class="w-full px-5 sm:px-20 lg:px-0 my-auto lg:my-3">
          <h2 class="text-2xl font-bold">Alice Derouillon</h2>
          <hr class="border-gray-300 my-4 w-2/3 mx-auto" />
        </div>
      </div>
      
      <!-- Toggle pour mobile -->
      <button @click="toggleContactInfo" class="lg:hidden text-3xl text-primary cursor-pointer mb-3">
        <i class="fas fa-chevron-up" :class="{ 'rotate-180': isContactInfoVisible }"></i>
      </button>
      
      <!-- Contenu collapsible sur mobile, toujours visible sur desktop -->
      <div :class="{ 'hidden': !isContactInfoVisible, 'block': isContactInfoVisible }"
        class="lg:block gap-8">
        <ul class="flex flex-col gap-5 mb-3">
          <li class="flex flex-row justify-start gap-5">
            <div>
              <i class="fas fa-map-marker-alt text-primary bg-background2 p-3 rounded-md h-10 w-10"></i>
            </div>
            <div class="text-left">
              <p class="text-secondary text-sm">ADRESSE</p>
              <p>Troyes, 10000</p>
            </div>
          </li>
          <li class="flex flex-row justify-start gap-5">
            <div>
              <i class="fas fa-envelope text-primary bg-background2 p-3 rounded-md h-10 w-10"></i>
            </div>
            <div class="text-left">
              <p class="text-secondary text-sm">EMAIL</p>
              <p><a class="font-bold hover:text-primary" href="mailto:contact@alicedr.com">contact@alicedr.com</a></p>
            </div>
          </li>
          <li class="flex flex-row justify-start gap-5">
            <div>
              <i class="fas fa-phone text-primary bg-background2 p-3 rounded-md h-10 w-10"></i>
            </div>
            <div class="text-left">
              <p class="text-secondary text-sm">TEL.</p>
              <p><a class="font-bold hover:text-primary" href="tel:+33780981337">07 80 98 13 37</a></p>
            </div>
          </li>
        </ul>
        <div class="mb-5 mt-10 flex justify-center">
          <router-link to="/contact" class="button">
            Contactez-moi <span class="">&gt;</span>
          </router-link>
        </div>
        <div class="my-3">
          <div class="flex flex-row gap-5 justify-end">
            <a href="https://www.linkedin.com/in/alicederouillon/" target="_blank">
              <i class="fab fa-linkedin-in text-primary transition-all hover:text-primaryhover text-4xl h-10 w-10 cursor-pointer"></i>
            </a>
            <a href="https://github.com/DerouillonAlice" target="_blank">
              <i class="fab fa-github text-primary transition-all hover:text-primaryhover text-4xl h-30 w-30 cursor-pointer"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      isContactInfoVisible: false
    };
  },
  methods: {
    toggleContactInfo() {
      this.isContactInfoVisible = !this.isContactInfoVisible;
    }
  }
};
</script>
