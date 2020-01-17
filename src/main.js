import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
//import router from './router'
import JVueRouter from 'j-vue-router'
import store from './store'
import ViewVK from "./views/ViewVK";
import ViewMenu from "./views/ViewMenu";









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
    isSubView: true,
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
