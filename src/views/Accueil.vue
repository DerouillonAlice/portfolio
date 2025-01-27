<template>
  <div class="text-white ">
    <div class="mb-8">
  <div class="relative mb-10 lg:pl-8">
    <h1 class="h1">A propos</h1>
    <div class="absolute -bottom-4 lg:left-10 h-2 w-36 bg-primary rounded-full"></div>
  </div>

  <p class="text-white leading-relaxed">
    Je m'appelle Alice Derouillon, 21 ans, actuellement en <span class="gras">BUT Métiers du Multimédia et de l'Internet</span> (MMI) à Troyes. Passionnée par le <span class="gras">développement</span>, je combine mes compétences techniques avec des notions d'<span class="gras">UI/UX design</span>, de <span class="gras">SEO</span> et de <span class="gras">graphisme</span>, ce qui me permet d'avoir une vision globale sur les projets.
  </p>

  <p class="text-white leading-relaxed mt-4">
    Depuis septembre 2024, je suis développeuse en alternance à l'<a href="https://www.zetruc.fr/" class="gras">agence Zetruc</a>, où je conçois des <span class="gras">sites vitrines personnalisés</span> sous WordPress/Themosis. Mon objectif : allier <span class="gras">esthétique, ergonomie et fonctionnalité</span> pour offrir des expériences utilisateur optimales, adaptées aux besoins des clients.
  </p>
</div>


    <div>
      <div class="relative mb-8">
        <h2 class=" text-xl lg:text-2xl font-bold text-white no-underline">Compétances</h2>
        <div class="absolute -bottom-3 left-0 right-0 h-2 w-20 bg-primary rounded-full"></div>
      </div>
      <div class="mb-8 max-w-screen-md mx-auto px-4">
        <h3 class="text-md text-secondary mb-3 text-center">DÉVELOPPEMENT WEB</h3>
        <div class="relative flex justify-center">
          <Splide :options="{
            type: 'loop',
            perPage: 4,
            gap: '1.5rem',
            focus: 'center', // Centre toujours l'élément actif
            breakpoints: {
              1024: { perPage: 3, gap: '1rem' },
              768: { perPage: 2, gap: '0.75rem' },
              640: { perPage: 1, gap: '0.5rem' }
            },
            arrows: true,
            pagination: false
          }" class="max-w-full splide-custom-arrows">
            <SplideSlide v-for="(icon, index) in devIcons" :key="index">
              <div
                class="flex-shrink-0 bg-background2 p-6 rounded-lg flex flex-col justify-center items-center w-36 h-36 mx-auto">
                <i :class="[icon.name, 'text-6xl', 'text-primary']"></i>
                <p class="mt-4 text-white font-medium text-sm text-center">{{ icon.label }}</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <!-- Slider AUTRE -->
      <div class="mb-8 max-w-screen-md mx-auto px-4">
        <h3 class="text-md text-secondary mb-3 text-center">AUTRE</h3>
        <div class="relative flex justify-center">
          <Splide :options="{
            type: 'loop',
            perPage: 4,
            gap: '1rem',
            focus: 'center', // Centre toujours l'élément actif
            breakpoints: {
              1024: { perPage: 3, gap: '1rem' },
              768: { perPage: 2, gap: '0.75rem' },
              640: { perPage: 1, gap: '0.5rem' }
            },
            arrows: true,
            pagination: false
          }" class="max-w-full splide-custom-arrows">
            <SplideSlide v-for="(icon, index) in otherIcons" :key="index">
              <div
                class="flex-shrink-0 bg-background2 p-6 rounded-lg flex flex-col justify-center items-center w-36 h-36 mx-auto">
                <i :class="[icon.name, 'text-6xl', 'text-primary']"></i>
                <p class="mt-4 text-primary font-medium text-sm text-center">{{ icon.label }}</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
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
      ],
      otherIcons: [
        { name: 'devicon-figma-plain', label: "Figma" },
        { name: 'devicon-photoshop-plain', label: "Photoshop" },
        { name: 'devicon-illustrator-plain', label: "Illustrator" },
      ],


    };
  }
};
</script>

<style>
@import '@splidejs/splide/dist/css/splide.min.css';

.splide__arrow--prev {
  left: -2.5rem;
}
.splide__arrow--next {
  right: -2.5rem;
}


</style>
