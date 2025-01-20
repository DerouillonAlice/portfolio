<template>
  <div class="container mx-auto text-white">
    <div class="relative mb-8 pl-8">
        <h1 class="text-4xl font-bold text-white no-underline">Portfolio</h1>
        <div class="absolute -bottom-4 left-10  h-2 w-36 bg-primary rounded-full"></div>
      </div>

    <div class="flex flex-wrap mb-4">
      <button class="px-4 py-2 mr-2 mb-2 rounded text-secondary hover:text-primary" @click="filterAll">Tout</button>
      <button v-for="lang in uniqueLanguages" :key="lang" class="px-4 py-2 mr-2 mb-2 rounded text-secondary hover:text-primary" @click="filterByLanguage(lang)">{{ lang }}</button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-if="filteredProjects.length > 0" v-for="project in filteredProjects" :key="project.id" class="p-2 rounded-lg">
        <img :src="project.imageUrl" alt="Image du projet" class="w-full h-36 object-cover mb-2">
        <h3 class="text-xl text-white font-bold">{{ project.title }}</h3>
        <div class="flex space-x-2">
          <span v-for="(tag, index) in project.tags" :key="tag" class="text-secondary px-2 py-1 rounded">
            {{ tag }}<span v-if="index < project.tags.length - 1" class="mx-2">|</span>
          </span>
        </div>
      </div>
      <div v-else class="text-center text-gray-500">Aucun projet ne correspond à ce filtre.</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'La Ferme de Fontenay',
          description: 'Faire un truc qui dérange n\'est pas impoli, c\'est une stratégie.',
          tags: ['WordPress', 'TailwindCSS', 'SCSS']
        },
        {
          id: 2,
          title: 'La Ferme de Fontenay',
          description: 'Faire un truc qui dérange n\'est pas impoli, c\'est une stratégie.',
          tags: ['VueJS', 'TailwindCSS']
        },
        {
          id: 3,
          title: 'La Ferme de Fontenay',
          description: 'Faire un truc qui dérange n\'est pas impoli, c\'est une stratégie.',
          tags: ['VueJS', 'TailwindCSS']
        },
        {
          id: 4,
          title: 'La Ferme de Fontenay',
          description: 'Faire un truc qui dérange n\'est pas impoli, c\'est une stratégie.',
          tags: ['VueJS', 'TailwindCSS']
        },
        {
          id: 5,
          title: 'La Ferme de Fontenay',
          description: 'Faire un truc qui dérange n\'est pas impoli, c\'est une stratégie.',
          tags: ['VueJS', 'TailwindCSS']
        },
        {
          id: 6,
          title: 'La Ferme de Fontenay',
          description: 'Faire un truc qui dérange n\'est pas impoli, c\'est une stratégie.',
          tags: ['VueJS', 'TailwindCSS']
        },
      ],
      languages: ['Tout', 'WordPress', 'VueJS', 'TailwindCSS','SCSS'],
      selectedLanguage: 'Tout',
    }
  },
  computed: {
    uniqueLanguages() {
      return [...new Set(this.projects.flatMap(project => project.tags))];
    },
    filteredProjects() {
      if (this.selectedLanguage === 'Tout') {
        return this.projects;
      } else {
        return this.projects.filter(project => project.tags.includes(this.selectedLanguage));
      }
    }
  },
  methods: {
    filterByLanguage(lang) {
      this.selectedLanguage = lang;
    },

    filterAll() {
      this.selectedLanguage = 'Tout';
    }

  }
}
</script>
