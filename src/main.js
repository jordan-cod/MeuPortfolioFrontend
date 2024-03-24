import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from "@meforma/vue-toaster";
import store from './store/index'
import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

createApp(App)
.use(router)
.use(Toaster)
.use(store)
.mount('#app')
