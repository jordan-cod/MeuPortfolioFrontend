<template>
  <HeaderComponent/>
    <router-view :projects="projects" v-slot="{ Component }" :arrayUpdate="arrayUpdate">
      <Transition name="page-slide" mode="out-in">
        <component :is="Component"/>
      </Transition>
    </router-view>
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
    arrayUpdate(Newarray) {
      this.projects = Newarray
    },
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
  .page-opacity-enter-active,
  .page-opacity-leave-active{
    transition: 600ms ease all;
  }
  .page-opacity-enter-from,
  .page-opacity-leave-to{
    opacity: 0;
  }
  .page-slide-enter-active,
  .page-slide-leave-active{
    transition: 400ms ease all;
  }
  .page-slide-enter-from,
  .page-slide-leave-to{
    transform: translateY(60px)
  }
</style>
