<template>
    <div id = "vk-container-player"
         v-show="isPlayer"
         v-on:touchend = "checkPosition"
         v-on:touchstart = "reScrollPage"
         v-on:scroll="checkScroll"

         ref="containerPlayer"
    >
        <div class = "space"
             :style="{opacity: opacitySpace}"
        ></div>
        <app-vk-player
            v-on:fadeOut="fadeOut"
        />
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import AppVkPlayer from "./AppVkPlayer";

    export default {
        name: "AppVkContainerPlayer",
        components: {AppVkPlayer},
        data:function(){
            return {
                timer:Number,
                scrollTopEnd:Number,

                isFading: false,
                opacitySpace:0.1,
            };
        },
        computed:{
            ...mapState({
                isPlayer:function (state) {
                    return state.vk.position.isPlayer;
                },
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
                    //Пока скрол не остановится
                    this.scrollTopEnd = this.$refs.containerPlayer.scrollTop;
                    this.timer = setTimeout(this.checkPosition, 70);
                }
            },
            scrollPage: function(){
                //Оцениваем, куда доскроливать
                (this.$refs.containerPlayer.scrollTop > innerHeight/2)?(this.fadeIn()):(this.fadeOut());
            },
            reScrollPage: function(){
                //Очищаем обработчики
                clearTimeout(this.timer);
            },
            fadeIn: function(){
                this.$refs.containerPlayer.scrollTo(0,innerHeight);
            },
            fadeOut: function(){
                this.isFading = true;
                this.$refs.containerPlayer.scrollTo(0,0);
            },
            checkScroll: function(){
                let tmp = this.$refs.containerPlayer.scrollTop;

                this.opacitySpace = tmp/innerHeight;

                if (this.isFading){
                    if(tmp === 0){
                        this.setPositionPlayer(false);
                    }
                    if(tmp === innerHeight){
                        this.setPositionPlayer(true);
                    }
                }
            },
        },
        watch:{
            isPlayer: function (newValue) {
                if(newValue){
                    setTimeout(this.fadeIn, 50);
                }else{
                    setTimeout(this.fadeOut, 50);
                }
            },
        }
    }
</script>

<style scoped>
    #vk-container-player{
        height: 100%;
        width: 100%;

        left: 0;
        top: 0;

        position: absolute;

        z-index: 20;

        overflow-y: scroll;
        scroll-behavior: smooth;
        transition: var(--slow);
    }
    #vk-container-player::-webkit-scrollbar { width: 0; height: 0}
    #vk-container-player>div{
        height: 100%;
        max-width: 100%;
        background-color: var(--black2);
    }
</style>