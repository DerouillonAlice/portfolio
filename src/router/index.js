import Accueil from '@/views/Accueil.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Competences from '@/views/Competences.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil,
    },

    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/Portfolio.vue'),
    },
    {
      path: '/CV',
      name: 'CV',
      component: () => import('@/views/cv.vue'),
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact.vue'),
    },
    {
      path: '/portfolio/:id',
      name: 'ProjectDetail',
      component: () => import('@/views/ProjectDetail.vue')
    },
    {
      path: '/competences',
      name: 'Competences',
      component: Competences
    }
  ],
})

export default router
