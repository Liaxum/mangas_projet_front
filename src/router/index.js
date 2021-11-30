import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HelloWorld.vue'),
  },
  {
    path: '/Test',
    name: 'Test',
    component: () => import('../views/Test.vue'),
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
