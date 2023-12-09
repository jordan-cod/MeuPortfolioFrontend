import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
//import ProjectView from '../views/ProjectView.vue'
import SingleProject from '@/views/SingleProject.vue'
import adminView from '@/views/adminView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {title: ''},
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    meta: {title: ''},
    component: ProjectsView
  },
  {
    path: '/project/:id',
    name: 'project',
    meta: {title: ''},
    component: SingleProject
  },
  {
    path: '/admin/',
    name: 'admin',
    meta: {title: 'Admin'},
    component: adminView
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
