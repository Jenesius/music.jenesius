<template>
    <div id = "view-vk">
        <template v-if = "this.userVkID">

            <app-vk-header/>

            <app-vk-container-music
                    v-on:scrollDown = "addMusicOnline"
            />

            <app-vk-short-player/>

            <router-view></router-view>
        </template>

        <app-vk-auth v-else
            v-on:hide = "isA = !isA"
            v-on:tryAuth = "tryAuth"
        />



    </div>
</template>

<script>
    import AppVkShortPlayer from "../components/vk/AppVkShortPlayer";
    import AppVkHeader from "../components/vk/AppVkHeader";
    import AppVkContainerMusic from "../components/vk/AppVkContainerMusic";
    import Api from '../static/js/api';
    import Player from "../static/js/player";
    import {mapState, mapMutations} from 'vuex';
    import AppVkAuth from "../components/vk/AppVkAuth";
    import localStorage from '../static/js/localStorage';


    export default {
        name: "ViewVK",
        data: function(){
            return {

            };
        },
        components: {AppVkAuth, AppVkContainerMusic, AppVkShortPlayer, AppVkHeader},
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
            },
            tryAuth: function(userID){
                Api.vk.setUserID(userID);
                Api.vk.getUserMusic().then(e => {


                    localStorage.userVkID = userID;

                    this.setOnlineMusic(e.songs);
                    this.setPositionIndex(0);
                    Player.setList(e.songs);
                    Player.setTrack(0);

                    this.setPagesCount(e.pagesCount);
                    this.setCurrentPages(0);

                })
                    // eslint-disable-next-line no-unused-vars
                .catch(e => {
                    // eslint-disable-next-line no-console
                    console.log('++++++++++++');
                })
            }
        },
        computed:{
            ...mapState({
                pages: function(state){
                    return state.vk.global.pages;
                },
                countTrack: function(state){
                    return state.vk.music.online.length;
                },
                userVkID: function(state){
                    return state.vk.userID;
                }
            }),
        },
        mounted() {




            if (this.userVkID){
                Api.vk.setUserID(this.userVkID);
            }
            // eslint-disable-next-line no-console
            console.log('userID', this.userVkID);

            // eslint-disable-next-line no-empty
            if (this.pages.count !== -1){

            }else{
                Api.vk.getUserMusic().then(e => {
                    this.setOnlineMusic(e.songs);
                    this.setPositionIndex(0);
                    Player.setList(e.songs);
                    Player.setTrack(0);

                    this.setPagesCount(e.pagesCount);
                    this.setCurrentPages(0);

                })
            }
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