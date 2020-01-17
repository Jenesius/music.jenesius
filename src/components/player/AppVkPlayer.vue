<template>
     <div id = "vk-player">
            <div class = "header"
                 @click = "this.$backRoute"
            >
                <img src = "../../static/img/ico/arrow/arrowDown.svg">
            </div>
            <div class = "trackImage">
                <div></div>
            </div>
            <div class = "trackTimeLine">
                <app-vk-time-line
                    :duration-track="track.info.duration"
                />
            </div>
            <div class = "trackInfo">
                <p class = "title">{{ track.info.title }}</p>
                <p class = "artist">{{ track.info.artist }}</p>
            </div>

            <app-vk-track-function
                :isDownload = "track.isDownload"
            />
        </div>
</template>

<script>
    import AppVkTimeLine from "./AppVkTimeLine";
    import Player from "../../static/js/player";
    import {mapState} from 'vuex';
    import AppVkTrackFunction from "./AppVkTrackFunction";

    export default {
        name: "AppVkPlayer",
        components: {AppVkTrackFunction, AppVkTimeLine},
        data:function(){
            return {};
        },
        computed:{
            ...mapState({
                track: function(state) {
                    return Player.getTrack(state.player.position);
                },
            }),
        },
    }
</script>

<style scoped>
    #vk-player{
        display: flex;
        flex-direction: column;
    }
    #vk-player>.header{
        display: flex;
        justify-content: center;

        border-radius: 0 0 10px 10px;
        padding: 10px 0;

        transition: var(--medium);
    }
    #vk-player>.header:active{
        background-color: var(--black3);
    }
    #vk-player>.header>img{
        height: 15px;
    }
    #vk-player>.trackTimeLine{
        padding: 9px 15px;
    }
    #vk-player>.trackImage{
        display: flex;
        justify-content: center;
        align-content: center;
        flex-grow: 1;

        padding: 0 15px;
    }
    #vk-player>.trackImage>div{
        width: 100%;

        border-radius: 15px;

        background-color: var(--black3);
    }
    #vk-player>.trackInfo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 20px 0;
    }
    #vk-player>.trackInfo>.title{
        color:var(--white1);
        font-size: 21px;
        font-weight: 500;
    }
    #vk-player>.trackInfo>.artist{
        color:var(--gray1);
        font-size: 16px;
    }
    #vk-player>.trackInfo>p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>