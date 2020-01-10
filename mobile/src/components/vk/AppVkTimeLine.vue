<template>
    <div id = "vkTimeLine">
        <div class = "inputTime">
            <input type = "range"
                v-model = "inputTimeLine" min = "0" max = "100" step = "0.5"
                :style = "backgroundRange"
                @touchstart = "onTouchStart"
                @touchend = "onTouchEnd"
            >
        </div>
        <div class = "trackTime">
            <span>{{ currentTime }}</span>
            <span>{{ customDurationTrack }}</span>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import Player from '../../static/js/player';
    import Time from "../../static/js/default/timeModify";

    export default {
        name: "AppVkTimeLine",
        props:{
            durationTrack:String,
        },
        data: function(){
            return {
                inputTimeLine:Number,
                currentTime:"0:00"
            }
        },
        computed: {
            ...mapState({
                idTimerLine: function (state) {
                    return state.vk.player.timerTimeLine;
                },
            }),
            backgroundRange: function(){
                // eslint-disable-next-line no-console
                console.log(this.inputTimeLine);
                return {

                    background:'-webkit-linear-gradient(left ,var(--main) 0%,var(--main) '+ (this.inputTimeLine*1.0 + 0.4 )+'%,#fff '+ (this.inputTimeLine*1.0)+'%, #fff 100%)'
                };
            },
            customDurationTrack: function () {
                return Time(this.durationTrack).modifyDuration();
            }

        },
        methods:{
            ...mapMutations({
                setTimerTimeLine:'vk/setTimerTimeLine',
            }),
            updateTimer: function () {
                this.inputTimeLine =  Player.track.currentTime / Player.track.duration * 100;

                this.currentTime = Time(Player.track.currentTime).modifyDuration();
                let tmp = setInterval(()=>{


                    this.inputTimeLine =  Player.track.currentTime / Player.track.duration * 100;

                    this.currentTime = Time(Player.track.currentTime).modifyDuration();
                }, 1000);
                this.setTimerTimeLine(tmp);
            },
            onTouchStart: function(){
                clearInterval(this.idTimerLine);
            },
            onTouchEnd: function(){


                Player.track.currentTime = this.durationTrack * this. inputTimeLine/ 100;

                this.updateTimer();
            },
        },
        mounted() {
            this.updateTimer();
        }
    }
</script>

<style scoped>
    #vkTimeLine{
        display: flex;
        flex-direction: column;
    }
    #vkTimeLine>.inputTime{
        display: flex;
        padding: 7px 0 4px 0;
    }
    #vkTimeLine>.inputTime>input{
        width: 100%;
        -webkit-appearance: none;
        border-radius:2px;
        height:2px;
        outline : none;

    }
    #vkTimeLine>.inputTime>input::-webkit-slider-thumb{
        -webkit-appearance: none;
        width:13px;
        height:13px;
        background:var(--main);
        border-radius:50%;
        cursor:pointer;
        transition:.3s;

        outline: none;
    }
    #vkTimeLine>.trackTime{
        display: flex;
        justify-content: space-between;
        color:var(--gray1);
        font-size: 12px;
    }
</style>