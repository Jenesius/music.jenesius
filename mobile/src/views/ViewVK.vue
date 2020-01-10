<template>
    <div id = "view-vk">
        <app-vk-header/>

        <app-vk-container-music/>

        <app-vk-short-player/>

        <app-vk-container-player/>
    </div>
</template>

<script>
    import AppVkShortPlayer from "../components/vk/AppVkShortPlayer";
    import AppVkHeader from "../components/vk/AppVkHeader";
    import AppVkContainerMusic from "../components/vk/AppVkContainerMusic";
    import Api from '../static/js/api';
    import Player from "../static/js/player";
    import {mapMutations} from 'vuex';
    import AppVkContainerPlayer from "../components/vk/player/AppVkContainerPlayer";


    export default {
        name: "ViewVK",
        data: function(){
            return {};
        },
        components: {AppVkContainerPlayer, AppVkContainerMusic, AppVkShortPlayer, AppVkHeader},
        methods:{
            ...mapMutations({
                setOnlineMusic: 'vk/setOnlineMusic',
                setPositionIndex: 'vk/setPositionIndex',
            }),
        },
        mounted() {
            Api.vk.getUserMusic().then(e => {
                this.setOnlineMusic(e);
                this.setPositionIndex(0);
                Player.setList(e);
                Player.setTrack(0);
            })
        }
    }
</script>

<style>
#view-vk{
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
    transition: var(--slow);
}
#view-vk>.container-music::-webkit-scrollbar { width: 0; height: 0}
#view-vk>.container-music>div{
    height: 100%;
    width: 100%;
    min-width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>