
<template>
    <div id = "test"></div>
</template>

<script>
    /* eslint-disable no-console */
    import Player from "../../static/js/player";

    // eslint-disable-next-line no-console
    console.log(Player);


    let _arr = [1,2,3,4,5,6];

    export default {
        name: "test",
        mounted() {

            this.$store.state.vk.commit('setOnline', _arr);
            Player.setList(this.$store.state.vk.getters.getOnline());

            console.log('STORE', this.$store.state.vk.getters.getOnline());

            console.log('PLAYER', Player.getList());
        }
    }
</script>

<style scoped>
#test{
    left:0;
    top:0;

    height: 100%;
    width: 100%;

    position: absolute;

}
</style>