import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectDetailsView from '@/views/ProjectDetailsView.vue'
import adminView from '@/views/adminView.vue'
import dashBoard from '@/views/admin/loggedView.vue'
import NotFound from '@/views/NotFound.vue'

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
    component: ProjectDetailsView
  },
  {
    path: '/admin/',
    name: 'admin',
    meta: {title: '- Admin login'},
    component: adminView
  },
  {
    path: '/admin/dashboard',
    name: 'dashBoard',
    meta: {title: '- DashBoard'},
    component: dashBoard
  },
  {
    path: '/:pathMatch(.*)*',
    meta: {title: '- Page Not Found'},
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `Gabriel Jordan ${to.meta.title}`
  next()
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuthenticated = localStorage.getItem('accessToken')
    if (!isAuthenticated) {
      next('/admin');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
