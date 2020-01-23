import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';


import store from './store'
import routes from './router'

















Vue.config.productionTip = false;

new Vue({
  routes,
  store,
  render: h => h(App)
}).$mount('#app')
