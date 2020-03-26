import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: '首页',
    component: () => import('../views/Home/index.vue')
  },
  {
    path: '/Journal',
    name: '日志',
    component: () => import('../views/Journal/index.vue')
  },
  {
    path: '/Album',
    name: '宝宝相册',
    component: () => import('../views/Album/index.vue')
  },
  {
    path: '/news-detail',
    name: '详情',
    component: () => import('../views/news-detail/index.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
