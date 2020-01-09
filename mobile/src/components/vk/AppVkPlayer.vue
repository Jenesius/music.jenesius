<template>
    <div id = "vk-player"
         v-show="isPlayer"
        v-on:touchend = "checkPosition"
        v-on:touchstart = "reScrollPage"

        ref="containerPlayer"
    >
        <div class = "space"></div>
        <div class = "player">
            <div class = "header">
                <img src = "../../static/img/ico/arrow/arrowDown.svg">
            </div>
            <div class = "trackImage">
                <div></div>
            </div>
            <div class = "trackTimeLine">
                <app-vk-time-line/>
            </div>
            <div class = "trackInfo">
                <p class = "title">Там за кордоном</p>
                <p class = "artist">Честный</p>
            </div>
            <div class = "trackFunction">
                <div class = "navigation">
                    <div class = "prev">
                        <img src = "../../static/img/ico/audio/prev.svg">
                    </div>
                    <div class = "activate">
                        <img src = "../../static/img/ico/audio/play.svg">
                    </div>
                    <div class = "next">
                        <img src = "../../static/img/ico/audio/next.svg">
                    </div>
                </div>
                <div class = "activity-block">
                    <div class = "random short-active active">
                        <img src = "../../static/img/ico/arrow/random.svg">
                    </div>
                    <div class = "loop short-active">
                        <img src = "../../static/img/ico/arrow/loop.svg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import AppVkTimeLine from "./AppVkTimeLine";

    export default {
        name: "AppVkPlayer",
        components: {AppVkTimeLine},
        data:function(){
            return {
                timer:Number,
                timerFade:Number,
                scrollTopEnd:Number,

            };
        },
        computed:{
            ...mapState({
                isPlayer:function (state) {
                    return state.vk.position.isPlayer;
                }
            }),
        },
        methods:{
            ...mapMutations({
                setPositionPlayer: 'vk/setPositionPlayer',
            }),
            checkPosition: function () {
                if (this.scrollTopEnd === this.$refs.containerPlayer.scrollTop){
                    this.scrollPage();
                }else{
                    this.scrollTopEnd = this.$refs.containerPlayer.scrollTop;
                    this.timer = setTimeout(this.checkPosition, 70);
                }
            },
            scrollPage: function(){
                if (this.$refs.containerPlayer.scrollTop > innerHeight/2){
                    this.fadeIn();

                }else{
                    this.$refs.containerPlayer.scrollTo(0,0);
                    this.timerFade = setTimeout(this.fadeOut, 350);
                }
            },
            reScrollPage: function(){


                clearTimeout(this.timer);
                clearTimeout(this.timerFade);
            },
            fadeIn: function(){
                this.$refs.containerPlayer.scrollTo(0,innerHeight);
            },
            fadeOut: function(){
                this.setPositionPlayer(false);
            },
        },
        watch:{
            isPlayer: function (newValue) {
                if(newValue === true){
                    this.timerFade = setTimeout(this.fadeIn, 50);
                }
            },
        }
    }
</script>

<style scoped>
    #vk-player{

        height: 100%;
        width: 100%;

        overflow-y: scroll;

        left: 0;
        top: 0;

        position: absolute;

        z-index: 20;

        scroll-behavior: smooth;
        transition: 1s;


    }
    #vk-player::-webkit-scrollbar { width: 0; height: 0}
    #vk-player>div{
        height: 100%;
        max-width: 100%;

    }
    #vk-player>.space{
        opacity: 0.4;
        background-color: gray;
    }
    #vk-player>.player{
        background-color: var(--black2);

        display: flex;
        flex-direction: column;
    }
    #vk-player>.player>.header{
        padding: 10px 0;
        display: flex;
        justify-content: center;

        border-radius: 0 0 10px 10px;

        transition: 0.2s;
    }
    #vk-player>.player>.header:active{
        background-color: var(--black3);
    }
    #vk-player>.player>.header>img{
        height: 15px;

    }
    #vk-player>.player>.trackTimeLine{
        padding: 9px 15px;

    }
    #vk-player>.player>.trackImage{
        display: flex;
        justify-content: center;
        align-content: center;

        padding: 0 15px;

        flex-grow: 1;
    }
    #vk-player>.player>.trackImage>div{
        width: 100%;
        background-color: var(--black3);
        border-radius: 15px;
    }
    #vk-player>.player>.trackFunction{
        display: flex;
        flex-direction: column;

        align-items: center;

    }
    #vk-player>.player>.trackInfo{
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        padding: 20px 0;

    }
    #vk-player>.player>.trackInfo>.title{
        color:var(--white1);
        font-size: 21px;
        font-weight: 500;
    }
    #vk-player>.player>.trackInfo>.artist{
        color:var(--gray1);
        font-size: 16px;
    }
    #vk-player>.player>.trackInfo>p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }
    #vk-player>.player>.trackFunction>.navigation{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        max-width: 260px;
        padding: 5px 0 10px 0;
    }
    #vk-player>.player>.trackFunction>.navigation>div{
        height: 65px;
        width: 65px;

        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: 0.4s;
    }
    #vk-player>.player>.trackFunction>.navigation>div:active{
        background-color: var(--black3);
    }

    #vk-player>.player>.trackFunction>.navigation>.prev:active>img{
        transform: translateX(-3px);
    }
    #vk-player>.player>.trackFunction>.navigation>.next:active>img{
        transform: translateX(3px);
    }
    #vk-player>.player>.trackFunction>.navigation>.activate:active>img{
        height: 37px !important;
    }
    #vk-player>.player>.trackFunction>.navigation img{
        height: 40px;

        transition: 0.4s;
    }
    #vk-player>.player>.trackFunction>.activity-block{
        padding: 10px;
        width: 100%;

        display: flex;
        justify-content: space-between;
    }

    #vk-player>.player .activity-block>.short-active{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 35px;
        width: 35px;
        border-radius: 50%;

        transition: 0.5s;
    }
    #vk-player>.player .activity-block>.short-active>img{
        height: 29px;
    }

    #vk-player>.player .activity-block>.active{
        background-color: var(--black4);
    }
</style>