<template>
    <div id="app">
        <test/>

        <app-header/>

        <div id = "main" >
            <router-view name="main"/>
        </div>

        <router-view name="menu"/>

        <router-view name="player"/>

    </div>
</template>

<script>
    import AppHeader from "./components/AppHeader";
    import test from "./components/test/test";

    export default {
        components: {
        AppHeader,
        test
        },
    }

</script>
<style src='./static/css/default/app.css'/>
<style>

    *{
        --header:44px;
        --main-block:calc(100% - 44px);
    }
    #app {
        height: 100%;
        overflow-y: scroll;
        position: relative;
    }
    #main{
        height: calc(100% - 44px);
        width: 100%;
        background-color: var(--black2);
        z-index: 100;
    }
</style>