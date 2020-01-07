<template>
    <div id = "view-vk">
        <app-vk-header

        ></app-vk-header>

        <app-vk-container-music

        ></app-vk-container-music>

        <app-vk-short-player
        ></app-vk-short-player>
    </div>
</template>

<script>
    import AppVkShortPlayer from "../components/vk/AppVkShortPlayer";
    import AppVkHeader from "../components/vk/AppVkHeader";
    import AppVkContainerMusic from "../components/vk/AppVkContainerMusic";
    import Api from '../static/js/api';

    export default {
        name: "ViewVK",
        data: function(){
            return {};
        },
        components: {AppVkContainerMusic, AppVkShortPlayer, AppVkHeader},
        methods:{
        },
        mounted() {
            Api.vk.getUserMusic().then(e => {
                // eslint-disable-next-line no-console
                console.log(e);
            })
        }
    }
</script>

<style>
#view-vk{
    position: relative;
    overflow: hidden;

    height: 100%;
    display: flex;
    flex-direction: column;
}
#view-vk>.container-music{
    background-color: var(--black2);
    min-width: 100%;
    display: flex;
    height: 100%;

    overflow-x: scroll;
    scroll-behavior: smooth;
    transition: 1s;


}
#view-vk>.container-music>div{
    height: 100%;
    width: 100%;
    min-width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}
    .vk-online{}
    .vk-offline{}
</style>