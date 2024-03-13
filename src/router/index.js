import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Listado from '../views/Listado.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },

    {
      path: '/listado',
      name: 'listado',
      component: Listado
    }

  ]
})

export default router
