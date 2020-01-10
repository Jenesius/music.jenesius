<template>
     <div id = "vk-player">
            <div class = "header"
                 v-on:click = "$emit('fadeOut')"
            >
                <img src = "../../../static/img/ico/arrow/arrowDown.svg">
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
            <div class = "trackFunction">
                <div class = "navigation">
                    <div class = "prev"
                        v-on:click = "prevTrack"
                    >
                        <img src = "../../../static/img/ico/audio/prev.svg">
                    </div>
                    <div class = "activate"
                        v-on:click = "clickActivate"
                    >
                        <img
                            :src = "getIsActive.src"
                        >
                    </div>
                    <div class = "next"
                        v-on:click = "nextTrack"
                    >
                        <img src = "../../../static/img/ico/audio/next.svg">
                    </div>
                </div>
                <div class = "activity-block">
                    <div class = "random short-active"
                        v-on:click = "randomTrack"

                        >
                        <img src = "../../../static/img/ico/arrow/random.svg">
                    </div>
                    <div class = "loop short-active"
                        v-on:click = "loopTrack"
                        :class = "{active: loop}"
                    >
                        <img src = "../../../static/img/ico/arrow/loop.svg">
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import AppVkTimeLine from "../AppVkTimeLine";
    import Player from "../../../static/js/player";
    import {mapState, mapMutations, mapGetters} from 'vuex';

    export default {
        name: "AppVkPlayer",
        components: {AppVkTimeLine},
        data:function(){
            return {
                random:false,
                loop:false,
            };
        },
        computed:{
            ...mapState({
                track: function(state) {
                    return Player.getTrack(state.vk.position.index);
                },
            }),
            ...mapGetters({
                getIsActive: 'vk/getIsActive',
            }),
        },
        methods:{
            ...mapMutations({
                activatePlayer:'vk/activatePlayer',
                updatePositionIndex: 'vk/updatePositionIndex',
            }),
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

                // eslint-disable-next-line no-console
                console.log(this.loop);
            },
        },

    }
</script>

<style scoped>
    #vk-player{
        display: flex;
        flex-direction: column;
    }
    #vk-player>.header{
        padding: 10px 0;
        display: flex;
        justify-content: center;

        border-radius: 0 0 10px 10px;

        transition: 0.2s;
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

        padding: 0 15px;

        flex-grow: 1;
    }
    #vk-player>.trackImage>div{
        width: 100%;
        background-color: var(--black3);
        border-radius: 15px;
    }

    #vk-player>.trackFunction{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #vk-player>.trackFunction>.activity-block{
        padding: 10px;
        width: 100%;

        display: flex;
        justify-content: space-between;
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

    #vk-player>.trackFunction>.navigation{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        max-width: 260px;
        padding: 5px 0 10px 0;
    }
    #vk-player>.trackFunction>.navigation>div{
        height: 65px;
        width: 65px;

        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: var(--medium);
    }
    #vk-player>.trackFunction>.navigation>div:active{
        background-color: var(--black3);
    }
    #vk-player>.trackFunction>.navigation>.prev:active>img{
        transform: translateX(-3px);
    }
    #vk-player>.trackFunction>.navigation>.next:active>img{
        transform: translateX(3px);
    }
    #vk-player>.trackFunction>.navigation>.activate:active>img{
        height: 37px !important;
    }
    #vk-player>.trackFunction>.navigation img{
        height: 40px;

        transition: var(--medium);
    }

    #vk-player .activity-block>.short-active{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 35px;
        width: 35px;
        border-radius: 50%;

        transition: var(--slow);
    }
    #vk-player .activity-block>.short-active>img{
        height: 29px;
    }
    #vk-player .activity-block>.active{
        background-color: var(--black4);
    }
</style>