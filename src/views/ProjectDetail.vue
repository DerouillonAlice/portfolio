<template>
  <div class="container mx-auto text-white py-8">
    <div v-if="project" class="max-w-4xl ">
      <!-- Back button -->
      <button @click="$router.go(-1)" class="mb-6 text-primary hover:text-secondary flex items-center">
        ← Retour au portfolio
      </button>

      <!-- Project header -->
      <div class="relative mb-8 lg:pl-8">
        <h1 class="h1">{{ project.title }}</h1>
        <div class="absolute -bottom-4 lg:left-10 h-2 w-36 bg-primary rounded-full"></div>
      </div>

      <!-- Project type badge -->
      <div class="mb-4 mt-12">
        <span class="bg-secondary text-background px-4 py-2 mr-2 rounded-full text-sm font-medium">
          {{ project.type }}
        </span>

        <span v-for="category in project.categories" :key="category" class="bg-secondary text-background px-4 py-2 mr-2 rounded-full text-sm font-medium">
          {{ category }}
        </span>
      </div>

      <!-- Project tags -->
      <div class="flex flex-wrap gap-2 mb-8">
        <span v-for="tag in project.tags" :key="tag" class="bg-primary text-background px-3 py-1 rounded-full text-sm">
          {{ tag }}
        </span>
      </div>

      <!-- Project image -->
      <div class="mb-8 relative">
        <img :src="project.imageUrl" :alt="project.title" class="w-full h-64 object-cover rounded-lg">
        <div v-if="project.inProgress"
          class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center rounded-lg">
          <span class="text-white text-xl font-bold">En cours</span>
        </div>
      </div>
      <!-- Project info sections -->




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

      <!-- Additional images for MealFlow -->
      <div v-if="project.additionalImages" class="mb-8">
        <h3 class="text-2xl font-semibold mb-4 text-primary">Aperçu du projet</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <img v-for="image in project.additionalImages" :key="image" :src="image" :alt="project.title"
            class="w-full rounded-lg">
        </div>
      </div>

      <!-- External link -->
      <div v-if="project.link && project.link !== '#'" class="text-center">
        <a :href="project.link" target="_blank"
          class="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
          Voir le projet
        </a>
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
