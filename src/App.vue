<template>
  <HeaderComponent/>
  <router-view/>
</template>

<script>
import './global.css'
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {HeaderComponent}
}
</script>

<style>

</style>
