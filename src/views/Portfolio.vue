<template>
  <div class="container mx-auto text-white">
    <div class="relative mb-8 lg:pl-8">
        <h1 class="h1">Projets</h1>
        <div class="absolute -bottom-4 lg:left-10  h-2 w-36 bg-primary rounded-full"></div>
      </div>

    <div class="flex flex-wrap">
      <button :class="{'bg-primary text-white font-bold': selectedCategory === 'Tout', 'text-secondary hover:text-primary': selectedCategory !== 'Tout'}" class="px-4 py-2 mr-2 mb-2 rounded" @click="filterAll">Tout</button>
      <button v-for="category in uniqueCategories" :key="category" :class="{'bg-primary text-white font-bold': selectedCategory === category, 'text-secondary hover:text-primary': selectedCategory !== category}" class="px-4 py-2 mr-2 mb-2 rounded" @click="filterByCategory(category)">{{ category }}</button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-if="paginatedProjects.length > 0" v-for="project in paginatedProjects" :key="project.id" class="p-2 rounded-lg transform transition-transform hover:scale-110 relative">
        <router-link :to="`/portfolio/${project.id}`" class="block">
          <img :src="project.imageUrl" alt="Image du projet" class="w-full h-36 object-cover mb-2">
          <h3 class="text-xl text-white font-bold truncate">{{ project.title }}</h3>
          <div class="flex space-x-1 text-sm whitespace-nowrap overflow-hidden">
            <span v-for="(tag, index) in project.tags.slice(0, 3)" :key="tag" class="text-secondary px-1 py-1 rounded">
              {{ tag }}<span v-if="index < Math.min(project.tags.length, 3) - 1" class="mx-1">|</span>
            </span>
          </div>
        </router-link>
      </div>
      <div v-else class="text-center text-gray-500">Aucun projet ne correspond à ce filtre.</div>
    </div>
    <div class="flex justify-center mt-4 space-x-2" v-if="totalPages > 1">
      <span v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{'bg-primary': currentPage === page, 'bg-gray-400': currentPage !== page}" class="w-4 h-4 rounded-full cursor-pointer"></span>
    </div>
  </div>
</template>

<script>
import projectsData from '@/data/projects.json';

export default {
  data() {
    return {
      projects: projectsData.sort((a, b) => b.id - a.id),
      selectedCategory: 'Tout',
      currentPage: 1,
      itemsPerPage: 6
    }
  },
  computed: {
    uniqueCategories() {
      return [...new Set(this.projects.flatMap(project => project.categories))];
    },
    filteredProjects() {
      if (this.selectedCategory === 'Tout') {
        return this.projects;
      } else {
        return this.projects.filter(project => project.categories.includes(this.selectedCategory));
      }
    },
    paginatedProjects() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredProjects.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredProjects.length / this.itemsPerPage);
    }
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category;
      this.currentPage = 1;
    },
    filterAll() {
      this.selectedCategory = 'Tout';
      this.currentPage = 1;
    },
    goToPage(page) {
      this.currentPage = page;
    }
  }
}
</script>

