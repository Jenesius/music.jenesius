<template>
    <div id = "short-vk-player">
        <div class = "info-block"
             @touchend.passive = "openPlayer"
        >
            <div class = "avatar">
                <img  alt = "avatar" :src = "track.info.urlImage">
            </div>
            <div class = "title">
                <p>{{ track.info.title }}</p>
            </div>
        </div>
        <div class = "nav">
            <div class = "active" @click = "activate">
                <div>
                    <img  alt = "active" :src = "srcIsActive">
                </div>
            </div>
            <div class = "next" @click = "next">
                <div>
                    <img src = "./../../static/img/ico/audio/next.svg" alt = "next">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Player from "../../static/js/player";
    import {mapGetters} from 'vuex';

    export default {
        name: "AppVkShortPlayer",
        computed:{
            track: function() {
                return Player.getTrack(this.$store.state.player.position);
            },
            ...mapGetters({
                srcIsActive: 'player/srcIsActive',
            }),
        },
        methods:{
            activate: function () {
                Player.activate();
            },
            next: function(){
                Player.next();
            },
            openPlayer: function(){
                this.$pushRoute('#player');
            }
        }
    }
</script>

<style scoped>
#short-vk-player{
    display: flex;

    height: 62px;
    width: 100%;

    background-color: var(--black3);
}
#short-vk-player>div{
    display: flex;
}
#short-vk-player>.info-block{
    width: calc(100% - 120px);
}
#short-vk-player>.info-block>.avatar{
    padding: 8px 10px;
}
#short-vk-player>.info-block>.avatar>img{
    height: 46px;
    width: 46px;

    border-radius: 6px;
}
#short-vk-player>.info-block>.title{
    align-items: center;
    display: flex;

    width: calc(100% - 66px);

    color:var(--white1);
    font-size: 15px;
}
#short-vk-player>.info-block>.title>p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
#short-vk-player>.nav{
    width: 120px;
}
#short-vk-player>.nav>div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
}
#short-vk-player>.nav>div>div{
    display: flex;
    align-items: center;
    justify-content: center;

    height: 37px;
    width: 37px;

    border-radius: 50%;

    transition: var(--medium);
}
#short-vk-player>.nav>div:active>div{
    background-color: var(--black4);
}
#short-vk-player>.nav>.next:active>div>img{
    transform: translateX(4px);
}
#short-vk-player>.nav>.active img{
    height: 20px;
}
#short-vk-player>.nav>.next img{
    height: 20px;

    transition: var(--medium);
}
</style>