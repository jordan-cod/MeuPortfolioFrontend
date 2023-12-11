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
    },
    DeleteProject(state, payload) {
      if(confirm("Do you really want to delete?")){
                  axios.delete(`https://apigabrieljordan.onrender.com/api/project/${payload.project_id}`)
                  .then(() => {
                      state.projects.splice(payload.project_index, 1)
                  })
      }
    },
    InsertProject(state, payload){
      const qs = require('qs')
      const body = payload
      axios.post(`https://apigabrieljordan.onrender.com/api/project`, qs.stringify(body))
      .then(() => {
          state.projects.push(body)
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
