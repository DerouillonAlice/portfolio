<template>
  <div class="text-white ">
    <div class="mb-8">
      <div class="relative mb-10 lg:pl-8">
        <h1 class="h1">A propos</h1>
        <div class="absolute -bottom-4 lg:left-10 h-2 w-36 bg-primary rounded-full"></div>
      </div>

      <p class="text-white leading-relaxed">
        Je m'appelle Alice Derouillon, 22 ans, actuellement en <span class="gras">BUT Métiers du Multimédia et de
          l'Internet</span> (MMI) à Troyes. Passionnée par le <span class="gras">développement web</span>, je combine
        mes compétences techniques avec des notions solides d'<span class="gras">UI/UX design</span>, de <span
          class="gras">SEO</span>, de <span class="gras">communication digitale</span> et de <span
          class="gras">graphisme</span>, ce qui me permet d'avoir une approche polyvalente et centrée utilisateur.
      </p>

      <p class="text-white leading-relaxed mt-4">
        Depuis septembre 2024, je suis développeuse en alternance à l'<a href="https://www.zetruc.fr/"
          class="gras">agence Zetruc</a>, où je conçois des <span class="gras">sites WordPress sur mesure</span>
        (framework Themosis) et participe à des projets variés : <span class="gras">e-commerce</span> (PrestaShop),
        <span class="gras">emailing</span> (Mailchimp, Brevo), <span class="gras">automatisations</span> (n8n) et <span
          class="gras">création d'identités visuelles</span>. Mon objectif : concevoir des solutions web complètes, à la
        fois <span class="gras">esthétiques</span>, <span class="gras">fonctionnelles</span> et pensées pour l'<span
          class="gras">expérience utilisateur</span>.
      </p>

      <!-- Section CTA -->
      <div class="mt-12">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          <!-- Mon Dernier Projet -->
          <div class="bg-background2 p-6 rounded-xl">
            <div class="mb-4">
              <span class="bg-primary text-dark px-3 py-1 rounded-full text-xs font-semibold">💡 DERNIER PROJET</span>
            </div>

            <img :src="latestProject.imageUrl" :alt="latestProject.title" class="rounded-lg w-full h-32 object-cover mb-4">

            <h3 class="text-xl font-bold mb-3">{{ latestProject.title }}</h3>
            <p class="text-gray-300 text-sm mb-4">{{ latestProject.description }}</p>

            <div class="flex space-x-1 text-sm whitespace-nowrap overflow-hidden mb-4">
              <span v-for="(tag, index) in latestProject.tags.slice(0, 3)" :key="tag" class="text-secondary px-1 py-1 rounded">
                {{ tag }}<span v-if="index < Math.min(latestProject.tags.length, 3) - 1" class="mx-1">|</span>
              </span>
            </div>

            <a :href="latestProject.link" target="_blank"
              class="inline-flex items-center gap-2 bg-primary hover:bg-white text-dark hover:text-primary px-4 py-2 rounded-full text-sm font-semibold transition-all">
              <i class="fab fa-github" v-if="latestProject.link.includes('github')"></i>
              <i class="fas fa-external-link-alt" v-else></i>
              Voir le projet
            </a>
          </div>

          <!-- Mon Expérience -->
          <div class="bg-background2 p-6 rounded-xl ">
            <div class="mb-4">
              <span class="bg-secondary text-dark px-3 py-1 rounded-full text-xs font-semibold">🚀 MON EXPÉRIENCE</span>
            </div>

            <h3 class="text-xl font-bold mb-2">Développeuse en Alternance</h3>
            <div class="text-primary font-bold mb-1">Agence Zetruc</div>
            <div class="text-gray-400 text-sm mb-4">Depuis septembre 2024</div>

            <div class="space-y-2 text-sm text-gray-300 mb-4">
              <div class="flex items-center gap-2">
                <i class="fas fa-code text-primary text-xs"></i>
                <span>Sites WordPress (Themosis)</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fas fa-shopping-cart text-primary text-xs"></i>
                <span>E-commerce PrestaShop</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fas fa-cogs text-primary text-xs"></i>
                <span>Automatisations (n8n)</span>
              </div>
            </div>

            <a href="https://www.zetruc.fr/" target="_blank"
              class="inline-flex items-center gap-2 bg-secondary hover:bg-white text-dark hover:text-secondary px-4 py-2 rounded-full text-sm font-semibold transition-all">
              <i class="fas fa-external-link-alt"></i>
              Voir l'agence
            </a>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import projectsData from '@/data/projects.json';

export default {
  name: 'Accueil',
  data() {
    return {
      featuredProjectId: 15, // ID du projet Workflow Audit SEO
    }
  },
  computed: {
    latestProject() {
      return projectsData.find(project => project.id === this.featuredProjectId) || projectsData[0];
    }
  }
}
</script>
