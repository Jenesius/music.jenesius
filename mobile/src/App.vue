<template>
  <div  id="app">
    <app-header></app-header>
    <div id = "main" ref = "mainBlock">
      <view-vk></view-vk>
    </div>
  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader";
  import ViewVK from "./views/ViewVK";
  export default {
    components: {
      'view-vk': ViewVK,
      AppHeader},
    mounted() {
      this.$refs.mainBlock.style.height = (window.innerHeight - 44) + 'px';
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
}
#main{
  width: 100%;
  background-color: var(--black2);
}

</style>
