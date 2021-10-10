<template>
  <div id="app">
   <top-header></top-header>
   <app-header></app-header>
  <div class="container">
    <router-view/>

  </div>
  <notifications-list></notifications-list>
  <footer-section></footer-section>

  </div>
</template>
<script>

import topHeader from './components/nav/topHeader'
import appHeader from './components/nav/header'
import footerSection from './components/nav/footer'
import notificationsList from './components/nav/notifications/NotificationsList.vue'
export default{
  
  components:{
    'top-header':topHeader,

    'app-header':appHeader,
    'footer-section':footerSection,
     'notifications-list':notificationsList
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
