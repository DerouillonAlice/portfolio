<template>
  <div class="text-white ">
    <div class="mb-8">
      <div class="relative mb-10 lg:pl-8">
        <h1 class="h1">A propos</h1>
        <div class="absolute -bottom-4 lg:left-10  h-2 w-36 bg-primary rounded-full"></div>
      </div>

      <p class="text-white leading-relaxed">
        Je m'appelle Alice Derouillon, j'ai 21 ans, et je suis actuellement en <span class="gras">BUT Métiers du
          Multimédia et de
          l'Internet</span> (MMI) à Troyes. Cette formation polyvalente m'offre l'opportunité de me spécialiser en <span
          class="gras">développement</span>
        tout en touchant à de nombreux autres domaines liés au numérique. En plus de coder, je maîtrise des notions
        d'<span class="gras">UI/UX design</span>, de <span class="gras">SEO</span>, de <span
          class="gras">graphisme</span>... ce qui me permet d'avoir une vision
        globale sur les projets et de m'adapter à différents besoins.
      </p>

      <p class="text-white leading-relaxed mt-4">
        Depuis septembre 2024, je suis en alternance en tant que développeuse au sein de l'<a
          href="https://www.zetruc.fr/" class="gras">agence de communication
          Zetruc</a>. Mon rôle principal consiste à concevoir des <span class="gras">sites vitrines personnalisés</span>
        pour des entreprises, administrables grâce à des back-offices développés
        sous WordPress/Themosis.
      </p>

      <p class="text-white leading-relaxed mt-4">
        J'aime fusionner créativité et technologie pour concevoir des <span class="gras">interfaces esthétiques,
          ergonomiques et
          fonctionnelles</span>. En tant que passionnée de UI/UX design, je cherche toujours à améliorer l'expérience
        utilisateur
        tout en restant fidèle aux attentes des clients.
      </p>
    </div>

    <div>
      <div class="relative mb-8">
        <h2 class=" text-xl lg:text-2xl font-bold text-white no-underline">Compétances</h2>
        <div class="absolute -bottom-3 left-0 right-0 h-2 w-20 bg-primary rounded-full"></div>
      </div>

      <!-- Slider DEVELOPPEMENT WEB -->
      <div class="mb-8 max-w-screen-md mx-auto">
        <h3 class="text-md text-secondary mb-3">DÉVELOPPEMENT WEB</h3>
        <div class="relative flex justify-center">
          <Splide
            :options="{ type: 'loop', perPage: 4, gap: '1rem', breakpoints: { 1024: { perPage: 3 }, 768: { perPage: 2 }, 640: { perPage: 1 } }, arrows: true, pagination: false }"
            class="max-w-full splide-custom-arrows">
            <SplideSlide v-for="(icon, index) in devIcons" :key="index">
              <div class="flex-shrink-0 bg-background2 p-6 rounded-lg flex flex-col justify-center items-center w-32 h-32">
                <i :class="[icon.name, 'text-6xl', 'text-primary']"></i>
                <p class="mt-4 text-white font-medium text-sm text-center">{{ icon.label }}</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <!-- Slider AUTRE -->
      <div class="max-w-screen-md mx-auto">
        <h3 class="text-md text-secondary mb-3">AUTRE</h3>
        <div class="relative flex justify-center">
          <Splide
            :options="{ type: 'loop', perPage: 4, gap: '1rem', breakpoints: { 1024: { perPage: 3 }, 768: { perPage: 2 }, 640: { perPage: 1 } }, arrows: true, pagination: false }"
            class="max-w-full splide-custom-arrows">
            <SplideSlide v-for="(icon, index) in otherIcons" :key="index">
              <div class="flex-shrink-0 bg-background2 p-6 rounded-lg flex flex-col justify-center items-center w-32 h-32">
                <i :class="[icon.name, 'text-6xl', 'text-primary']"></i>
                <p class="mt-4 text-gray-200 font-medium text-sm text-center">{{ icon.label }}</p>
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
  left: -1.5rem; /* Adjust this value as needed */
}


</style>
