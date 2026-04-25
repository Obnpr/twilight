import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import BacklogView from '../views/BacklogView.vue'
import CollagePortfolioView from '../views/CollagePortfolioView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      name: 'homeslash',
      component: HomeView,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
    },
    {
      path: '/backlog',
      name: 'backlog',
      component: BacklogView,
    },
    {
      path: '/collage-portfolio',
      name: 'collage-portfolio',
      component: CollagePortfolioView,
    },
  ],
})

export default router
