<template>
    <transition name = "fade">
        <div class = "site-menu" ref="siteHeader">
            <div class = "site-menu-elem back"  @click = "close">
                 <img src = "../static/img/ico/arrow/arrowLeft.svg" alt = "close menu">
            </div>
            <div class = "site-menu-elem vk"  @click = "openVK">
                 <img src = "../static/img/logo/vk/vk.svg" alt = "vk">
            </div>
            <div class = "site-menu-elem beta">
                 <img src = "../static/img/logo/stream/stream-no-active.svg" alt = "vk">
                 <p>Бета</p>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ViewMenu",
        methods:{
            close: function(){
                this.$backRoute();
            },
            openVK: function(){
                this.$backRoute();
            },
        },
    }
</script>

<style scoped>
.site-menu{
    --width:60px;

    display: flex;
    flex-direction: column;

    position: absolute;
    left:0;
    top:0;

    height: 100%;
    width: var(--width);

    background-color: var(--black1);
}
.fade-enter-active, .fade-leave-active {
    transition: transform var(--medium);
}
.fade-enter, .fade-leave-to  {
    transform: translateX(calc(var(--width) * -1));
}
.site-menu>.back{
    height: 50px !important;
}
.site-menu-elem{
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    width: 100%;
    height: 60px;
}
.site-menu-elem>img{
    height: 23px;
}
.site-menu>.beta>img{
    opacity: 0.5;
}
.site-menu>.beta>p{
    position: absolute;
    right: 7px;
    bottom: 13px;

    border-radius: 5px;
    padding: 0 3px;

    background-color: var(--main);
    font-size: 7px;
    color:var(--white1);
}
.site-menu>.back>img{
    height: 15px;
}
</style>