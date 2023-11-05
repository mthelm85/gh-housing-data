// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },

  {
    path: '/overview',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/overview',
        name: 'Overview',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Overview.vue'),
      },
    ],
  },

  {
    path: '/supply',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/supply',
        name: 'Supply',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Supply.vue'),
      },
    ],
  },

  {
    path: '/demand',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/demand',
        name: 'Demand',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Demand.vue'),
      },
    ],
  },

  {
    path: '/zip-map',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/zip-map',
        name: 'Map',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Map.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
