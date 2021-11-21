import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/views/HelloWorld'
import Test from '@/views/Test'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    component: HelloWorld
  },
  { 
    path: '/Test',
    component: Test
  }
];

const  router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
