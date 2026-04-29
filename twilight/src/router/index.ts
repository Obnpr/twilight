import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import PortfolioView from '../views/portfolioView.vue'
import gamelogView from '../views/gamelogView.vue'
import collagePortfolioView from '../views/collagePortfolioView.vue'
import aboutmeView from '../views/aboutMeView.vue'
import nowView from '../views/nowView.vue'


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
      path: '/now',
      name: 'now',
      component: nowView,
    },
    {
      path: '/gamelog',
      name: 'gamelog',
      component: gamelogView,
    },
    {
      path: '/collageportfolio',
      name: 'collageportfolio',
      component: collagePortfolioView,
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: aboutmeView,
    },
  ],
})

export default router
