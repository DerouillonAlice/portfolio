<template>
  <div class="text-white ">
    <div class="mb-8">
  <div class="relative mb-10 lg:pl-8">
    <h1 class="h1">A propos</h1>
    <div class="absolute -bottom-4 lg:left-10 h-2 w-36 bg-primary rounded-full"></div>
  </div>

  <p class="text-white leading-relaxed">
  Je m'appelle Alice Derouillon, 22 ans, actuellement en <span class="gras">BUT Métiers du Multimédia et de l'Internet</span> (MMI) à Troyes. Passionnée par le <span class="gras">développement web</span>, je combine mes compétences techniques avec des notions solides d’<span class="gras">UI/UX design</span>, de <span class="gras">SEO</span>, de <span class="gras">communication digitale</span> et de <span class="gras">graphisme</span>, ce qui me permet d’avoir une approche polyvalente et centrée utilisateur.
</p>

<p class="text-white leading-relaxed mt-4">
  Depuis septembre 2024, je suis développeuse en alternance à l'<a href="https://www.zetruc.fr/" class="gras">agence Zetruc</a>, où je conçois des <span class="gras">sites WordPress sur mesure</span> (framework Themosis) et participe à des projets variés : <span class="gras">e-commerce</span> (PrestaShop), <span class="gras">emailing</span> (Mailchimp, Brevo), <span class="gras">automatisations</span> (n8n) et <span class="gras">création d’identités visuelles</span>. Mon objectif : concevoir des solutions web complètes, à la fois <span class="gras">esthétiques</span>, <span class="gras">fonctionnelles</span> et pensées pour l’<span class="gras">expérience utilisateur</span>.
</p>

</div>


    <div>
      <div class="relative mb-8">
        <h2 class=" text-xl lg:text-2xl font-bold text-white no-underline">Compétences</h2>
        <div class="absolute -bottom-3 left-0 right-0 h-2 w-20 bg-primary rounded-full"></div>
      </div>
      
      <!-- Slider DÉVELOPPEMENT WEB -->
      <div class="mb-8 max-w-screen-md mx-auto px-4">
        <h3 class="text-md text-secondary mb-3 text-center">DÉVELOPPEMENT WEB</h3>
        <div class="relative flex justify-center">
          <Splide :options="{
            type: 'loop',
            perPage: 4,
            gap: '1.5rem',
            focus: 0,
            trimSpace: false,
            breakpoints: {
              1024: { perPage: 3, gap: '1rem' },
              768: { perPage: 2, gap: '0.75rem' },
              640: { perPage: 1, gap: '0.5rem' }
            },
            arrows: true,
            pagination: false
          }" class="max-w-full">
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

      <!-- Slider DESIGN & GRAPHISME -->
      <div class="mb-8 max-w-screen-md mx-auto px-4">
        <h3 class="text-md text-secondary mb-3 text-center">DESIGN & GRAPHISME</h3>
        <div class="relative flex justify-center">
          <Splide :options="{
            type: 'loop',
            perPage: 4,
            gap: '1rem',
            focus: 0,
            trimSpace: false,
            breakpoints: {
              1024: { perPage: 3, gap: '1rem' },
              768: { perPage: 2, gap: '0.75rem' },
              640: { perPage: 1, gap: '0.5rem' }
            },
            arrows: true,
            pagination: false
          }" class="max-w-full">
            <SplideSlide v-for="(icon, index) in designIcons" :key="index">
              <div
                class="flex-shrink-0 bg-background2 p-6 rounded-lg flex flex-col justify-center items-center w-36 h-36 mx-auto">
                <i :class="[icon.name, 'text-6xl', 'text-primary']"></i>
                <p class="mt-4 text-white font-medium text-sm text-center">{{ icon.label }}</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <!-- Slider MARKETING & COMMUNICATION -->
      <div class="mb-8 max-w-screen-md mx-auto px-4">
        <h3 class="text-md text-secondary mb-3 text-center">MARKETING & COMMUNICATION</h3>
        <div class="relative flex justify-center">
          <Splide :options="{
            type: 'loop',
            perPage: 4,
            gap: '1rem',
            focus: 0,
            trimSpace: false,
            breakpoints: {
              1024: { perPage: 3, gap: '1rem' },
              768: { perPage: 2, gap: '0.75rem' },
              640: { perPage: 1, gap: '0.5rem' }
            },
            arrows: true,
            pagination: false
          }" class="max-w-full">
            <SplideSlide v-for="(icon, index) in marketingIcons" :key="index">
              <div
                class="flex-shrink-0 bg-background2 p-6 rounded-lg flex flex-col justify-center items-center w-36 h-36 mx-auto">
                <i :class="[icon.name, 'text-6xl', 'text-primary']"></i>
                <p class="mt-4 text-white font-medium text-sm text-center">{{ icon.label }}</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <!-- Slider OUTILS & AUTOMATISATION -->
      <div class="mb-8 max-w-screen-md mx-auto px-4">
        <h3 class="text-md text-secondary mb-3 text-center">OUTILS & AUTOMATISATION</h3>
        <div class="relative flex justify-center">
          <Splide :options="{
            type: 'loop',
            perPage: 4,
            gap: '1rem',
            focus: 0,
            trimSpace: false,
            breakpoints: {
              1024: { perPage: 3, gap: '1rem' },
              768: { perPage: 2, gap: '0.75rem' },
              640: { perPage: 1, gap: '0.5rem' }
            },
            arrows: true,
            pagination: false
          }" class="max-w-full">
            <SplideSlide v-for="(icon, index) in toolsIcons" :key="index">
              <div
                class="flex-shrink-0 bg-background2 p-6 rounded-lg flex flex-col justify-center items-center w-36 h-36 mx-auto">
                <i :class="[icon.name, 'text-6xl', 'text-primary']"></i>
                <p class="mt-4 text-white font-medium text-sm text-center">{{ icon.label }}</p>
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
  left: -2.5rem;
}
.splide__arrow--next {
  right: -2.5rem;
}


</style>
