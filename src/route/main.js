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
      {
        path: 'login',
        name: 'login',
        meta: { title: '登录注册', index: 2 },
        component: () => import('../view/Login.vue')
      },
      {
        path: 'star',
        name: 'star',
        meta: { title: '收藏', index: 2 },
        component: () => import('../view/Star.vue')
      },
      {
        path: 'personal',
        name: 'personal',
        meta: { title: '个人信息', index: 2 },
        component: () => import('../view/Personal.vue')
      },
    ]
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes: routes, // `routes: routes` 的缩写
})

export default router