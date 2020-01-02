<template>
  <div  id="app">
    <app-header></app-header>
    <div id = "main">
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
      AppHeader}
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
  height:var(--main-block);
  width: 100%;
  background-color: var(--black2);
}

</style>
