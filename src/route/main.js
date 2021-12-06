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
      },{
        path: 'newsDetail',
        name: 'newsDetail',
        meta: { title: '新闻详情', index: 2 },
        component: () => import('../view/News/NewDetail.vue')
      },
      {
        path: 'gameIndex',
        name: 'gameIndex',
        meta: { title: '小游戏', index: 1 },
        component: () => import('../view/Games/index.vue')
      },{
        path: 'game',
        name: 'game',
        meta: { title: '答题', index: 2 },
        component: () => import('../view/Games/game.vue')
      },
      {
        path: 'wiki',
        name: 'wiki',
        meta: { title: '百科', index: 1 },
        component: () => import('../view/wiki/index.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        meta: { title: '个人中心', index: 1 },
        component: () => import('../view/mine.vue')
      },
    ]
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes: routes, // `routes: routes` 的缩写
})

export default router