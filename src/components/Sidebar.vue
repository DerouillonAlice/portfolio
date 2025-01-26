<template>
  <aside class="sidebar flex flex-col justify-between h-3/5 lg:h-fit">
    <div class="">
      <div class="flex flex-row lg:flex-col mb-5">
        <img src="/src/assets/phto_cv.jpg" alt="Alice Derouillon"
          class="profile object-cover aspect-square w-1/3 h-auto lg:w-2/3 rounded-lg lg:aspect-auto mx-auto mb-0 lg:mb-5" />
        <div class="info lg:w-full px-5 sm:px-20 lg:px-0 my-auto lg:my-3">
          <h2 class="text-2xl font-bold">Alice Derouillon</h2>
          <h3>Développeuse Web</h3>
          <hr class="border-gray-300 my-4 w-2/3 mx-auto" />
        </div>
      </div>
      <button @click="toggleContactInfo" class="lg:hidden text-primary cursor-pointer mb-3">
        <i class="fas fa-chevron-up" :class="{ 'rotate-180': isContactInfoVisible  }"></i>
      </button>
      <div :class="{ 'hidden': !isContactInfoVisible, 'block': isContactInfoVisible }"
        class="contact-info-container lg:flex flex-col items-stretch gap-5">
        <ul class="contact-info flex flex-col gap-5 mb-3">
          <li class="flex flex-row justify-start gap-5">
            <div>
              <i class="fas fa-map-marker-alt text-primary bg-background2 p-3 rounded-full h-10 w-10"></i>
            </div>
            <div class="text-left">
              <p class="text-secondary text-sm">ADRESSE</p>
              <p>Troyes, 10000</p>
            </div>
          </li>
          <li class="flex flex-row justify-start gap-5">
            <div>
              <i class="fas fa-envelope text-primary bg-background2 p-3 rounded-full h-10 w-10"></i>
            </div>
            <div class="text-left">
              <p class="text-secondary text-sm">EMAIL</p>
              <p><a href="mailto:contact@alicedr.com">contact@alicedr.com</a></p>
            </div>
          </li>
          <li class="flex flex-row justify-start gap-5">
            <div>
              <i class="fas fa-phone text-primary bg-background2 p-3 rounded-full h-10 w-10"></i>
            </div>
            <div class="text-left">
              <p class="text-secondary text-sm">TEL.</p>
              <p><a href="tel:+33780981337">07 80 98 13 37</a></p>
            </div>
          </li>
        </ul>
        <div class="mt-5">
          <router-link to="/contact" class="bg-background2 px-8 py-2 rounded-full transition-all hover:bg-primary hover:text-black hover:scale-105">Contactez-moi <span class="text-primary">></span></router-link>
        </div>
    
        <div class="mt-5">
          <div class="flex flex-row gap-5 justify-end">
            <a href="https://www.linkedin.com/in/alice-derouillon/" target="_blank">
              <i class="fab fa-linkedin-in text-primary h-10 w-10"></i>
            </a>
            <a href="https://github.com/AliceDerouillon" target="_blank">
              <i class="fab fa-github text-primary font-s h-30 w-30"></i>
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

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.sidebar {
  margin: 20px 0px 20px 20px;
  border-radius: 20px;
  height:calc(100vh - 2.5rem);
  color: #fff;
  padding: 20px;
  text-align: center;
  grid-column: span 3;
}

@media screen and (max-width: 1024px) {
  .sidebar {
    height: auto;
    margin: 20px 20px 20px 20px;
    grid-column: span 12;
    padding: 20px 20px 0px 20px;
  }

  .info {
    width: 100%;
  }

  .contact-info-container {
    display: none;
  }

  .contact-info-container.block {
    display: block; 
  }

  .profile {
    width: 1/3 !important; 
  }
}
</style>
