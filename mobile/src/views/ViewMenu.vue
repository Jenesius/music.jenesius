<template>
    <div id = "menu"
        :class = "{active: isActive}"
    >
        <div class = "menu-elem back"
           @click = "close"
         >
             <img src = "../static/img/ico/arrow/arrowLeft.svg">
        </div>
        <div class = "menu-elem vk"
              @click = "openVK"
        >
             <img src = "../static/img/logo/vk/vk.svg" alt = "vk">
        </div>
        <div class = "menu-elem beta">
             <img src = "../static/img/logo/stream/stream-no-active.svg" alt = "vk">
             <p>Бета</p>
        </div>
    </div>
</template>

<script>

    import {mapMutations, mapState} from 'vuex';

    export default {
        name: "ViewMenu",
        data: function(){
            return {
            }
        },
        computed:{
            ...mapState({
                isActive: function(state){
                   return state.menu.isActive;
                }
            })
        },
        methods:{
            ...mapMutations({
                setActiveMenu:'menu/setActive',
            }),
            close: function(){
                this.setActiveMenu(false);
            },
            openVK: function(){
                this.$router.push('/vk');
            },
        }

    }
</script>

<style scoped>
#menu{
    height: 100%;
    width: 60px;


    position: absolute;
    left:0;
    top:0;
    display: flex;
    flex-direction: column;


    transition:transform 0.2s;
    transform: translateX(-60px);

    background-color: var(--black1 );
}
#menu>.back{
    height: 50px !important;
}
.active{
    transform: translateX(0px) !important;
}

#menu>.menu-elem{
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
}
#menu>.menu-elem>img{
    height: 23px;
}
#menu>.beta>img{
    opacity: 0.5;
}
#menu>.beta>p{
    background-color: var(--main);
    font-size: 7px;
    color:white;
    padding: 0 3px;
    border-radius: 5px;

    position: absolute;

    right: 7px;
    bottom: 13px;

}

#menu>.back>img{
    height: 15px;
}

</style>