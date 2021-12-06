import { createRouter, createWebHistory } from "vue-router"


const routes = [
  {
    path: '/',
    name: 'tabbar',
    component: () => import('../cartApp.vue'),
    children: [
      {
        path: '',
        name: 'index',
        meta: { title: '首页', index: 1 },
        component: () => import('../view/Index.vue')
      }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes: routes, // `routes: routes` 的缩写
})

export default router