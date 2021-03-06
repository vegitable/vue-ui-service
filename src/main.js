import Vue from 'vue';
import VueRouter from 'vue-router';
import './registerServiceWorker';
import App from './App.vue';
import LandingPage from './pages/LandingPage.vue';
import SearchPage from './pages/SearchPage.vue';
import MenuPage from './pages/MenuPage.vue';

require('./assets/main.scss');

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [{
    path: '/',
    component: LandingPage,
  },
  {
    path: '/search',
    component: SearchPage,
  },
  {
    path: '/menu',
    component: MenuPage,
  },
  ],
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
