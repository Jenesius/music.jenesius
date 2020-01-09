<template>
  <div  id="app" ref = "mainBlock">
    <app-header></app-header>
    <div id = "main" >
      <view-vk></view-vk>
    </div>
  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader";
  import ViewVK from "./views/ViewVK";
  import Test from "./components/test/test";
  export default {
    components: {
      // eslint-disable-next-line vue/no-unused-components
      Test,
      'view-vk': ViewVK,
      AppHeader},
    mounted() {
      //this.$refs.mainBlock.style.height = (window.innerHeight) + 'px';
    }
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
