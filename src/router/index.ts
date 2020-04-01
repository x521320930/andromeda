import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    meta: { title: '首页', nav: true },
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  },
  {
    path: '/Journal/growing',
    name: 'Journal-growing',
    meta: { title: '宝宝成长', nav: true },
    component: () => import(/* webpackChunkName: "journal-growing" */ '../views/journal/index.vue')
  },
  {
    path: '/Journal/interesting',
    name: 'Journal-interesting',
    meta: { title: '宝宝趣事', nav: true },
    component: () =>
      import(/* webpackChunkName: "journal-interesting" */ '../views/journal/index.vue')
  },
  {
    path: '/Journal/bit',
    name: 'Journal-bit',
    meta: { title: '生活点滴', nav: true },
    component: () => import(/* webpackChunkName: "journal-bit" */ '../views/journal/index.vue')
  },
  {
    path: '/Journal/life',
    name: 'Journal-life',
    meta: { title: '育儿生活', nav: true },
    component: () => import(/* webpackChunkName: "journal-life" */ '../views/journal/index.vue')
  },
  {
    path: '/Journal/experience',
    name: 'Journal-experience',
    meta: { title: '育儿心得', nav: true },
    component: () =>
      import(/* webpackChunkName: "journal-experience" */ '../views/journal/index.vue')
  },
  {
    path: '/Album',
    name: 'Album',
    meta: { title: '宝宝相册', nav: true },
    component: () => import(/* webpackChunkName: "album" */ '../views/album/index.vue')
  },
  {
    path: '/news-detail',
    name: 'news-detail',
    meta: { title: '详情', nav: false },
    component: () => import(/* webpackChunkName: "news-detail" */ '../views/news-detail/index.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
