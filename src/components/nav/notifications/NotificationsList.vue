<template>
  <div class="notifications-list">
      <notification-message v-for="notification in notifications" :key="notification.id" :notification="notification"></notification-message>      
  </div>
</template>

<script>
import notificationMessage from './NotificationMessage.vue'
import {mapState} from "vuex";
export default {
    components:{
        'notification-message':notificationMessage
    },
    computed:mapState(["notifications"])
}
</script>

<style>
    .notifications-list{ 
        position: fixed;
        bottom:0;
        right:0;
        margin-right:15px;
        width:320px;
    }
</style>