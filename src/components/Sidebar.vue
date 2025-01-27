<template>
  <aside class="sidebar flex flex-col justify-center h-3/5 lg:h-screen">
    <div class="h-full flex flex-col justify-start">
      <div class="flex flex-row lg:flex-col mb-5">
        <img src="/src/assets/phto_cv.jpg" alt="Alice Derouillon"
          class="profile object-cover aspect-square w-1/3 h-auto lg:w-2/3 rounded-lg lg:aspect-auto mx-auto mb-0 lg:mb-5" />
        <div class="info lg:w-full px-5 sm:px-20 lg:px-0 my-auto lg:my-3">
          <h2 class="text-2xl font-bold">Alice Derouillon</h2>
          <h3>Développeuse Web</h3>
          <hr class="border-gray-300 my-4 w-2/3 mx-auto" />
        </div>
      </div>
      <button @click="toggleContactInfo" class="lg:hidden text-3xl text-primary cursor-pointer mb-3">
        <i class="fas fa-chevron-up" :class="{ 'rotate-180': isContactInfoVisible }"></i>
      </button>
      <div :class="{ 'hidden': !isContactInfoVisible, 'block': isContactInfoVisible }"
        class="contact-info-container lg:contents gap-8">
        <ul class="contact-info flex flex-col gap-5 mb-3">
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
              <p><a class="underline" href="mailto:contact@alicedr.com">contact@alicedr.com</a></p>
            </div>
          </li>
          <li class="flex flex-row justify-start gap-5">
            <div>
              <i class="fas fa-phone text-primary bg-background2 p-3 rounded-md h-10 w-10"></i>
            </div>
            <div class="text-left">
              <p class="text-secondary text-sm">TEL.</p>
              <p><a class="underline" href="tel:+33780981337">07 80 98 13 37</a></p>
            </div>
          </li>
        </ul>
        <div class="mb-5 mt-10 flex justify-center">
          <router-link to="/contact"
            class="button">
            Contactez-moi <span class="">&gt;</span>
          </router-link>
        </div>
        <div class="my-3">
          <div class="flex flex-row gap-5 justify-end">
            <a href="https://www.linkedin.com/in/alicederouillon/" target="_blank">
              <i
                class="fab fa-linkedin-in text-primary transition-all hover:text-primaryhover text-4xl h-10 w-10 cursor-pointer"></i>
            </a>
            <a href="https://github.com/DerouillonAlice" target="_blank">
              <i
                class="fab fa-github text-primary transition-all hover:text-primaryhover text-4xl h-30 w-30 cursor-pointer"></i>
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
  height: calc(100% - 2.5rem);
  color: #fff;
  padding: 20px;
  text-align: center;
  grid-column: span 3;
}

/* .fa-linkedin-in, .fa-github {
  font-size: 3rem;
} */

@media screen and (max-width: 1024px) {
  .sidebar {
    height: auto;
    margin: 20px 20px 0px 20px;
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
