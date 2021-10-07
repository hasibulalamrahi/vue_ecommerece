import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import header from './components/nav/header'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
const app = createApp(App);
app.use(store);
app.use(router);
app.component('header-nav',header);
app.mount('#app');