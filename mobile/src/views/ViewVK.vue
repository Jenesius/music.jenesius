<template>
    <div id = "view-vk">
        <app-vk-header></app-vk-header>
        <div class = "container-music"
             v-on:touchend = "checkPosition"

             ref = "containerMusicVk"
        >
            <div class = "vk-online"
                v-on:scroll="fixHeader"
                ref = vkOnline
            >
                <p v-for = "index in 1000" :key="index">1241244</p>
            </div>
            <div class = "vk-offline"
                 v-on:scroll="fixHeader"
                 ref = vkOffline
            >
                <p v-for = "index in 100" :key="index">44444444</p>
            </div>
        </div>
        <app-vk-short-player></app-vk-short-player>
    </div>
</template>

<script>
    // eslint-disable-next-line
    import AppVkShortPlayer from "../components/vk/AppVkShortPlayer";
    // eslint-disable-next-line no-unused-vars
    let timer;
    // eslint-disable-next-line
    let tmp = 0;

    // eslint-disable-next-line no-unused-vars
    let scrollPrev = 0;

    import AppVkHeader from "../components/vk/AppVkHeader";
    export default {
        name: "ViewVK",
        components: {AppVkShortPlayer, AppVkHeader},
        methods:{
            checkScroll: function(){
                // eslint-disable-next-line no-console
                console.log(this.$refs.containerMusicVk.scrollLeft);
                if (this.$refs.containerMusicVk.scrollLeft > innerWidth/2){

                    this.$refs.containerMusicVk.scrollTo(innerWidth,0);
                }else{
                    this.$refs.containerMusicVk.scrollTo(0,0);
                }
            },
            checkPosition: function () {

                if (tmp === this.$refs.containerMusicVk.scrollLeft){
                    this.checkScroll();
                }else{
                    tmp = this.$refs.containerMusicVk.scrollLeft;
                    timer = setTimeout(this.checkPosition, 50);
                }
            },
            fixHeader: function(){

                let scrolled = Math.min(this.$refs.vkOffline.scrollTop, this.$refs.vkOnline.scrollTop);

                if ( scrolled > 100 && scrolled > scrollPrev ) {
                    // eslint-disable-next-line no-console
                    console.log('out');
                } else {
                    // eslint-disable-next-line no-console
                    console.log('in');
                }
                scrollPrev = scrolled;
            }
        }
    }
</script>

<style>
#view-vk{
    position: relative;
    overflow: hidden;

    height: 100%;
    display: flex;
    flex-direction: column;
}
#view-vk>.container-music{
    background-color: var(--black2);
    min-width: 100%;
    display: flex;
    height: 100%;

    overflow-x: scroll;
    scroll-behavior: smooth;
    transition: 1s;


}
#view-vk>.container-music>div{
    height: 100%;
    width: 100%;
    min-width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}
    .vk-online{}
    .vk-offline{}
</style>