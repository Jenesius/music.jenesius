<template>
    <transition
        @leave = "this.fadeOut"
            >
    <div id = "vk-container-player" ref="containerPlayer"

         @touchend = "checkPosition"
         @touchstart = "reScrollPage"
         @scroll="checkScroll"

    >
        <div class = "space"  id = "space-vk-container-player"></div>

        <app-vk-player @fadeOut="fadeOut"/>
    </div>
    </transition>
</template>

<script>
    import AppVkPlayer from "./../components/player/AppVkPlayer";

    export default {
        name: "AppVkContainerPlayer",
        components: {AppVkPlayer},
        data:function(){
            return {
                timer:Number,
                scrollTopEnd:Number,
            };
        },
        methods:{
            checkPosition: function () {

                if (this.$refs.containerPlayer === undefined) return;

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
                this.$refs.containerPlayer.scrollTo(0,0);
            },
            checkScroll: function(){
                let container =document.getElementById('vk-container-player');
                let obj =document.getElementById('space-vk-container-player');


                let tmp = Math.round(container.scrollTop);
                obj.style.opacity = tmp/innerHeight;


                if (tmp === 0 && window.location.hash === "#player"){
                    this.$backRoute();
                }

            },
        },
        mounted() {
            this.fadeIn();
        },
    }
</script>

<style scoped>
    #vk-container-player{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 20;

        height: 100%;
        width: 100%;

        overflow-y: scroll;
        scroll-behavior: smooth;
        transition: var(--ex-slow);
    }
    #vk-container-player>.space{
        opacity: 0;
    }
    #vk-container-player::-webkit-scrollbar{
        width: 0;
        height: 0;
    }
    #vk-container-player>div{
        height: 100%;
        max-width: 100%;

        background-color: var(--black2);
    }
</style>