<template>
    <div class = "container-music"
         v-on:touchend = "checkPosition"
         v-on:touchstart = "reCheckScroll"
         ref = "containerMusicVk"
    >
        <div class = "vk-online"
             ref = vkOnline
        >
            <app-vk-track-list-elem
                    v-for = "(elem, index) in list" :key="index" v-bind="elem"
            ></app-vk-track-list-elem>
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
                scrollLeftEnd:Number,
                scrollTopEnd:Number,
            };
        },
        methods: {
            ...mapMutations({
                setPositionOnline: 'vk/setPositionOnline',
            }),
            checkScroll: function(){
                if (this.$refs.containerMusicVk.scrollLeft > innerWidth/2){
                    /*OFFLINE*/
                    this.setPositionOnline(false);
                    this.$refs.containerMusicVk.scrollTo(innerWidth,0);

                }else{
                    /*ONLINE*/
                    this.setPositionOnline(true);
                    this.$refs.containerMusicVk.scrollTo(0,0);
                }
            },
            reCheckScroll: function(){
                clearTimeout(this.timer);
                this.scrollTopEnd = this.$refs.containerMusicVk.scrollTop;
            },
            checkPosition: function () {
                if (this.scrollLeftEnd === this.$refs.containerMusicVk.scrollLeft){
                    this.checkScroll();
                }else{
                    this.scrollLeftEnd = this.$refs.containerMusicVk.scrollLeft;
                    this.timer = setTimeout(this.checkPosition, 70);
                }
            },
        },
        watch: {
            isOnline: function(newValue){
                if(newValue){
                    this.$refs.containerMusicVk.scrollTo(0,0);
                }else{
                    this.$refs.containerMusicVk.scrollTo(innerWidth,0);
                }
            }
        },
        components: {AppVkTrackListElem},
        mounted() {
        }
    }
</script>

<style scoped>

</style>