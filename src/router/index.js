import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const routes = [
  {
    path: '/projects',
    name: 'home',
    meta: {title: ''},
    component: ProjectsView
  },
  {
    path: '/',
    name: 'projects',
    meta: {title: ''},
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `Gabriel Jordan  ${to.meta.title}`
  next()
})

export default router
