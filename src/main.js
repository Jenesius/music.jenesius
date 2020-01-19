import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

import JVueRouter from 'j-vue-router';
import store from './store'

import ViewVK from "./views/main/ViewVK";
import ViewMenu from "./views/ViewMenu";
import ViewPlayer from "./views/ViewPlayer";









const routes = [
  {
    path: '',
    components:{},
  },
  {
    path: '/vk',
    components: {
      'main': ViewVK
    }
  },
  {
    path: '#menu',
    components: {
      'menu': ViewMenu
    },
  },
  {
    path: '#player',
    components: {
      'player': ViewPlayer
    },
  }
];




Vue.use(JVueRouter, {
  basic:{
    removeHash: true,
  },
  routes,
  // eslint-disable-next-line no-console
  // hook: (to, from) => console.log(to, from)
});





Vue.config.productionTip = false;

new Vue({
  routes,
  store,
  render: h => h(App)
}).$mount('#app')
