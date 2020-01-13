<template>
  <div  id="app" ref = "mainBlock">
      <test/>
      <app-header/>
      <div id = "main" >
           <!-- <a href = "http://oauth.vk.com/authorize?client_id=7280361&redirect_uri=http://localhost:3131/auth/vk&response_type=code">13</a>-->
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
<style src='./static/css/default/app.css'></style>
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