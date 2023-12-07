<template>
  <HeaderComponent projects="projects"/>
  <router-view/>
</template>

<script>
import './global.css'
import HeaderComponent from './components/HeaderComponent.vue';
import axios from 'axios'
export default {
  name: 'App',
  components: {HeaderComponent},
  methods: {
    searchAll(){
      axios.get('https://apigabrieljordan.onrender.com/api/projects')
        .then(response =>{
          this.projects = response.data.result
        })
    }
  },
  data() {
    return {
      projects: []
    }
  },
  beforeMount(){
    this.searchAll()
  }
}
</script>

<style>

</style>
