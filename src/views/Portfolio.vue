<template>
  <div class="container mx-auto text-white">
    <div class="relative mb-8 lg:pl-8">
        <h1 class="h1">Portfolio</h1>
        <div class="absolute -bottom-4 lg:left-10  h-2 w-36 bg-primary rounded-full"></div>
      </div>

    <div class="flex flex-wrap">
      <button class="px-4 mr-2 mb-2 rounded text-secondary hover:text-primary" @click="filterAll">Tout</button>
      <button v-for="lang in uniqueLanguages" :key="lang" class="px-4 py-2 mr-2 mb-2 rounded text-secondary hover:text-primary" @click="filterByLanguage(lang)">{{ lang }}</button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-if="paginatedProjects.length > 0" v-for="project in paginatedProjects" :key="project.id" class="p-2 rounded-lg transform transition-transform hover:scale-110 relative">
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
    <div class="flex justify-center mt-4 space-x-2" v-if="totalPages > 1">
      <span v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{'bg-primary': currentPage === page, 'bg-gray-400': currentPage !== page}" class="w-4 h-4 rounded-full cursor-pointer"></span>
    </div>
  </div>
  <div v-if="showModal" class="fixed overflow-scroll inset-0  bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-4 rounded-lg max-w-lg w-full relative mx-auto my-auto">
      <button class="absolute text-6xl top-0 right-2 text-primary" @click="closeModal">&times;</button>
      <h2 class="text-2xl font-bold mb-2">{{ modalProject.title }}</h2>
      <div class="space-y-">
        <h3 class="text-xl font-semibold">MealFlow - Application de Planification de Repas Intelligente</h3>
        <p>MealFlow est une application conçue pour aider les utilisateurs à planifier leurs repas de manière simple, tout en s'adaptant à leur emploi du temps, leur niveau d'activité physique et le matériel de cuisine disponible. L'objectif est d'offrir une expérience de planification flexible, permettant aux utilisateurs de choisir des recettes adaptées à leur temps disponible dans la semaine.</p>
        <img src="/img/logo_mealflow.png" alt="logo mealflow" class="w-1/2 mx-auto">
        <p>Pour le moment, j'ai réalisé le logo et je suis en train de préparer les maquettes grâce aux réflexions et wireframes que j'ai réalisés avec mon coéquipier. Ce travail de conception est basé sur des sessions de brainstorming, afin de garantir une expérience utilisateur intuitive et fluide. </p>
        <img src="/img/maquettes.png" alt="" class="mx-auto">
        <p>Restez à l'écoute pour la suite du développement de l'application !</p>
      </div>
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
          title: "3'Pousses - Site de co-jardinage",
          description: 'Faire un truc qui dérange n\'est pas impoli, c\'est une stratégie.',
          tags: ['PHP', 'TailwindCSS'],
          link: 'https://mmi23g05.sae202.ovh/',
          imageUrl: 'img/sae202.png'
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
          description: `MealFlow - Application de Planification de Repas Intelligente

MealFlow est une application innovante conçue pour aider les utilisateurs à planifier leurs repas de manière simple, tout en s'adaptant à leur emploi du temps, leur niveau d'activité physique et le matériel de cuisine disponible. L'objectif est d'offrir une expérience de planification flexible, permettant aux utilisateurs de choisir des recettes adaptées à leur temps, leurs préférences alimentaires et leurs besoins énergétiques.

Pour le moment, j'ai réalisé le logo de MealFlow et je suis en train de préparer les maquettes grâce aux réflexions et wireframes que j'ai réalisés avec mon coéquipier. Ce travail de conception est basé sur des sessions de brainstorming approfondies, afin de garantir une expérience utilisateur intuitive et fluide. Les wireframes et les éléments de design serviront de base pour une interface fonctionnelle et visuellement engageante.

Restez à l'écoute pour la suite du développement de l'application !`,
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
        {
          id: 7,
          title: "A'Danse",
          description: 'Faire un truc qui dérange n\'est pas impoli, c\'est une stratégie.',
          tags: ['TailwindCSS'],
          link: 'https://danse.alicedr.com',
          imageUrl: 'img/adanse.png'
        },

        {
          id: 8,
          title: "Site de recherche de lieux touristiques",
          description: 'Faire un truc qui dérange n\'est pas impoli, c\'est une stratégie.',
          tags: ['PHP', 'TailwindCSS'],
          link: 'https://mmi23g05.sae203.ovh/',
          imageUrl: 'img/sae203.png'
        },

      ],
      languages: ['Tout', 'Themosis', 'VueJS', 'TailwindCSS','SCSS'],
      selectedLanguage: 'Tout',
      showModal: false,
      modalProject: {},
      currentPage: 1,
      itemsPerPage: 6
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
    filterByLanguage(lang) {
      this.selectedLanguage = lang;
      this.currentPage = 1; // Reset to first page on filter change
    },

    filterAll() {
      this.selectedLanguage = 'Tout';
      this.currentPage = 1; // Reset to first page on filter change
    },

    openModal(project) {
      this.modalProject = project;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.modalProject = {};
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    }
  }
}
</script>

