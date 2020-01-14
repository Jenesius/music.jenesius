<template>
    <div id = "header">
        <div id = "b-1" class = "side-block"
            v-on:click = "openMenu"
        >

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

</style>