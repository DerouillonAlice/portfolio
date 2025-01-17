import Accueil from '@/views/Accueil.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Accueil,
    },

    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/Portfolio.vue'),
    },

    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('@/views/Contact.vue'),
    // },
  ],
})

export default router
