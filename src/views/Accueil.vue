<template>
  <div class="text-white ">
    <div class="mb-4">
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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <!-- Mon Dernier Projet -->
          <div class="bg-background/80 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl  transition-all duration-300 ">
            <div class="mb-6">
              <span class="bg-gradient-to-r from-primary to-primaryhover text-background px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">
               Dernier Projet
              </span>
            </div>

            <div class="relative mb-6 overflow-hidden rounded-xl">
              <img :src="latestProject.imageUrl" :alt="latestProject.title" class="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>

            <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">{{ latestProject.title }}</h3>
            <p class="text-gray-300 text-sm mb-6 leading-relaxed">{{ latestProject.description }}</p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in latestProject.tags.slice(0, 3)" :key="tag" class="bg-background2/70 text-secondary px-3 py-1 rounded-full text-xs font-medium border border-primary/20">
                {{ tag }}
              </span>
            </div>

            <a :href="latestProject.link" target="_blank"
              class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primaryhover hover:from-primaryhover hover:to-primary text-background px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <i class="fab fa-github" v-if="latestProject.link.includes('github')"></i>
              <i class="fas fa-external-link-alt" v-else></i>
              Découvrir le projet
            </a>
          </div>

          <!-- Mon Expérience -->
          <div class="bg-background/80 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl transition-all duration-300 ">
            <div class="mb-6">
              <span class="bg-gradient-to-r from-secondary to-gray-400 text-background px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">
                Mon Expérience
              </span>
            </div>

            <div class="mb-6">
              <h3 class="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">Développeuse en Alternance</h3>
              <div class="text-primary font-bold text-lg mb-2">Agence Zetruc</div>
              <div class="text-gray-400 text-sm mb-4 flex items-center gap-2">
                <i class="fas fa-calendar-alt text-primary text-xs"></i>
                Depuis septembre 2024
              </div>
            </div>

            <div class="space-y-3 text-sm text-gray-300 mb-6">
              <div class="flex items-center gap-3 p-2 rounded-lg bg-background2/30 border border-primary/10">
                <i class="fas fa-code text-primary"></i>
                <span>Sites WordPress (Themosis)</span>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg bg-background2/30 border border-primary/10">
                <i class="fas fa-shopping-cart text-primary"></i>
                <span>E-commerce PrestaShop</span>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg bg-background2/30 border border-primary/10">
                <i class="fas fa-cogs text-primary"></i>
                <span>Automatisations (n8n)</span>
              </div>
            </div>

            <a href="https://www.zetruc.fr/" target="_blank"
              class="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-gray-400 hover:from-gray-400 hover:to-secondary text-background px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <i class="fas fa-external-link-alt"></i>
              Découvrir l'agence
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
