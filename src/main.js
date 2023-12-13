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
      projects: [],
      skills: [
        {
          name: 'Html',
          class:'html skill',
          iClass: 'fa-brands fa-html5 fa-2xl'
        },
        {
          name: 'CSS',
          class: 'css skill',
          iClass:'fa-brands fa-css3-alt fa-2xl'
        },
        {
          name: 'JavaScipt',
          class:'vuejs skill',
          iClass:'fa-brands fa-js fa-xl'
        },
        {
          name: 'VueJS',
          class:'vuejs skill',
          iClass:'fa-brands fa-vuejs fa-2xl'
        },
        {
          name: 'NodeJS',
          class:'nodejs skill',
          iClass: 'fa-brands fa-node-js fa-2xl'
        },
        {
          name: 'MySQL',
          class:'mysql skill',
          iClass: 'fa-solid fa-database fa-2xl'
        },
        {
          name: 'Git/GitHub',
          class:'git skill',
          iClass: 'fa-brands fa-git-alt fa-xl'
        },
        {
          name: 'VBA',
          class:'vba skill',
          iClass: 'fa-solid fa-laptop-code fa-2xl'
        },
        {
          name: 'PowerBI',
          class:'powerbi skill',
          iClass: 'fa-solid fa-chart-simple fa-2xl'
        },
        {
          name: 'Figma',
          class:'figma skill',
          iClass: 'fa-brands fa-figma fa-2xl'
        }
      ],
      isDark: false
    }
  },
  mutations: {
    GetProjects (state) {
        axios.get('https://apigabrieljordan.onrender.com/api/projects')
        .then(response =>{
          state.projects = response.data.result
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
      }).catch((error)=>{
        return error
      })
    },
    ToggleTheme(){
      store.state.isDark = !store.state.isDark
      localStorage.setItem("isDark", JSON.stringify(store.state.isDark))
    },
    getTheme() {
      store.state.isDark = JSON.parse(localStorage.getItem("isDark"))
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
