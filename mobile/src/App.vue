<template>
  <div  id="app" ref = "mainBlock">
      <app-header/>
      <div id = "main" >

          <router-view>

          </router-view>
      </div>
  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader";

  export default {
    components: {
        AppHeader
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
}
</style>