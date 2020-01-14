import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewVK from "../views/ViewVK";
import AppVkContainerPlayer from "../components/vk/player/AppVkContainerPlayer";




Vue.use(VueRouter)

const routes = [
  {
    path: '/vk',
    component: ViewVK,
    children: [
      {
        path:'player',
        component: AppVkContainerPlayer,
      }
    ]
  },


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});



export default router
