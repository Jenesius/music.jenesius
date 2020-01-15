import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app.js';
import vk from './modules/vk.js';
import test from './modules/test.js';
import player from './modules/player.js';
import menu from './modules/menu.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
  },
  modules: {
    app,
    vk,
    test,
    player,
    menu,
  }
})
