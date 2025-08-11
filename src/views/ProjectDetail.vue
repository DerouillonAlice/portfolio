<template>
  <div class="container mx-auto text-white">
    <div v-if="project" class=" ">
      <!-- Back button -->
      <button @click="$router.go(-1)" class="mb-6 text-primary hover:text-secondary flex items-center">
        ← Retour au portfolio
      </button>

      <!-- Project header -->
      <div class="relative mb-8 lg:pl-8">
        <div class="flex justify-between items-start flex-wrap gap-4">
          <div class="flex-1">
            <h1 class="h1">{{ project.title }}</h1>
            <div class="absolute -bottom-4 lg:left-10 h-2 w-36 bg-primary rounded-full"></div>
          </div>
          <div v-if="project.link && project.link !== '#'" class="flex-shrink-0">
            <a :href="project.link" target="_blank"
              class="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
              <i class="fab fa-github" v-if="project.link.includes('github')"></i>
              <i class="fas fa-external-link-alt" v-else></i>
              Voir le projet
            </a>
          </div>
        </div>
      </div>

      <!-- Project type badge and tags -->
      <div class="mb-8 mt-12">
        <div class="flex flex-wrap items-center gap-3">
          <!-- Categories -->
          <div class="flex flex-wrap gap-2">
            <span class="bg-secondary text-background px-4 py-2 rounded-full text-sm font-medium">
              {{ project.type }}
            </span>
            <span v-for="category in project.categories" :key="category" class="bg-secondary text-background px-4 py-2 rounded-full text-sm font-medium">
              {{ category }}
            </span>
          </div>
          
          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag" class="bg-primary text-background px-4 py-2 rounded-full text-sm font-medium">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Context -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold mb-4 text-primary">Contexte</h3>
        <p class="text-lg leading-relaxed text-gray-300">{{ project.context }}</p>
      </div>

      <!-- Achievements -->
      <div class="mb-8">
        <h3 class="text-2xl font-semibold mb-4 text-primary">Réalisation</h3>
        <ul class="space-y-3">
          <li v-for="achievement in project.achievements" :key="achievement" class="flex items-start">
            <span class="text-primary mr-3 mt-1">•</span>
            <span class="text-gray-300">{{ achievement }}</span>
          </li>
        </ul>
      </div>

      <!-- Additional images - max 3 images -->
      <div v-if="project.additionalImages && project.additionalImages.length > 0">
        <div class="grid grid-cols-3 gap-4">
          <img v-for="(image, index) in project.additionalImages.slice(0, 3)" :key="image" :src="image" :alt="`${project.title} - Aperçu ${index + 1}`"
            class="w-full h-64 object-contain rounded-lg">
        </div>
      </div>
    </div>

    <div v-else class="text-center">
      <p class="text-xl">Projet non trouvé</p>
    </div>
  </div>
</template>

<script>
import projectsData from '@/data/projects.json';

export default {
  name: 'ProjectDetail',
  data() {
    return {
      project: null
    }
  },
  created() {
    this.loadProject();
  },
  watch: {
    '$route'() {
      this.loadProject();
    }
  },
  methods: {
    loadProject() {
      const projectId = parseInt(this.$route.params.id);
      this.project = projectsData.find(p => p.id === projectId);
    }
  }
}
</script>
