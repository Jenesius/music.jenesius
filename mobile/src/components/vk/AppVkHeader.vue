<template>
    <div class = "header">
        <div>
            <div class = "block-search">
                <img src = "./../../static/img/ico/search.svg" alt = "search-music-vk">
                <input type = "text" placeholder="Поиск по музыке">
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

    export default {
        props:{
            isOnline:Boolean,
        },
        methods:{
            setOnline: function () {
                this.$emit('setActivity', true);
            },
            setOffline: function(){
                this.$emit('setActivity', false);
            }
        },
        name: "AppVkHeader"
    }
</script>

<style scoped>
    .header{
        height: 50px;
        width: 100%;

        background-color: var(--black3);
        padding: 7px 10px;
    }
    .header>div{
        background-color: white;
        border-radius: 6px;
        height: 100%;
        width: 100%;
        padding: 4px 0;

        display: flex;
    }
    .header>div>.block-search{
        height: 100%;
        width: calc(100% - 140px);
        border-right:1px solid var(--gray3) ;

        display: flex;
        align-items: center;
        padding: 0 5px 0 0 ;
    }
    .header>div>.block-search>img{
        height: 80%;

        padding: 0 9px 0 9px;
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
        font-size: 11px;

        width: 135px;
        margin-left: 5px;
        align-items: center;
        position: relative;
    }
    .header>div>.block-toggle>p{
        flex-grow: 1;
        text-align: center;

        z-index: 1;

    }
    .header>div>.block-toggle>p{
        transition: 0.7s;
    }
    .header>div>.block-toggle>div{
        position: absolute;
        height: 100%;
        width: 46%;
        background-color: var(--main);

        border-radius: 6px;

        transition: 0.7s;
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