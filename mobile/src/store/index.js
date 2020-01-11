import Vue from 'vue'
import Vuex from 'vuex'
import vk from './modules/vk.js';
import test from './modules/test.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
  },
  modules: {
    vk,
    test,
  }
})
