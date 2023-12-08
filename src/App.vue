<template>
  <HeaderComponent/>
  <router-view :projects="projects"/>
</template>

<script>
import axios from 'axios';
import './global.css'
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {HeaderComponent},
  data() {
    return {
      projects: [],
      isActive: false
    }
  },
  methods: {
    searchAll(){
      axios.get('https://apigabrieljordan.onrender.com/api/projects')
        .then(response =>{
          this.projects = response.data.result
        })
    }  
  },
  beforeMount() {
    this.searchAll()
  }
}
</script>

<style>

</style>
