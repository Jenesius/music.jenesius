<template>
    <div id = "view-vk">
        <app-vk-header/>

        <app-vk-container-music
            v-on:scrollDown = "addMusicOnline"
        />

        <app-vk-short-player/>



        <router-view></router-view>
    </div>
</template>

<script>
    import AppVkShortPlayer from "../components/vk/AppVkShortPlayer";
    import AppVkHeader from "../components/vk/AppVkHeader";
    import AppVkContainerMusic from "../components/vk/AppVkContainerMusic";
    import Api from '../static/js/api';
    import Player from "../static/js/player";
    import {mapState, mapMutations} from 'vuex';



    export default {
        name: "ViewVK",
        data: function(){
            return {};
        },
        components: {AppVkContainerMusic, AppVkShortPlayer, AppVkHeader},
        methods:{
            ...mapMutations({
                setOnlineMusic: 'vk/setOnlineMusic',
                setPositionIndex: 'vk/setPositionIndex',
                setPagesCount: 'vk/setPagesCount',
                setCurrentPages: 'vk/setCurrentPages',
            }),
            addMusicOnline: function(){

                if (this.pages.count -1 > this.pages.current){
                    Api.vk.getUserMusic(this.pages.current+1, this.countTrack)
                        .then(e => {

                            this.setCurrentPages(this.pages.current + 1);

                            this.setOnlineMusic(e.songs);

                            Player.addList(e.songs);
                        })
                }
            }
        },
        computed:{
            ...mapState({
                pages: function(state){
                    return state.vk.global.pages;
                },
                countTrack: function(state){
                    return state.vk.music.online.length;
                }
            }),
        },
        mounted() {
            Api.vk.getUserMusic().then(e => {
                this.setOnlineMusic(e.songs);
                this.setPositionIndex(0);
                Player.setList(e.songs, );
                Player.setTrack(0);

                this.setPagesCount(e.pagesCount);
                this.setCurrentPages(0);

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
</style>