<template>
    <div id = "vk-player-function">
        <div class = "func-1">
            <div class = "hash sub-block">
                <img
                     :src = "srcIsDownload"
                     v-on:click="cashTrack"
                >
            </div>
            <div class = "main-function">
                <div class = "prev"
                     v-on:click = "prevTrack"
                >
                    <img src = "../../../static/img/ico/audio/prev.svg">
                </div>
                <div class = "activate"
                     v-on:click = "clickActivate"
                >
                    <img :src = "getIsActive.src">
                </div>
                <div class = "next"
                     v-on:click = "nextTrack"
                >
                    <img src = "../../../static/img/ico/audio/next.svg">
                </div>
            </div>

            <div class = "menu sub-block"></div>
        </div>

        <div class = "func-2">
            <div class = "random sub-block"
                 v-on:click = "randomTrack"
            >
                <img src = "../../../static/img/ico/arrow/random.svg">
            </div>
            <div class = "loop sub-block"
                 v-on:click = "loopTrack"
                 :class = "{active: loop}"
            >
                <img src = "../../../static/img/ico/arrow/loop.svg">
            </div>
        </div>
    </div>
</template>

<script>
    import Player from "../../../static/js/player";
    import {mapGetters, mapMutations} from "vuex";
    import Cache from '../../../static/js/cache';

    export default {
        name: "AppVkTrackFunction",
        props:{
            isDownload:Boolean
        },
        data: function(){
            return {
                random:false,
                loop:false,
            }
        },
        computed:{
            ...mapGetters({
                getIsActive: 'vk/getIsActive',
            }),
            srcIsDownload: function(){
                if (this.isDownload){
                    return 'img/ico/remove.svg';
                }else{
                    return 'img/ico/download.svg';
                }
            },
        },

        methods:{
            cashTrack: function(){
                // eslint-disable-next-line no-undef,no-empty
                if (this.isDownload){}
                // eslint-disable-next-line no-empty
                else{
                    // eslint-disable-next-line no-console
                    console.log('+');

/*
                    Cache.add(
                        {
                            name: 'vk-1',
                        },
                        {
                            url :"https://i12.kissvk.com/api/song/download/get/10/%D0%A7%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%9A%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D1%81-%D0%91%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D1%81-kissvk.com.mp3?origin=kissvk.com&url=sid%3A%2F%2F115080501_456239430_8c9a4891130b48c773_ece48378eeeafd6a07&artist=%D0%A7%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B9&title=%D0%9A%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D1%81-%D0%91%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D1%81&index=4&future_urls=sid%3A%2F%2F115080501_456239429_20bd1415b5adbdcdb5_ea128887e3e4e52891%2Csid%3A%2F%2F115080501_456239428_cbab3813d12c450201_a979625ea688d39c22%2Csid%3A%2F%2F115080501_456239427_5d16a875096c9c7748_7f046cabc33a068573%2Csid%3A%2F%2F115080501_456239426_2f1764a353471cdf8f_39b449fd15979ca0a0%2Csid%3A%2F%2F115080501_456239425_b53dec6f30b5efba65_e383270cf3d292ad48%2Csid%3A%2F%2F115080501_456239424_5ce58d030dad20869c_513e82a617fdb32c2b%2Csid%3A%2F%2F115080501_456239423_21d2daf492b99063f0_590b561abae68a243f%2Csid%3A%2F%2F115080501_456239422_8a9dd6c036e3b1c958_8e4f00ce4cd7e6f9c8%2Csid%3A%2F%2F115080501_456239421_1be768df9c88b8ed19_8ef682f98daf92d718",
                            title:'Умри1',
                            artist:'Dakh Daughters',
                            duration:150
                        });
*/

                    Cache.getMusicList({name: 'vk-1'});
                }
            },
            clickActivate: function(){
                this.activatePlayer();
                Player.activate();
            },
            prevTrack: function(){
                Player.prev();
                this.updatePositionIndex();
            },
            nextTrack: function(){
                Player.next();
                this.updatePositionIndex();
            },
            randomTrack: function(){},
            loopTrack: function(){
                Player.loop();
                this.loop = Player.track.loop;
            },

            ...mapMutations({
                activatePlayer:'vk/activatePlayer',
                updatePositionIndex: 'vk/updatePositionIndex',
            }),
        }
    }
</script>

<style scoped>
    #vk-player-function{
        display: flex;
        flex-direction: column;
    }
    #vk-player-function>.func-1{
        display: flex;
        justify-content: space-between;

        height: 75px;
    }
    #vk-player-function>.func-1>.sub-block{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 55px;
        height: 100%;
    }
    #vk-player-function>.func-1>.sub-block>img{
        height: 22px;
    }
    #vk-player-function>.func-1>.main-function{
        display: flex;
        justify-content: space-between;
        flex-grow: 1;

        width: 100%;
        max-width: 220px;
    }
    #vk-player-function>.func-1>.main-function>div{
        display: flex;
        justify-content: center;
        align-items: center;

        height: 65px;
        width: 65px;

        border-radius: 50%;

        transition: var(--medium);
    }
    #vk-player-function>.func-1>.main-function>div:active{
        background-color: var(--black3);
    }
    #vk-player-function>.func-1>.main-function>.prev:active>img{
        transform: translateX(-3px);
    }
    #vk-player-function>.func-1>.main-function>.next:active>img{
        transform: translateX(3px);
    }
    #vk-player-function>.func-1>.main-function>.activate:active>img{
        height: 37px !important;
    }
    #vk-player-function>.func-1>.main-function img{
        height: 40px;

        transition: var(--medium);
    }
    #vk-player-function>.func-2{
        display: flex;
        justify-content: space-between;

        padding: 10px 10px
    }
    #vk-player-function>.func-2>.sub-block{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 35px;
        width: 35px;

        border-radius: 50%;

        transition: var(--slow);
    }
    #vk-player-function>.func-2>.sub-block>img{
        height: 29px;
    }
    #vk-player-function>.func-2>.active{
        background-color: var(--black4);
    }
</style>