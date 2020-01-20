<template>
    <div class = "player-function">
        <div class = "player-function-main">
            <div class = "sub-block hash"></div>
            <div class = "activation-block">
                <div class = "prev" @click = "prevTrack">
                    <img src = "../../static/img/ico/audio/prev.svg" alt = "Previous track">
                </div>
                <div class = "activate"  @click = "activateTrack">
                    <img :src = "srcIsActive" alt = "Activate">
                </div>
                <div class = "next" @click = "nextTrack">
                    <img src = "../../static/img/ico/audio/next.svg" alt = "Next track">
                </div>
            </div>
            <div class = "sub-block menu"></div>
        </div>
        <div class = "player-function-sub">
            <div class = "random sub-block" @click = "randomTrack">
                <img src = "../../static/img/ico/arrow/random.svg" alt = "Random mod">
            </div>
            <div class = "loop sub-block"
                 @click = "loopTrack"
                 :class = "{active: loop}"
            >
                <img src = "../../static/img/ico/arrow/loop.svg" alt = "Loop mod">
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    import Player from "../../static/js/player";

    export default {
        name: "AppVkTrackFunction",
        props:{
            isDownload:Boolean
        },
        data: function(){
            return {
                random:false,
                loop:false,
            }
        },
        computed:{
            ...mapGetters({
                srcIsActive: 'player/srcIsActive',
            }),
        },
        methods:{
            activateTrack: function(){
                Player.activate();
            },
            prevTrack: function(){
                Player.prev();
            },
            nextTrack: function(){
                Player.next();
            },
            randomTrack: function(){
                // eslint-disable-next-line no-console
                console.log('Random track is not available.');
            },
            loopTrack: function(){
                Player.loop();
                this.loop = Player.track.loop;
            },
        },
        mounted() {
            this.loop = Player.isLoop();
            this.random = Player.isRandom();
        }
    }
</script>

<style scoped>
    .player-function{
        display: flex;
        flex-direction: column;
    }
    .player-function-main{
        display: flex;
        justify-content: space-between;

        height: 75px;
    }
    .player-function-main>.sub-block{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 55px;
        height: 100%;
    }
    .player-function-main>.sub-block>img{
        height: 22px;
    }
    .player-function-main>.activation-block{
        display: flex;
        justify-content: space-between;
        flex-grow: 1;

        width: 100%;
        max-width: 220px;
    }
    .player-function-main>.activation-block>div{
        display: flex;
        justify-content: center;
        align-items: center;

        height: 65px;
        width: 65px;

        border-radius: 50%;

        transition: var(--medium);
    }
    .player-function-main>.activation-block>div:active{
        background-color: var(--black3);
    }
    .player-function-main>.activation-block>.prev:active>img{
        transform: translateX(-3px);
    }
    .player-function-main>.activation-block>.next:active>img{
        transform: translateX(3px);
    }
    .player-function-main>.activation-block>.activate:active>img{
        height: 37px !important;
    }
    .player-function-main>.activation-block img{
        height: 40px;

        transition: var(--medium);
    }
    .player-function-sub{
        display: flex;
        justify-content: space-between;

        padding: 10px;
    }
    .player-function-sub>.sub-block{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 35px;
        width: 35px;

        border-radius: 50%;

        transition: var(--slow);
    }
    .player-function-sub>.sub-block>img{
        height: 29px;
    }
    .player-function-sub>.active{
        background-color: var(--black4);
    }
</style>