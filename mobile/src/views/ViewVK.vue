<template>
    <div id = "view-vk">
        <app-vk-header
            :isOnline="isOnline"
            @setActivity="setActivity"
        ></app-vk-header>

        <app-vk-container-music
             :isOnline="isOnline"
             @setActivity="setActivity"
             @setTrack = "setTrack"
        ></app-vk-container-music>

        <app-vk-short-player
            :position = "position"
        ></app-vk-short-player>
    </div>
</template>

<script>
    import AppVkShortPlayer from "../components/vk/AppVkShortPlayer";
    import AppVkHeader from "../components/vk/AppVkHeader";
    import AppVkContainerMusic from "../components/vk/AppVkContainerMusic";
    export default {
        name: "ViewVK",
        data: function(){
            return {
                isOnline:true,
                position:-1,
            };
        },
        components: {AppVkContainerMusic, AppVkShortPlayer, AppVkHeader},
        methods:{
            setActivity: function(tmp){
                this.isOnline = tmp;
            },
            setTrack: function (index) {
                // eslint-disable-next-line no-console
                console.log(this.position);
                this.position = index;
            }

        },
        mounted() {
            this.position = 0;
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