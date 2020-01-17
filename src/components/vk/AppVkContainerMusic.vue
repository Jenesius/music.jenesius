<template>
    <div id = "vk-container-music"
         v-on:touchend.passive = "checkPosition"
         v-on:touchstart.passive = "reCheckScroll"
         ref = "containerMusicVk"
    >
        <div class = "vk-online"
             ref = vkOnline
             v-on:scroll = "scrollOnlineBlock"
        >
            <app-vk-track-list-elem
                    v-for="(elem, index) in list" :key="index" v-bind="elem"
            />
        </div>
        <div class = "vk-offline"
             ref = vkOffline
        >
        </div>
    </div>
</template>

<script>
    import AppVkTrackListElem from "./AppVkTrackListElem";
    import { mapState, mapGetters, mapMutations } from "vuex";
    
    export default {
        name: "AppVkContainerMusic",
        computed: {
            ...mapState({
                isOnline: function (state) {
                    return state.vk.position.isOnline;
                },
            }),
            ...mapGetters({
                list: 'vk/getOnline',
            })
        },
        data: function(){
            return {
                timer:Number,
                scrollLeftEnd:0,
            };
        },
        methods: {
            ...mapMutations({
                setPositionOnline: 'vk/setPositionOnline',
            }),
            checkScroll: function(){
                if (this.$refs.containerMusicVk.scrollLeft > innerWidth/2){
                    this.setPositionOnline(false);
                    this.$refs.containerMusicVk.scrollTo(innerWidth,0);

                }else{
                    this.setPositionOnline(true);
                    this.$refs.containerMusicVk.scrollTo(0,0);
                }
            },
            reCheckScroll: function(){
                clearTimeout(this.timer);
            },
            checkPosition: function () {
                if (this.scrollLeftEnd === this.$refs.containerMusicVk.scrollLeft){
                    this.checkScroll();
                }else{
                    this.scrollLeftEnd = this.$refs.containerMusicVk.scrollLeft;
                    this.timer = setTimeout(this.checkPosition, 70);
                }
            },
            scrollOnlineBlock: function(){

                if ((this.$refs.vkOnline.scrollTop + this.$refs.vkOnline.clientHeight +0.7) > this.$refs.vkOnline.scrollHeight ){
                    this.$emit('scrollDown');
                }
            }
        },
        watch: {
            //Связываем toggle
            isOnline: function(newValue){
                if(newValue){
                    this.$refs.containerMusicVk.scrollTo(0,0);
                }else{
                    this.$refs.containerMusicVk.scrollTo(innerWidth,0);
                }
            }
        },
        components: {AppVkTrackListElem},
    }
</script>

<style>
    #vk-container-music{
        display: flex;

        height: 100%;
        min-width: 100%;

        background-color: var(--black2);

        overflow-x: scroll;
        scroll-behavior: smooth;

        transition: var(--slow);
    }
    #vk-container-music::-webkit-scrollbar{
        width: 0;
        height: 0;
    }
    #vk-container-music>div{
        height: 100%;
        width: 100%;
        min-width: 100%;

        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>