<template>
  <div class="container mx-auto text-white py-8">
    <div v-if="project" class="max-w-4xl mx-auto">
      <!-- Back button -->
      <button @click="$router.go(-1)" class="mb-6 text-primary hover:text-secondary flex items-center">
        ← Retour au portfolio
      </button>

      <!-- Project header -->
      <div class="relative mb-8 lg:pl-8">
        <h1 class="h1">{{ project.title }}</h1>
        <div class="absolute -bottom-4 lg:left-10 h-2 w-36 bg-primary rounded-full"></div>
      </div>

      <!-- Project image -->
      <div class="mb-8">
        <img :src="project.imageUrl" :alt="project.title" class="w-full h-64 object-cover rounded-lg">
        <div v-if="project.inProgress" class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center rounded-lg">
          <span class="text-white text-xl font-bold">En cours</span>
        </div>
      </div>

      <!-- Project tags -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span v-for="tag in project.tags" :key="tag" class="bg-primary text-white px-3 py-1 rounded-full text-sm">
          {{ tag }}
        </span>
      </div>

      <!-- Project description -->
      <div class="prose prose-invert max-w-none mb-8">
        <div v-if="project.id === 5" class="space-y-4">
          <h3 class="text-xl font-semibold">MealFlow - Application de Planification de Repas Intelligente</h3>
          <p>{{ project.detailedDescription.split('\n\n')[0] }}</p>
          <img src="/img/logo_mealflow.png" alt="logo mealflow" class="w-1/2 mx-auto">
          <p>{{ project.detailedDescription.split('\n\n')[1] }}</p>
          <img src="/img/maquettes.png" alt="maquettes" class="mx-auto">
          <p>{{ project.detailedDescription.split('\n\n')[2] }}</p>
        </div>
        <div v-else>
          <p class="text-lg leading-relaxed whitespace-pre-line">{{ project.detailedDescription }}</p>
        </div>
      </div>

      <!-- External link -->
      <div v-if="project.link && project.link !== '#'" class="text-center">
        <a :href="project.link" target="_blank" class="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
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
