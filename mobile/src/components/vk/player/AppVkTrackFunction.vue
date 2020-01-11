<template>
    <div id = "vk-player-function">
        <div class = "func-1">
            <div class = "hash sub-block">
                <img src = "#">
            </div>

            <div class = "main-function">
                <div class = "prev"
                     v-on:click = "prevTrack"
                >
                    <img src = "../../../static/img/ico/audio/prev.svg">
                </div>
                <div class = "activate"
                     v-on:click = "clickActivate"
                >
                    <img :src = "getIsActive.src">
                </div>
                <div class = "next"
                     v-on:click = "nextTrack"
                >
                    <img src = "../../../static/img/ico/audio/next.svg">
                </div>
            </div>

            <div class = "menu sub-block"></div>
        </div>

        <div class = "func-2">
            <div class = "random sub-block"
                 v-on:click = "randomTrack"
            >
                <img src = "../../../static/img/ico/arrow/random.svg">
            </div>
            <div class = "loop sub-block"
                 v-on:click = "loopTrack"
                 :class = "{active: loop}"
            >
                <img src = "../../../static/img/ico/arrow/loop.svg">
            </div>
        </div>
    </div>
</template>

<script>
    import Player from "../../../static/js/player";
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "AppVkTrackFunction",
        data: function(){
            return {
                random:false,
                loop:false,
            }
        },
        computed:{
            ...mapGetters({
                getIsActive: 'vk/getIsActive',
            }),
        },

        methods:{
            clickActivate: function(){
                this.activatePlayer();
                Player.activate();
            },
            prevTrack: function(){
                Player.prev();
                this.updatePositionIndex();
            },
            nextTrack: function(){
                Player.next();
                this.updatePositionIndex();
            },
            randomTrack: function(){},
            loopTrack: function(){
                Player.loop();
                this.loop = Player.track.loop;
            },

            ...mapMutations({
                activatePlayer:'vk/activatePlayer',
                updatePositionIndex: 'vk/updatePositionIndex',
            }),
        }
    }
</script>

<style scoped>
    #vk-player-function{
        display: flex;
        flex-direction: column;
    }
    #vk-player-function>.func-1{
        display: flex;
        justify-content: space-between;

        height: 75px;
    }
    #vk-player-function>.func-1>.sub-block{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 80px;
        height: 100%;
    }
    #vk-player-function>.func-1>.sub-block>img{
        height: 40px;
    }
    #vk-player-function>.func-1>.main-function{
        display: flex;
        justify-content: space-between;
        flex-grow: 1;

        width: 100%;
        max-width: 220px;
    }
    #vk-player-function>.func-1>.main-function>div{
        display: flex;
        justify-content: center;
        align-items: center;

        height: 65px;
        width: 65px;

        border-radius: 50%;

        transition: var(--medium);
    }
    #vk-player-function>.func-1>.main-function>div:active{
        background-color: var(--black3);
    }
    #vk-player-function>.func-1>.main-function>.prev:active>img{
        transform: translateX(-3px);
    }
    #vk-player-function>.func-1>.main-function>.next:active>img{
        transform: translateX(3px);
    }
    #vk-player-function>.func-1>.main-function>.activate:active>img{
        height: 37px !important;
    }
    #vk-player-function>.func-1>.main-function img{
        height: 40px;

        transition: var(--medium);
    }
    #vk-player-function>.func-2{
        display: flex;
        justify-content: space-between;

        padding: 7px 10px
    }
    #vk-player-function>.func-2>.sub-block{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 35px;
        width: 35px;

        border-radius: 50%;

        transition: var(--slow);
    }
    #vk-player-function>.func-2>.sub-block>img{
        height: 29px;
    }
    #vk-player-function>.func-2>.active{
        background-color: var(--black4);
    }
</style>