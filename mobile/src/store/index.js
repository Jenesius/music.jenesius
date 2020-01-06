import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vk:{
      idUser:Number,
      music:{
        online:{},
        offline:{},
      },
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
