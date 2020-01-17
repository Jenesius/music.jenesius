<template>
    <div id = "header">
        <div  class = "side-block button-menu"
            v-on:click = "goTo('#menu')"
        >
            <img src = "../static/img/ico/menu/menu.svg" alt = "menu">
            <img src = "../static/img/ico/menu/vk.svg" class = "currentViewLogo">
        </div>
        <div id = "header-logo">
            <img src = "./../static/img/logo/logo.svg" alt = "logo">
        </div>
        <div id = "header-menu" class = "side-block">

        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        name: "AppHeader",
        methods:{
            goTo: function(route){
                this.$pushRoute(route);
            },
            openMenu: function(){
                this.setActiveMenu(true);
            },
            ...mapMutations({
                setActiveMenu:'menu/setActive',
            })
        }
    }
</script>

<style scoped>
    #header{
        --side:50px;

        height: var(--header);
        background-color: var(--black3);

        display: flex;
    }
    #header>div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #header>.side-block{
        width: var(--side);
    }
    #header-logo{
        flex-grow: 1;
    }
    #header-logo>img{
        height: 26px;
    }

    #header>.button-menu{

        padding: 0 10px;
        position: relative;
        align-items: center;


    }
    #header>.button-menu>img{
        height: 20px;
    }
    #header>.button-menu>.currentViewLogo{
        position: absolute;

        bottom: 10px;
        right: 10px;

        margin: auto;

        height: 9px;

        background-color: var(--black3);
        padding: 3px;

        border-radius: 5px;
    }



</style>