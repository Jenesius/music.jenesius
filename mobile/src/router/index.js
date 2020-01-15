import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewVK from "../views/ViewVK";
import AppVkContainerPlayer from "../components/vk/player/AppVkContainerPlayer";
import ViewMenu from "../views/ViewMenu";


Vue.use(VueRouter);

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
  {
    path: '/menu',
    components: {
      menuA: ViewMenu
    },

  },
  {
    path: '*',
    components: {
      menuA: ViewMenu
    },
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});



export default router
