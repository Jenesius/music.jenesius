<template>
    <div class = "header">
        <div>
            <div class = "block-search">
                <img src = "./../../static/img/ico/search.svg" alt = "search-music-vk">
                <input type = "text" placeholder="Поиск по музыке" v-model = filterStr>
            </div>
            <div class = "block-toggle"
                :class = "{offline : !isOnline}"
            >
                <p class = "on"
                    @click="setOnline"
                >онлайн</p>
                <p class = "off"
                    @click="setOffline"
                >оффлайн</p>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        data: function(){
            return {
            };
        },
        computed:{
            filterStr: {
                get () {
                    return this.$store.state.vk.filterStr;
                },
                set (value) {
                    this.$store.commit('vk/updateFilter', value);
                },
            },
            ...mapState({
                isOnline: function(state){
                    return state.vk.position.isOnline;
                }
            }),
        },
        methods:{
            ...mapMutations({
                setPositionOnline: 'vk/setPositionOnline',
            }),
            setOnline: function () {
                this.setPositionOnline(true);
            },
            setOffline: function(){
                this.setPositionOnline(false);
            }
        },
        name: "AppVkHeader"
    }
</script>

<style scoped>
    .header{
        width: 100%;

        padding: 7px 10px;

        background-color: var(--black3);
    }
    .header>div{
        display: flex;

        height: 30px;
        width: 100%;

        border-radius: 6px;
        padding: 4px 0;

        background-color: white;
    }
    .header>div>.block-search{
        display: flex;
        align-items: center;

        height: 100%;
        width: calc(100% - 140px);

        border-right:1px solid var(--gray3) ;
        padding: 0 5px 0 0 ;
    }
    .header>div>.block-search>img{
        height: 80%;

        padding: 0 9px;
    }
    .header>div>.block-search>input{
        height: 100%;
        width: 100%;

        border: 0;

        outline: none;
    }
    .header>div>.block-toggle{
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: relative;

        width: 135px;

        margin-left: 5px;

        font-size: 11px;
    }
    .header>div>.block-toggle>p{
        flex-grow: 1;

        z-index: 1;

        text-align: center;
    }
    .header>div>.block-toggle>p{
        transition: var(--slow);
    }
    .header>div>.block-toggle>div{
        position: absolute;

        height: 100%;
        width: 46%;

        border-radius: 6px;

        background-color: var(--main);

        transition: var(--slow);
    }
    .header>div>.block-toggle>.on{
        color:var(--white1);
    }
    .header>div>.block-toggle>.off{
        color:var(--black2);
    }
    .header>div>.offline>div{
        transform: translate(109%);
    }
    .header>div>.offline>.on{
        color:var(--black2) !important;
    }
    .header>div>.offline>.off{
        color:var(--white1) !important;
    }
</style>