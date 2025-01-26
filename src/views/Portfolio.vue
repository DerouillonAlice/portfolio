<template>
  <div class="container mx-auto text-white">
    <div class="relative mb-8 lg:pl-8">
        <h1 class="h1">Portfolio</h1>
        <div class="absolute -bottom-4 lg:left-10  h-2 w-36 bg-primary rounded-full"></div>
      </div>

    <div class="flex flex-wrap mb-4">
      <button class="px-4 py-2 mr-2 mb-2 rounded text-secondary hover:text-primary" @click="filterAll">Tout</button>
      <button v-for="lang in uniqueLanguages" :key="lang" class="px-4 py-2 mr-2 mb-2 rounded text-secondary hover:text-primary" @click="filterByLanguage(lang)">{{ lang }}</button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-if="filteredProjects.length > 0" v-for="project in filteredProjects" :key="project.id" class="p-2 rounded-lg transform transition-transform hover:scale-110 relative">
        <a v-if="project.id !== 5" :href="project.link" target="_blank">
          <img :src="project.imageUrl" alt="Image du projet" class="w-full h-36 object-cover mb-2">
          <div v-if="project.id === 5" class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
            <span class="text-white text-xl font-bold">En cours</span>
          </div>
          <h3 class="text-xl text-white font-bold">{{ project.title }}</h3>
          <div class="flex space-x-1">
            <span v-for="(tag, index) in project.tags" :key="tag" class="text-secondary px-1 py-1 rounded">
              {{ tag }}<span v-if="index < project.tags.length - 1" class="mx-1">|</span>
            </span>
          </div>
        </a>
        <div v-else @click="openModal(project)" class="cursor-pointer">
          <img :src="project.imageUrl" alt="Image du projet" class="w-full h-36 object-cover mb-2">
          <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
            <span class="text-white text-xl font-bold">En cours</span>
          </div>
          <h3 class="text-xl text-white font-bold">{{ project.title }}</h3>
          <div class="flex space-x-1">
            <span v-for="(tag, index) in project.tags" :key="tag" class="text-secondary px-1 py-1 rounded">
              {{ tag }}<span v-if="index < project.tags.length - 1" class="mx-1">|</span>
            </span>
          </div>
        </div>
      </div>
      <div v-else class="text-center text-gray-500">Aucun projet ne correspond à ce filtre.</div>
    </div>
  </div>
  <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-4 rounded-lg max-w-lg w-full">
      <h2 class="text-2xl font-bold mb-4">{{ modalProject.title }}</h2>
      <p>{{ modalProject.description }}</p>
      <button class="mt-4 px-4 py-2 bg-primary text-white rounded" @click="closeModal">Fermer</button>
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
          tags: ['Themosis', 'SCSS', 'TailwindCSS'],
          link: 'https://fermedefontenay.ze-truc.fr',
          imageUrl: 'img/fermefontenay.png'
        },
        {
          id: 2,
          title: "A'Keep",
          description: 'Faire un truc qui dérange n\'est pas impoli, c\'est une stratégie.',
          tags: ['PHP', 'TailwindCSS'],
          link: 'https://notes.alicedr.com',
          imageUrl: 'img/akeep.png'
        },
        {
          id: 3,
          title: "A'Danse",
          description: 'Faire un truc qui dérange n\'est pas impoli, c\'est une stratégie.',
          tags: ['TailwindCSS'],
          link: 'https://danse.alicedr.com',
          imageUrl: 'img/adanse.png'
        },
        {
          id: 4,
          title: 'Faunéa',
          description: 'Faire un truc qui dérange n\'est pas impoli, c\'est une stratégie.',
          tags: ['VueJS', 'TailwindCSS'],
          link: 'https://faunea.alice.sh',
          imageUrl: 'img/faunea.png'
        },
        {
          id: 5,
          title: 'MealFlow',
          description: 'En cours',
          tags: ['VueJS', 'TailwindCSS'],
          link: '#',
          imageUrl: 'img/mealflow.png'
        },
        {
          id: 6,
          title: 'Parc du Marais',
          description: 'Faire un truc qui dérange n\'est pas impoli, c\'est une stratégie.',
          tags: ['SCSS'],
          link: 'http://mmi23g08.sae301dev.ovh',
          imageUrl: 'img/parc.png'
        },
        // {
        //   id: 7,
        //   title: 'Parc du Marais',
        //   description: 'Faire un truc qui dérange n\'est pas impoli, c\'est une stratégie.',
        //   tags: ['SCSS'],
        //   link: 'http://mmi23g08.sae301dev.ovh/index.php/bowling',
        //   imageUrl: 'https://example.com/image6.jpg'
        // },
      ],
      languages: ['Tout', 'Themosis', 'VueJS', 'TailwindCSS','SCSS'],
      selectedLanguage: 'Tout',
      showModal: false,
      modalProject: {}
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
    },

    openModal(project) {
      this.modalProject = project;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.modalProject = {};
    }
  }
}
</script>

