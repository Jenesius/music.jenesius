<template>
     <div class = "player">
            <div class = "player-header" @click = "close">
                <img src = "../../static/img/ico/arrow/arrowDown.svg" alt = "Download track">
            </div>
            <div class = "player-track-image">
                <div></div>
            </div>
            <div class = "player-time-line">
                <app-player-time-line :duration-track="track.info.duration"/>
            </div>
            <div class = "player-track-info">
                <p class = "player-track-title">{{ track.info.title }}</p>
                <p class = "player-track-artist">{{ track.info.artist }}</p>
            </div>

            <app-player-track-function :isDownload = "track.isDownload"/>
        </div>
</template>

<script>
    import {mapState} from 'vuex';

    import Player from "../../static/js/player";

    import AppPlayerTimeLine from "./AppPlayerTimeLine";
    import AppPlayerTrackFunction from "./AppPlayerTrackFunction";

    export default {
        name: "AppVkPlayer",
        components: {AppPlayerTrackFunction, AppPlayerTimeLine},
        computed:{
            ...mapState({
                track: function(state) {
                    return Player.getTrack(state.player.position);
                },
            }),
        },
        methods:{
            close: function () {
                this.$backRoute("#player");
            }
        }
    }
</script>

<style >
    .player{
        display: flex;
        flex-direction: column;
    }
    .player-header{
        display: flex;
        justify-content: center;

        border-radius: 0 0 10px 10px;
        padding: 10px 0;

        transition: var(--medium);
    }
    .player-header:active{
        background-color: var(--black3);
    }
    .player-header>img{
        height: 15px;
    }
    .player-track-image{
        display: flex;
        justify-content: center;
        align-content: center;
        flex-grow: 1;

        padding: 0 15px;
    }
    .player-track-image>div{
        width: 100%;

        border-radius: 15px;

        background-color: var(--black3);
    }

    .player-time-line{
        padding: 9px 15px;
    }

    .player-track-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 20px 0;
    }
    .player-track-title{
        color:var(--white1);
        font-size: 21px;
        font-weight: 500;
    }
    .player-track-artist{
        color:var(--gray1);
        font-size: 16px;
    }
    .player-track-artist>p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>