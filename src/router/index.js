import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/Store',
    name: 'Store',
    component: () => import('../views/Store.vue'),
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
