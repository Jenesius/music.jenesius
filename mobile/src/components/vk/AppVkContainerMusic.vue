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


    // eslint-disable-next-line no-unused-vars
    let timer;
    // eslint-disable-next-line
    let tmp = 0;
    // eslint-disable-next-line no-unused-vars
    let scrollPrev = 0;

    export default {
        name: "AppVkContainerMusic",
        props:{
            isOnline:Boolean,
        },
        data: function(){
            return {
                list: [
                    {
                        info: {
                            title: "Самурай",
                            author: "Тенса",
                            duration: "3:01",
                            image: "https://sun9-19.userapi.com/c847122/v847122474/1f4ecb/e-Y6ze3OKSU.jpg",
                        },
                        isDownload: false,
                    },
                    {
                        info: {
                            title: "Табор уходит в небо",
                            author: "Каспийский Груз",
                            duration: "4:46",
                            image: "https://sun9-19.userapi.com/c847122/v847122474/1f4ecb/e-Y6ze3OKSU.jpg",
                        },
                        isDownload: false,
                    },
                    {
                        info: {
                            title: "Трамвайные пути",
                            author: "Guf",
                            duration: "3:39",
                            image: "https://sun9-19.userapi.com/c847122/v847122474/1f4ecb/e-Y6ze3OKSU.jpg",
                        },
                        isDownload: false,
                    },
                    {
                        info: {
                            title: "Can&#39;t Hold Us (feat. Ray Dalton)",
                            author: "Macklemore &amp; Ryan Lewis feat. Wanz",
                            duration: "3:41",
                            image: "https://sun9-19.userapi.com/c847122/v847122474/1f4ecb/e-Y6ze3OKSU.jpg",
                        },
                        isDownload: false,
                    },
                    {
                        info: {
                            title: "Трек1",
                            author: "Артист1",
                            duration: "3:41",
                            image: "https://sun9-19.userapi.com/c847122/v847122474/1f4ecb/e-Y6ze3OKSU.jpg",
                        },
                        isDownload: false,
                    },
                ],
            };
        },
        methods: {
            checkScroll: function(){
                if (this.$refs.containerMusicVk.scrollLeft > innerWidth/2){
                    /*OFFLINE*/
                    this.$emit('setActivity', false);

                }else{
                    /*ONLINE*/
                    this.$emit('setActivity', true);
                    this.$refs.containerMusicVk.scrollTo(0,0);
                }
            },
            reCheckScroll: function(){
                clearTimeout(timer);
            },
            checkPosition: function () {

                if (tmp === this.$refs.containerMusicVk.scrollLeft){
                    this.checkScroll();
                }else{
                    tmp = this.$refs.containerMusicVk.scrollLeft;
                    timer = setTimeout(this.checkPosition, 50);
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
    }
</script>

<style scoped>

</style>