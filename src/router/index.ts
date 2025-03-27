import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { loadingBar } from '@/utils/nativeui.js'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: 'index',
    },
    component: () => import('@/views/index.vue'),
  },
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    meta: {
      title: '404',
    },
    component: () => import('@/views/Error/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});
router.beforeEach((_to, _from, next) => {
  loadingBar.start()
  next()
})
router.afterEach(() => {
  loadingBar.finish()
})

export default router;

