
<template>
    <div id = "test"></div>
</template>

<script>
    /* eslint-disable no-console */

    import {mapState } from 'vuex';


    export default {
        name: "test",
        computed: {
            ...mapState({
                checkoutStatus: state => state.vk.position,
            }),
        },
        mounted() {
            console.log(this.checkoutStatus);
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