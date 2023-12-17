// Composables
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routeSettings: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/settings",
    name: "settings",
    component: () => {
      return import('@/views/Settings.vue')
    },
  },
]

// const routes = [
//   {
//     path: '/',
//     component: () => import('@/layouts/default/Default.vue'),
//     children: [
//       {
//         path: '',
//         name: 'home',
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
//       },
//       {
//         path: '/settings',
//         name: 'settings',
//         component: () => import('@/views/Settings.vue')
//       },
//     ],
//   },
// ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routeSettings
})

export default router
