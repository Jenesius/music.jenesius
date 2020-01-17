
<template>
    <div id = "test"></div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "test",
        computed: {
            ...mapState({
                message:function(state){
                    return state.test.message || "";
                }
            }),
        },
        methods:{
        },
        mounted() {

        }
    }
</script>

<style scoped>
#test{
    left:0;
    top:0;

    height: 0;
    width: 100%;

    position: absolute;

    z-index: 0;
    color:white;
}
</style>