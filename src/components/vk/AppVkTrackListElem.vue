<template>
    <div class = "track-vk-elem" :pos="index"
        @click = "setTrack"
    >
        <div class = "image">
            <img alt = "image of track"
                :src = "info.urlImage"
            >
        </div>
        <div class = "info">
            <p class = "title">{{ info.title }}</p>
            <p class = "author">{{ info.artist }}</p>
        </div>
        <div class = "download">
            <!--<img src = "#" alt = "track is Donwload">-->
        </div>
        <div class = "time">
            <p>{{ customDuration }}</p>
        </div>
    </div>
</template>

<script>
    import Player from '../../static/js/player';
    import Time from '../../static/js/default/timeModify';

    export default {
        name: "AppVkTrackListElem",
        props: {
            info: {
                title: "",
                artist: "",
                duration: "",
                urlImage: "",
                urlTrack: "",
            },
            isDownload: Boolean,
            index:Number,
        },
        computed: {
            customDuration:function(){
                return Time(this.info.duration).modifyDuration();
            }
        },
        methods:{
            setTrack: function () {
                Player.setTrack(this.index);
            }
        }
    }
</script>

<style scoped>
.track-vk-elem{
    height: 60px;
    width: 100%;

    display: flex;

    transition: background-color 0.1s;
}
.track-vk-elem:active{
    background-color: var(--black4);
}
.track-vk-elem>.image{
    display: flex;
    align-items: center;

    width: 66px;

    padding: 0 10px;
}
.track-vk-elem>.image>img{
    height: 46px;
    width: 46px;

    border-radius: 6px;
}
.track-vk-elem>.info{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;

    width: calc(100% - 112px);

    padding-right: 15px;
}
.track-vk-elem>.info>p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    display: flex;
    align-items: center;
    justify-content: right;

    width: 46px;

    padding: 0 10px;

    color:var(--gray1);
    font-size: 12px;
}
</style>