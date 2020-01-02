<template>
    <div id = "view-vk">
        <app-vk-header></app-vk-header>
        <div class = "container-music"
             v-on:touchend = "checkPosition"

             ref = "containerMusicVk"
        >
            <div class = "vk-online"></div>
            <div class = "vk-offline"></div>
        </div>
    </div>
</template>

<script>
    // eslint-disable-next-line
    let timer;
    // eslint-disable-next-line
    let tmp = 0;
    import AppVkHeader from "../components/vk/AppVkHeader";
    export default {
        name: "ViewVK",
        components: {AppVkHeader},
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
    background-color: #fff;
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
}
    .vk-online{background-color: red;}
    .vk-offline{background-color: brown;}
</style>