
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
const configUrl = (url: string) => {
  return window.frames.length != parent.frames.length ? `/hos${url}` : url
}
const routes: RouteRecordRaw[] = [
  {
    path: configUrl('/'),
    redirect: configUrl('/home'),
    meta: {
      title: ''
    },
    children: [
      {
        path: configUrl('/home'),
        name: 'Home',
        meta: {
          title: '',
          requireAuth: false // 是否需要登录校验
        },
        component: async () => await import(/* webpackChunkName: "home" */ '@/pages/home/index.vue')
      },{
        path: configUrl('/about'),
        name: 'About',
        meta: {
          title: '',
          requireAuth: false // 是否需要登录校验
        },
        component: async () => await import(/* webpackChunkName: "about" */ '@/pages/about/index.vue')
      }
    ]
  },
  // {
  //   path: '/:notFoundPath',
  //   redirect: '/404'
  // },
  // {
  //   path: '/404',
  //   meta: {
  //     title: '404',
  //     requireAuth: false
  //   },
  //   component: async () => await import(/* webpackChunkName: "404" */ '@/pages/404/index.vue')
  // }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to: any, from: any, next: any) => {
  next()
})
export default router
