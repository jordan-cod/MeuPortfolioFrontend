import { createStore } from "vuex";
import axios from "axios";

// Create a new store instance.
const store = createStore({
    state () {
      return {
        isProjectOpen: false,
        projects: [{category: 'teste'}],
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
        language: false,
        isDark: false,
        user: {
          username: ''
        },
        mobile_menu: true
      }
    },
    mutations: {
      GetProjects (state) {
          axios.get('/projects')
          .then(response =>{
            state.projects = response.data
          })
      },
      ToggleTheme(){
        store.state.isDark = !store.state.isDark
        localStorage.setItem("isDark", JSON.stringify(store.state.isDark))
      },
      ToggleLanguage(){
        store.state.language = !store.state.language
        localStorage.setItem("language", JSON.stringify(store.state.language))
      },
      getTheme() {
        store.state.isDark = JSON.parse(localStorage.getItem("isDark"))
      },
      getLanguage() {
        store.state.language = JSON.parse(localStorage.getItem("language"))
      },
      ToggleMenu(){
        store.state.mobile_menu = !store.state.mobile_menu
      }
    },
    getters: {
      AllProjects(state) {
          return state.projects
      }
    },
    actions: {
    isTokenValid(expiration) {
      const expirationDate = new Date(expiration);
      const currentDate = new Date();
        if (!expiration) {
            return false;
        }
        if (currentDate < expirationDate){
          return false
        }else{
          return true
        }
    },
    InsertProject: async function(state, payload) {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      };

      try {
        await axios.post(`/projects`, payload, { headers: headers });
        state.commit('GetProjects')

        return { success: true, message: 'Projeto inserido com sucesso.'};
      } catch (error) {
        console.error('Erro ao inserir projeto:', error);
        return { success: false, message: 'Erro ao inserir projeto.' };
      }
    },
    DeleteProject: async function(state, payload) {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      };
    
      if (confirm("Do you really want to delete?")) {
        try {
          await axios.delete(`/projects/${payload.project_id}`, { headers: headers });
          state.commit('GetProjects')
          return { success: true, message: 'Projeto deletado com sucesso.' };
        } catch (error) {
          console.error('Erro ao deletar projeto:', error);
          return { success: false, message: 'Erro ao deletar projeto.' };
        }
      }
    }

    }
  })

export default store;