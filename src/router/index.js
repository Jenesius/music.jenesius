import Vue from 'vue';
import JVueRouter from "j-vue-router";
import ViewVK from "../views/main/ViewVK";
import ViewMenu from "../views/ViewMenu";
import ViewPlayer from "../views/ViewPlayer";

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


export default routes;