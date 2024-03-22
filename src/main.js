import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from "@meforma/vue-toaster";
import PrimeVue from 'primevue/config';
import store from './store/index'


createApp(App)
.use(router)
.use(Toaster)
.use(store)
.use(PrimeVue)
.mount('#app')
