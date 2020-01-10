import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewVK from "../views/ViewVK";

Vue.use(VueRouter)

const routes = [
  {
    path: '/vk',
    name: 'vk',
    component: ViewVK,
    children: [
      {
        path:'player',
        name: 'vk/player',

      }
    ],
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


export default router
