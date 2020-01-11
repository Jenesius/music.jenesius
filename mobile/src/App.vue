<template>
  <div  id="app" ref = "mainBlock">
      <test></test>
      <app-header/>
      <div id = "main" >

          <router-view>

          </router-view>
      </div>
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