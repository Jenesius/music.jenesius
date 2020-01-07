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
    import Player from "../../static/js/player";

    import { mapState, mapMutations } from "vuex";

    // eslint-disable-next-line no-unused-vars
    let timer;
    // eslint-disable-next-line
    let tmp = 0;

    // eslint-disable-next-line no-unused-vars
    let list = [
        {
            info: {
                title: "Самурай",
                artist: "Тенса",
                duration: "3:01",
                urlImage: "https://sun9-19.userapi.com/c847122/v847122474/1f4ecb/e-Y6ze3OKSU.jpg",
                urlTrack: "https://i12.kissvk.com/api/song/download/get/10/Dakh%20Daughters-%D0%A3%D0%BC%D1%80%D0%B8-kissvk.com.mp3?origin=kissvk.com&url=sid%3A%2F%2F115080501_456239434_8afe815e2a263f4b2a_bc1ff32f2b119738fb&artist=Dakh%20Daughters&title=%D0%A3%D0%BC%D1%80%D0%B8&index=0&future_urls=sid%3A%2F%2F115080501_456239433_f79440e0a1aab53149_38c81f552cb30c886b%2Csid%3A%2F%2F115080501_456239432_6b41b3279edc436d0a_ddf3a1e427a863d3c8%2Csid%3A%2F%2F115080501_456239431_88707cb0db84e785f2_e493b50624a4fdd734%2Csid%3A%2F%2F115080501_456239430_4d502f0f725d0594d7_a336a06d16d0206305%2Csid%3A%2F%2F115080501_456239429_687aadba4fa935a63d_b321bf2914555e9df6%2Csid%3A%2F%2F115080501_456239428_057676ab7de840f1ac_66bc8aebb5d01caf8a%2Csid%3A%2F%2F115080501_456239427_8f76324d6f3ff59fe3_e98e648b84f5071c93%2Csid%3A%2F%2F115080501_456239426_157ec63abccfa8cdf4_ffdd913789908f1d44%2Csid%3A%2F%2F115080501_456239425_952f09c687467629d7_84085a72e758fa1ef8",
            },
            isDownload: false,
            index:0,
        },
        {
            info: {
                title: "На самурай",
                artist: "Каспийский груз",
                duration: "4:22",
                urlImage: "https://sun9-58.userapi.com/c851436/v851436980/1adc1f/btaIXDUqUBk.jpg",
                urlTrack: "https://i12.kissvk.com/api/song/download/get/10/%D0%9A%D0%B0%D1%81%D0%BF%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%20%D0%93%D1%80%D1%83%D0%B7-%D0%9D%D0%B0%20%D0%BF%D0%BE%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-kissvk.com.mp3?origin=kissvk.com&url=sid%3A%2F%2F115080501_456239433_f79440e0a1aab53149_38c81f552cb30c886b&artist=%D0%9A%D0%B0%D1%81%D0%BF%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%20%D0%93%D1%80%D1%83%D0%B7&title=%D0%9D%D0%B0%20%D0%BF%D0%BE%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5&index=1&future_urls=sid%3A%2F%2F115080501_456239432_6b41b3279edc436d0a_ddf3a1e427a863d3c8%2Csid%3A%2F%2F115080501_456239431_88707cb0db84e785f2_e493b50624a4fdd734%2Csid%3A%2F%2F115080501_456239430_4d502f0f725d0594d7_a336a06d16d0206305%2Csid%3A%2F%2F115080501_456239429_687aadba4fa935a63d_b321bf2914555e9df6%2Csid%3A%2F%2F115080501_456239428_057676ab7de840f1ac_66bc8aebb5d01caf8a%2Csid%3A%2F%2F115080501_456239427_8f76324d6f3ff59fe3_e98e648b84f5071c93%2Csid%3A%2F%2F115080501_456239426_157ec63abccfa8cdf4_ffdd913789908f1d44%2Csid%3A%2F%2F115080501_456239425_952f09c687467629d7_84085a72e758fa1ef8%2Csid%3A%2F%2F115080501_456239424_017d960a7cdb35c90d_34c905e1de19c42b46",
            },
            isDownload: false,
            index:1,
        },
        {
            info: {
                title: "Голова, чтобы думать",
                artist: "25/17",
                duration: "3:35",
                urlImage: "https://sun9-39.userapi.com/c847217/v847217893/1e2b43/otz6xqjd5yU.jpg",
                urlTrack: "https://i12.kissvk.com/api/song/download/get/10/25-17-%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%B0-%20%D1%87%D1%82%D0%BE%D0%B1%D1%8B%20%D0%B4%D1%83%D0%BC%D0%B0%D1%82%D1%8C-kissvk.com.mp3?origin=kissvk.com&url=sid%3A%2F%2F115080501_456239432_6b41b3279edc436d0a_ddf3a1e427a863d3c8&artist=25%2F17&title=%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%B0%2C%20%D1%87%D1%82%D0%BE%D0%B1%D1%8B%20%D0%B4%D1%83%D0%BC%D0%B0%D1%82%D1%8C&index=2&future_urls=sid%3A%2F%2F115080501_456239431_88707cb0db84e785f2_e493b50624a4fdd734%2Csid%3A%2F%2F115080501_456239430_4d502f0f725d0594d7_a336a06d16d0206305%2Csid%3A%2F%2F115080501_456239429_687aadba4fa935a63d_b321bf2914555e9df6%2Csid%3A%2F%2F115080501_456239428_057676ab7de840f1ac_66bc8aebb5d01caf8a%2Csid%3A%2F%2F115080501_456239427_8f76324d6f3ff59fe3_e98e648b84f5071c93%2Csid%3A%2F%2F115080501_456239426_157ec63abccfa8cdf4_ffdd913789908f1d44%2Csid%3A%2F%2F115080501_456239425_952f09c687467629d7_84085a72e758fa1ef8%2Csid%3A%2F%2F115080501_456239424_017d960a7cdb35c90d_34c905e1de19c42b46%2Csid%3A%2F%2F115080501_456239423_edda70826e3e4902af_cefe06ab76096215b8",
            },
            isDownload: false,
            index:2,
        },
    ];

    export default {
        name: "AppVkContainerMusic",
        computed: {
            ...mapState({
                isOnline: function (state) {
                    return state.vk.position.isOnline;
                }
            }),
        },
        data: function(){
            return {
                list:[],
            };
        },
        methods: {
            ...mapMutations(['setPositionOnline']),
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
        mounted() {
            this.list = list;
            Player.setList(list);
        }
    }
</script>

<style scoped>

</style>