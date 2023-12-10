import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
  },
  {
    path: '/help',
    name: 'help',
    component: () => import(/* webpackChunkName: "help" */ '../views/FAQ.vue'),
  },
  {
    path: '/imprint',
    name: 'imprint',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/Imprint.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
  },
  /*{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ /*'../views/AboutView.vue')
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router