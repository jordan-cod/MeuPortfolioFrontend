import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from "@meforma/vue-toaster";
import { createStore } from 'vuex'
import axios from 'axios'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      projects: []
    }
  },
  mutations: {
    GetProjects (state) {
        axios.get('https://apigabrieljordan.onrender.com/api/projects')
        .then(response =>{
          state.projects = response.data.result
          console.log(state.projects)
        })
    }
  },
  getters: {
    AllProjects(state) {
        return state.projects
    }
  }
})


createApp(App)
.use(router)
.use(Toaster)
.use(store)
.mount('#app')
