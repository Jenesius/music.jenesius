<template>
    <div class = "track-vk-elem">
        <div class = "image">
            <img alt = "image of track"
                :src = "info.image"
            >
        </div>
        <div class = "info">
            <p class = "title">{{ info.title }}</p>
            <p class = "author">{{ info.author }}</p>
        </div>
        <div class = "download">
            <!--<img src = "#" alt = "track is Donwload">-->
        </div>
        <div class = "time">
            <p>{{ info.duration }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppVkTrackListElem",
        props: {

                info: {
                    title: "",
                    author: "",
                    duration: "",
                    image: "",
                },
                isDownload: Boolean,

        },

    }
</script>

<style scoped>
.track-vk-elem{
    height: 60px;
    width: 100%;

    display: flex;

    transition: 0.2s;
}
.track-vk-elem:active{
    background-color: var(--black4);
}
.track-vk-elem>.image{
    display: flex;
    align-items: center;

    padding: 0 10px;

}
.track-vk-elem>.image>img{
    height: 46px;
    width: 46px;

    border-radius: 6px;

}
.track-vk-elem>.info{
    display: flex;
    flex-grow: 1;

    justify-content: center;

    flex-direction: column;
}
.track-vk-elem>.info>.title{
    color: var(--white1);
    font-size: 15px;
}
.track-vk-elem>.info>.author{
    color: var(--gray1);
    font-size: 12px;
}
.track-vk-elem>.time{
    padding: 0 10px;
    display: flex;
    align-items: center;

    color:var(--gray1);
    font-size: 14px;
}
</style>