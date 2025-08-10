<template>
  <div class="text-white">
    <div class="mb-8">
      <div class="relative mb-10 lg:pl-8">
        <h1 class="h1">Compétences</h1>
        <div class="absolute -bottom-4 lg:left-10 h-2 w-36 bg-primary rounded-full"></div>
      </div>
      <div class="space-y-8">
        <!-- Slider DÉVELOPPEMENT WEB -->
        <section class="max-w-3xl mx-auto px-4">
          <h3 class="text-md text-secondary mb-3 text-center">DÉVELOPPEMENT WEB</h3>
          <div class="relative flex justify-center">
            <Splide :options="{
              type: 'loop',
              perPage: 4,
              gap: '1rem',
              focus: 0,
              trimSpace: false,
              breakpoints: {
                1024: { perPage: 3, gap: '0.75rem' },
                768: { perPage: 2, gap: '0.5rem' },
                640: { perPage: 1, gap: '0.25rem' }
              },
              arrows: true,
              pagination: false
            }" class="max-w-full">
              <SplideSlide v-for="(icon, index) in devIcons" :key="index">
                <div class="flex-shrink-0 bg-background2 p-4 rounded-lg flex flex-col justify-center items-center w-28 h-28 mx-auto">
                  <i :class="[icon.name, 'text-4xl', 'text-primary']"></i>
                  <p class="mt-2 text-white font-medium text-xs text-center">{{ icon.label }}</p>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </section>

        <!-- Slider DESIGN & GRAPHISME -->
        <section class="max-w-3xl mx-auto px-4">
          <h3 class="text-md text-secondary mb-3 text-center">DESIGN & GRAPHISME</h3>
          <div class="relative flex justify-center">
            <Splide :options="{
              type: 'loop',
              perPage: 4,
              gap: '1rem',
              focus: 0,
              trimSpace: false,
              breakpoints: {
                1024: { perPage: 3, gap: '0.75rem' },
                768: { perPage: 2, gap: '0.5rem' },
                640: { perPage: 1, gap: '0.25rem' }
              },
              arrows: true,
              pagination: false
            }" class="max-w-full">
              <SplideSlide v-for="(icon, index) in designIcons" :key="index">
                <div class="flex-shrink-0 bg-background2 p-4 rounded-lg flex flex-col justify-center items-center w-28 h-28 mx-auto">
                  <i :class="[icon.name, 'text-4xl', 'text-primary']"></i>
                  <p class="mt-2 text-white font-medium text-xs text-center">{{ icon.label }}</p>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </section>

        <!-- Slider MARKETING & COMMUNICATION -->
        <section class="max-w-3xl mx-auto px-4">
          <h3 class="text-md text-secondary mb-3 text-center">MARKETING & COMMUNICATION</h3>
          <div class="relative flex justify-center">
            <Splide :options="{
              type: 'loop',
              perPage: 4,
              gap: '1rem',
              focus: 0,
              trimSpace: false,
              breakpoints: {
                1024: { perPage: 3, gap: '0.75rem' },
                768: { perPage: 2, gap: '0.5rem' },
                640: { perPage: 1, gap: '0.25rem' }
              },
              arrows: true,
              pagination: false
            }" class="max-w-full">
              <SplideSlide v-for="(icon, index) in marketingIcons" :key="index">
                <div class="flex-shrink-0 bg-background2 p-4 rounded-lg flex flex-col justify-center items-center w-28 h-28 mx-auto">
                  <i :class="[icon.name, 'text-4xl', 'text-primary']"></i>
                  <p class="mt-2 text-white font-medium text-xs text-center">{{ icon.label }}</p>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </section>

        <!-- Slider OUTILS & AUTOMATISATION -->
        <section class="max-w-3xl mx-auto px-4">
          <h3 class="text-md text-secondary mb-3 text-center">OUTILS & AUTOMATISATION</h3>
          <div class="relative flex justify-center">
            <Splide :options="{
              type: 'loop',
              perPage: 4,
              gap: '1rem',
              focus: 0,
              trimSpace: false,
              breakpoints: {
                1024: { perPage: 3, gap: '0.75rem' },
                768: { perPage: 2, gap: '0.5rem' },
                640: { perPage: 1, gap: '0.25rem' }
              },
              arrows: true,
              pagination: false
            }" class="max-w-full">
              <SplideSlide v-for="(icon, index) in toolsIcons" :key="index">
                <div class="flex-shrink-0 bg-background2 p-4 rounded-lg flex flex-col justify-center items-center w-28 h-28 mx-auto">
                  <i :class="[icon.name, 'text-4xl', 'text-primary']"></i>
                  <p class="mt-2 text-white font-medium text-xs text-center">{{ icon.label }}</p>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
    components: {
        Splide,
        SplideSlide,
    },
    data() {
        return {
            devIcons: [
                { name: 'devicon-vuejs-plain', label: "VueJS" },
                { name: 'devicon-tailwindcss-plain', label: "Tailwind CSS" },
                { name: 'devicon-wordpress-plain', label: "WordPress" },
                { name: 'devicon-php-plain', label: "PHP" },
                { name: 'devicon-javascript-plain', label: "JavaScript" },
                { name: 'devicon-symfony-original', label: "Symfony" },
                { name: 'devicon-mysql-plain', label: "MySQL" },
            ],
            designIcons: [
                { name: 'devicon-figma-plain', label: "Figma" },
                { name: 'devicon-photoshop-plain', label: "Photoshop" },
                { name: 'devicon-illustrator-plain', label: "Illustrator" },
                { name: 'devicon-canva-original', label: "Canva" },
            ],
            marketingIcons: [
                { name: 'fas fa-envelope', label: "Emailing" },
                { name: 'fas fa-chart-line', label: "Google Analytics" },
                { name: 'fas fa-bullhorn', label: "SEO" },
                { name: 'fas fa-share-alt', label: "Réseaux sociaux" },
            ],
            toolsIcons: [
                { name: 'devicon-docker-plain', label: "Docker" },
                { name: 'devicon-git-plain', label: "Git" },
                { name: 'fas fa-robot', label: "n8n" },
                { name: 'fab fa-google', label: "Google Apps" },
            ],
        };
    }
};
</script>

<style>
@import '@splidejs/splide/dist/css/splide.min.css';

.splide__arrow--prev {
    left: -1.5rem;
}

.splide__arrow--next {
    right: -1.5rem;
}
</style>