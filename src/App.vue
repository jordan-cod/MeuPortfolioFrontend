<template>
  <HeaderComponent/>
    <router-view v-slot="{ Component }">
      <Transition name="page-slide" mode="out-in">
        <component :is="Component"/>
      </Transition>
    </router-view>
</template>

<script>
import './global.css'
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {HeaderComponent},
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    searchAll(){
      this.$store.commit('GetProjects')
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
