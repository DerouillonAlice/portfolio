<template>
  <aside class="sidebar flex flex-col">
    <div class="flex flex-row lg:flex-col h-4/5 lg:h-fit">
      <img src="/src/assets/phto_cv.jpg" alt="Alice Derouillon"
        class="profile object-cover aspect-square lg:aspect-auto mx-auto mb-0 lg:mb-5" />
      <div class="info lg:w-full px-5 sm:px-20 lg:px-0 my-auto lg:my-3">
        <h2 class="text-2xl font-bold">Alice Derouillon</h2>
        <h3>Développeuse Web</h3>
        <hr class="border-gray-300 my-4 w-2/3 mx-auto" />
      </div>
    </div>
    <button @click="toggleContactInfo" class="lg:hidden text-primary rotate-180">
      <i class="fas fa-chevron-up"></i>
      {{ isContactInfoVisible ? '&#x25B2;' : '&#x25BC;' }}
    </button>
    <div :class="{ 'hidden': !isContactInfoVisible, 'block': isContactInfoVisible }"
      class="contact-info-container lg:block">
      <ul class="contact-info flex flex-col gap-5">
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
            <p>contact@alice.sh</p>
          </div>
        </li>
        <li class="flex flex-row justify-start gap-5">
          <div>
            <i class="fas fa-phone text-primary bg-background2 p-3 rounded-full h-10 w-10"></i>
          </div>
          <div class="text-left">
            <p class="text-secondary text-sm">TEL.</p>
            <p>07 80 98 13 37</p>
          </div>
        </li>
      </ul>

      <div>

        <a class="bg-background2 px-8  py-2 rounded-xl">Contactez-moi ></a>
      </div>

      <div>
        <div class="flex flex-row gap-5">
          <a href="https://www.linkedin.com/in/alice-derouillon/" target="_blank">
            <i class="fab fa-linkedin-in text-primary h-50 w-50"></i>
          </a>
          <a href="https://github.com/AliceDerouillon" target="_blank">
            <i class="fab fa-github text-primary h-50 w-50"></i>
          </a>
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
    height: auto; /* Adjust height to auto to accommodate content */
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
    display: block; /* Ensure block class displays the content */
  }
}

.profile {
  width: 150px;
}
</style>
