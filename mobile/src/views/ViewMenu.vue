<template>
    <div id = "menu"
        v-show ="isActive"
    >asdasd</div>
</template>

<script>
    export default {
        name: "ViewMenu",
        data: function(){
            return {
                isActive: false
            }
        },
        // eslint-disable-next-line no-unused-vars


        beforeRouteEnter (to, from, next){

            // if path is /vk i dont want remove previous View
            if(from.path === "/vk"){
                next(false);
            }else  next();

        },

    }
</script>

<style scoped>
#menu{
    height: 100%;
    width: 100%;
    background-color: red;
}
</style>