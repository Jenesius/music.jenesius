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
                <img src = "#">
            </div>
            <div class = "trackImage">
                <img src = "#">
            </div>
            <div class = "trackTimeLine"></div>
            <div class = "trackInfo">
                <p class = "title">Там за кордоном</p>
                <p class = "artist">Честный</p>
            </div>
            <div class = "trackFunction"></div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: "AppVkPlayer",
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
        width: 100%;

    }
    #vk-player>.space{
        opacity: 0.4;
        background-color: gray;
    }
    #vk-player>.player{
        background-color: var(--black2);
    }
</style>